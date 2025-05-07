import React, { useState } from 'react';

import { omitThemingProps } from '@ficus-ui/style-system';

import {
  NativeFicusProps,
  ficus,
  forwardRef,
  useMultiStyleConfig,
} from '../system';
import { CheckboxGroupOptions } from './checkbox.types';

export interface CheckboxGroupProps
  extends Omit<NativeFicusProps<'View'>, 'children'>,
    CheckboxGroupOptions {}

export const CheckboxGroup = forwardRef<CheckboxGroupProps, 'View'>((props) => {
  const styles = useMultiStyleConfig('CheckboxGroup', props);
  const { isDisabled, onChange, children, ...rest } = omitThemingProps(props);

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
    return children ? (
      React.Children.map(
        children as React.ReactElement<any>,
        (child: React.ReactElement) => {
          return React.cloneElement(child, {
            onChange: handleOnChange,
            defaultChecked: value.indexOf(child.props.value) > -1,
            ...(props.colorScheme ? { colorScheme: props.colorScheme } : {}),
          });
        }
      )
    ) : (
      <></>
    );
  };

  return (
    <ficus.View __styles={styles} {...rest}>
      {renderChildren()}
    </ficus.View>
  );
});
