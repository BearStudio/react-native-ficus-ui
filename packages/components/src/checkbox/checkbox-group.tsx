import React, { useId, useState } from 'react';

import { omitThemingProps } from '@ficus-ui/style-system';

import { Checkbox } from '.';
import {
  NativeFicusProps,
  ficus,
  forwardRef,
  useMultiStyleConfig,
} from '../system';
import { CheckboxGroupOptions, CheckboxStates } from './checkbox.types';

export interface CheckboxGroupProps
  extends Omit<NativeFicusProps<'View'>, 'children'>,
    CheckboxGroupOptions {}

export const CheckboxGroup = forwardRef<CheckboxGroupProps, 'View'>(
  (props, ref) => {
    const styles = useMultiStyleConfig('CheckboxGroup', props);
    const { isDisabled, onChange, children, ...rest } = omitThemingProps(props);

    const checkboxGroupId = useId();
    const [value, setValue] = useState(props.value ?? props.defaultValue ?? []);

    /**
     * checks if checked value is already in the state or not,
     * if it, remove it else add it
     *
     * @param value
     */
    const handleOnChange = (optionValue: any) => {
      const optionIndex = value.indexOf(optionValue);
      const newValue = [...value];

      if (optionIndex === -1) {
        newValue.push(optionValue);
      } else {
        newValue.splice(optionIndex, 1);
      }

      if (!('value' in props)) {
        setValue(newValue);
      }

      if (onChange) {
        onChange(newValue);
      }
    };

    /**
     * clones the children and add checked, onChange prop
     */
    const renderChildren = () => {
      const renderRecursive = (
        childrenProp:
          | string
          | number
          | boolean
          | React.ReactNode
          | ((states: CheckboxStates) => React.ReactNode)
      ): React.ReactNode => {
        // @ts-expect-error
        return React.Children.map(childrenProp, (child): React.ReactNode => {
          if (!React.isValidElement(child)) return child;

          // If child is a Radio component
          if (child.type === Checkbox) {
            return React.cloneElement(child, {
              key: `checkbox-${checkboxGroupId}-${child.props.value}`,
              // @ts-expect-error [FIXME]
              onChange: handleOnChange,
              isChecked: value.indexOf(child.props.value) > -1,
              ...(props.colorScheme ? { colorScheme: props.colorScheme } : {}),
            });
          }

          // If child has children, apply recursively
          if (child.props?.children) {
            const updatedChildren = renderRecursive(child.props.children);
            return React.cloneElement(child, undefined, updatedChildren);
          }

          return child;
        });
      };

      return children ? renderRecursive(children) : null;
    };

    return (
      <ficus.View ref={ref} __styles={styles} {...rest}>
        {renderChildren()}
      </ficus.View>
    );
  }
);
