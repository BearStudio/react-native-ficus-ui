import * as React from 'react';
import { useState } from 'react';

import { useTheme } from '../../theme';
import { handleResponsiveProps } from '../../types';
import { useDefaultProps } from '../../utilities/useDefaultProps';
import { Box } from '../box/box.component';
import { RadioGroupProps } from './radio.type';

const RadioGroup: React.FunctionComponent<RadioGroupProps> = (
  incomingProps
) => {
  const { theme, windowWidth } = useTheme();
  const props = useDefaultProps(
    'RadioGroup',
    handleResponsiveProps(incomingProps, theme, windowWidth),
    {}
  );

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
