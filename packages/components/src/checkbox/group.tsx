import * as React from 'react';
import { useState } from 'react';

import { type NativeFicusProps, ficus, forwardRef } from '../system';
import { CheckboxOptions } from './checkbox';

export interface CheckboxProps
  extends Omit<NativeFicusProps<'View'>, 'children'>,
    CheckboxOptions {}

export const CheckboxGroup = forwardRef<CheckboxProps, 'View'>(
  function Checkbox(props, ref) {
    const [value, setValue] = useState(props.value ?? props.defaultValue ?? []);
    const {
      children,
      onChange: onChangeProp,
      value: propsValue,
      colorScheme,
      ...rest
    } = props;

    /**
     * checks if checked value is already in the state or not,
     * if it, remove it else add it
     *
     * @param value
     */
    const onChange = (optionValue: any) => {
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

      if (onChangeProp) {
        onChangeProp(newValue);
      }
    };

    /**
     * clones the children and add isChecked, onChange prop
     */
    const renderChildren = () => {
      return React.Children.map(
        children as any,
        (child: React.ReactElement) => {
          return React.cloneElement(child, {
            onChange,
            isChecked: value.indexOf(child.props.value) > -1,
            ...(colorScheme ? { colorScheme } : {}),
          });
        }
      );
    };

    return (
      <ficus.View ref={ref} {...rest}>
        {renderChildren()}
      </ficus.View>
    );
  }
);
