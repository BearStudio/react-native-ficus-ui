import * as React from 'react';
import { GestureResponderEvent as RNGestureResponderEvent } from 'react-native';

import { Box } from '../box/box.component';
import { Icon } from '../icon/icon.component';
import { Text } from '../text/text.component';
import { SelectOptionProps } from './select.option.type';
import { Button } from '../button/button.component';
import { useDefaultProps } from '../../utilities/useDefaultProps';

const Option: React.FunctionComponent<SelectOptionProps> = (incomingProps) => {
  const props = useDefaultProps('Option', incomingProps, {
    onSelect: () => {},
    borderRadius: 0,
    bg: 'white',
    px: 'xl',
    py: 'xl',
    colorScheme: 'transparent',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    center: false,
    prefix: (
      <Icon
        name="ios-checkmark-circle"
        fontFamily="Ionicons"
        fontSize="2xl"
        color="green.600"
        mr="md"
        alignSelf="center"
      />
    ),
  });

  const {
    children,
    value,
    prefix,
    onPress: onPressProp,
    onSelect,
    selectedValue,
    ...rest
  } = props;
  const isSelected = Array.isArray(selectedValue)
    ? selectedValue.includes(value)
    : selectedValue === value;

  /**
   * on press select option
   *
   * @param e
   */
  const onPress = (event: RNGestureResponderEvent) => {
    if (onSelect) {
      onSelect(value);
    }

    if (onPressProp) {
      onPressProp(event);
    }
  };

  const renderChildren = () => {
    if (typeof children === 'string') {
      return <Text>{children}</Text>;
    }

    return children;
  };

  return (
    <Button onPress={onPress} {...rest}>
      <Box flexDirection="row" alignItems="center">
        {prefix && (
          <Box minW="8%" opacity={isSelected ? 1 : 0}>
            {prefix}
          </Box>
        )}
        <Box flex={1} bg="transparent">
          {renderChildren()}
        </Box>
      </Box>
    </Button>
  );
};

// Option.defaultProps = {
//   onSelect: () => {},
//   borderRadius: 0,
//   bg: 'white',
//   p: 0,
//   color: 'black',
//   alignItems: 'flex-start',
//   justifyContent: 'flex-start',
//   center: false,
// };

export { Option };
