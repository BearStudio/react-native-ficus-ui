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

export interface RadioStates {
  isFocused?: boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export interface RadioOptions extends RadioStates {
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
  children: ((states: RadioStates) => React.ReactNode) | React.ReactNode;
  onPress?: (value: any) => void;
  defaultValue?: any;
  size?: 'sm' | 'lg';
}

export interface RadioProps
  extends Omit<NativeFicusProps<'Pressable'>, 'children' | 'onPress'>,
    TextStyleProps,
    RadioOptions {}

export const Radio = forwardRef<RadioProps, 'Pressable'>(
  function Radio(props, ref) {
    const styles = useStyleConfig('Radio', props);

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
      ...rest
    } = props;
    const [textStyles, restStyles] = splitTextProps(styles);
    const [checked, setChecked] = useState<boolean>(
      isChecked || props.defaultChecked ? true : false
    );
    const [isFocused, setIsFocused] = useState(false);
    useEffect(() => {
      if ('isChecked' in props) {
        setChecked(isChecked ?? false);
      }
    }, [props]);
    const onPress = (event: any) => {
      if (isDisabled) {
        return;
      }
      if (!('isChecked' in props)) {
        setChecked(true);
      }

      if (isFunction(onPressProp)) {
        onPressProp(event);
      }

      if (isFunction(onChange)) {
        onChange(value);
      }
    };

    /**
     * sets focussed to true
     *
     * @param event
     */
    const onPressIn = () => {
      setIsFocused(true);
    };

    /**
     * sets focussed to true
     *
     * @param event
     */
    const onPressOut = () => {
      setIsFocused(false);
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
          isFocused,
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
              borderRadius={getThemeProperty(theme.radio, size)}
              borderColor={`${colorScheme}.600`}
              alignItems="center"
              justifyContent="center"
            >
              {/* {iconObj} */}
              <ficus.View
                h={getThemeProperty(theme.radio, size) / 2}
                w={getThemeProperty(theme.radio, size) / 2}
                borderRadius={getThemeProperty(theme.radio, size)}
                bg={checked ? 'black' : 'transparent'}
              />
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
        onPress={isDisabled ? undefined : onPress}
        onPressIn={isDisabled ? undefined : onPressIn}
        onPressOut={isDisabled ? undefined : onPressOut}
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
