import React, { useState } from 'react';

import { omitThemingProps } from '@ficus-ui/style-system';

import { Radio } from '.';
import {
  NativeFicusProps,
  ficus,
  forwardRef,
  useMultiStyleConfig,
} from '../system';
import { RadioGroupOptions, RadioStates } from './radio.types';

export interface RadioGroupProps
  extends Omit<NativeFicusProps<'View'>, 'children'>,
    RadioGroupOptions {}

export const RadioGroup = forwardRef<RadioGroupProps, 'View'>((props, ref) => {
  const styles = useMultiStyleConfig('RadioGroup', props);
  const { isDisabled, onChange, children, ...rest } = omitThemingProps(props);

  const [value, setValue] = useState(props.value ?? props.defaultValue ?? []);

  /**
   * checks if checked value is already in the state or not,
   * if it, remove it else add it
   *
   * @param value
   */
  const handleOnChange = (optionValue: any) => {
    if (!('value' in props)) {
      setValue(optionValue);
    }

    if (onChange) {
      onChange(optionValue);
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
        | ((states: RadioStates) => React.ReactNode)
    ): React.ReactNode => {
      // @ts-expect-error
      return React.Children.map(childrenProp, (child): React.ReactNode => {
        if (!React.isValidElement(child)) return child;

        // If child is a Radio component
        if (child.type === Radio) {
          return React.cloneElement(child, {
            key: `radio-${child.props.value}`,
            // @ts-expect-error
            onChange: handleOnChange,
            isChecked: value === child.props.value,
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
});
