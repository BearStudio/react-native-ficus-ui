import { ReactNode, useEffect, useState } from 'react';

import { isFunction } from '@chakra-ui/utils';
import { TextStyleProps, splitTextProps } from '@ficus-ui/style-system';
import { getThemeProperty, theme } from '@ficus-ui/theme';

import {
  type NativeFicusProps,
  ficus,
  forwardRef,
  useStyleConfig,
} from '../system';

export interface CheckboxStates {
  isChecked?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export interface CheckboxOptions extends CheckboxStates {
  prefix?: ReactNode;
  suffix?: ReactNode;
  colorScheme?: string;
  defaultChecked?: boolean;
  icon?: string | React.ReactNode;
  iconColor?: string;
  isChecked?: boolean;
  isLoading?: boolean;
  onChange?: (value: any) => void;
  value?: any;
  children?: ((states: CheckboxStates) => React.ReactNode) | React.ReactNode;
  onPress?: (value: any) => void;
  onChecked?: (value: any) => void;
  defaultValue?: any;
  size?: 'sm' | 'lg';
}

export interface CheckboxProps
  extends Omit<NativeFicusProps<'Pressable'>, 'children' | 'onPress'>,
    TextStyleProps,
    CheckboxOptions {}

export const Checkbox = forwardRef<CheckboxProps, 'Pressable'>(
  function Checkbox(props, ref) {
    const styles = useStyleConfig('Checkbox', props);

    const {
      children,
      prefix,
      suffix,
      value,
      isLoading,
      isDisabled,
      onPress: onPressProp,
      onChange,
      isChecked,
      size = 'sm',
      colorScheme,
      onChecked,
      ...rest
    } = props;
    const [textStyles, restStyles] = splitTextProps(styles);
    const [checked, setChecked] = useState<boolean>(
      props.isChecked || props.defaultChecked ? true : false
    );
    const onPress = (event: any) => {
      if (isDisabled) {
        return;
      }

      setChecked(!checked);

      if (isFunction(onChecked)) {
        onChecked(!checked);
      }

      if (isFunction(onPressProp)) {
        onPressProp(event);
      }

      // if onChange prop is a valid function, call it
      if (isFunction(onChange)) {
        onChange(value);
      }
    };

    // const getIcon = () => { // will do after merged
    //   if (isLoading) {
    //     return (
    //       <Box
    //         w={iconSize}
    //         h={iconSize}
    //         alignItems="center"
    //         justifyContent="center"
    //       >
    //         <Spinner size={size} color={`${colorScheme}.600`} />
    //       </Box>
    //     );
    //   }

    //   if (props.icon && typeof icon === 'string') {
    //     return (
    //       <Icon
    //         name={icon}
    //         color={iconColorValue}
    //         style={{ zIndex: 2, position: 'relative' }}
    //         fontFamily="AntDesign"
    //         fontSize={iconSize}
    //       />
    //     );
    //   }

    //   if (props.icon) {
    //     return icon;
    //   }

    //   return (
    //     <Icon
    //       name={iconName}
    //       color={`${colorScheme}.600`}
    //       zIndex={2}
    //       position="relative"
    //       fontFamily="MaterialIcons"
    //       fontSize={iconSize}
    //     />
    //   );
    // };

    // const iconObj = getIcon();

    const renderChildren = () => {
      if (isFunction(children)) {
        return children({
          isDisabled: isDisabled ?? false,
          isChecked: checked,
          isLoading,
        });
      }

      return (
        <>
          {prefix}
          <ficus.View>
            <ficus.View
              h={getThemeProperty(theme.radio, size)}
              w={getThemeProperty(theme.radio, size)}
              borderWidth={1}
              borderColor={`${colorScheme}.600`}
              alignItems="center"
              justifyContent="center"
            >
              {/* {iconObj} */}
              <ficus.Text>{checked ? 'X' : ''}</ficus.Text>
            </ficus.View>
          </ficus.View>
          {children && typeof children === 'string' ? (
            <ficus.Text
              style={{ color: '#000000', fontSize: 27 }}
              __styles={textStyles}
              ml="xs"
            >
              {children}
            </ficus.Text>
          ) : (
            children
          )}
          {suffix}
        </>
      );
    };

    return (
      <ficus.Pressable
        {...rest}
        style={{
          alignSelf: 'flex-start',
        }}
        disabled={isDisabled ?? isLoading}
        __styles={restStyles}
        onPress={isDisabled || isLoading ? undefined : onPress}
      >
        <ficus.View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {renderChildren()}
        </ficus.View>
      </ficus.Pressable>
    );
  }
);
