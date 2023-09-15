import * as React from 'react';
import { useState } from 'react';

import { RadioGroupProps } from './radio.type';
import { Box } from '../box/box.component';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const RadioGroup: React.FunctionComponent<RadioGroupProps> = (
  incomingProps
) => {
  const props = useDefaultProps('RadioGroup', incomingProps, {});

  const [value, setValue] = useState(props.value ?? props.defaultValue ?? null);
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
    return React.Children.map(children, (child: React.ReactElement) => {
      return React.cloneElement(child, {
        onChange,
        isChecked: value === child.props.value,
        ...(colorScheme ? { colorScheme } : {}),
      });
    });
  };

  return <Box {...rest}>{renderChildren()}</Box>;
};

export { RadioGroup };
