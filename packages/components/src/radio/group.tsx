import * as React from 'react';
import { useState } from 'react';

import { type NativeFicusProps, ficus, forwardRef } from '../system';
import { RadioOptions } from './radio';

export interface RadioProps
  extends Omit<NativeFicusProps<'View'>, 'children'>,
    RadioOptions {}

export const RadioGroup = forwardRef<RadioProps, 'View'>(
  function Radio(props, ref) {
    const [value, setValue] = useState(
      props.value ?? props.defaultValue ?? null
    );
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
      if (!('value' in props)) {
        setValue(optionValue);
      }

      if (onChangeProp) {
        onChangeProp(optionValue);
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
            isChecked: value === child.props.value,
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
