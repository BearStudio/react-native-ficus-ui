import {
  ReactElement,
  cloneElement,
  isValidElement,
  useEffect,
  useState,
} from 'react';

import { isFunction } from '@chakra-ui/utils';
import { GestureResponderEvent } from 'react-native';

import { ThemingProps, omitThemingProps } from '../../style-system';
import { Icon } from '../icon';
import {
  type NativeFicusProps,
  ficus,
  forwardRef,
  useMultiStyleConfig,
} from '../system';
import { useCheckbox } from './checkbox.service';
import { CheckboxOptions } from './checkbox.types';

export interface CheckboxProps
  extends Omit<NativeFicusProps<'TouchableOpacity'>, 'children'>,
    ThemingProps<'Checkbox'>,
    CheckboxOptions {}

export const Checkbox = forwardRef<CheckboxProps, 'TouchableOpacity'>(
  ({ icon = <Icon name="checkmark-outline" />, ...props }, ref) => {
    const styles = useMultiStyleConfig('Checkbox', props);
    const {
      isDisabled,
      isChecked,
      defaultChecked,
      onChange,
      onPress,
      children,
      value,
      bg,
      __styles,
      ...rest
    } = omitThemingProps(props);

    const [checked, setChecked] = useState(
      ('isChecked' in props ? isChecked : defaultChecked) ?? false
    );

    const { containerStyles, controlStyles, labelStyles, iconStyles } =
      useCheckbox({ ...props, isChecked: checked }, styles);

    useEffect(() => {
      if ('isChecked' in props) {
        setChecked(props.isChecked ?? false);
      }
    }, [props]);

    /**
     * on press checkbox
     */
    const handleOnPress = (event: GestureResponderEvent) => {
      if (isDisabled) {
        return;
      }

      setChecked(!checked);

      if (isFunction(onChange)) {
        onChange(value);
      }

      if (isFunction(onPress)) {
        onPress(event);
      }
    };

    const enhancedIcon = isValidElement(icon)
      ? cloneElement(icon as ReactElement, {
          ...(iconStyles.name ? { name: iconStyles.name } : {}),
          ...(iconStyles.color ? { color: iconStyles.color } : {}),
          ...(iconStyles.size ? { size: iconStyles.size } : {}),
          ...(iconStyles.iconSet ? { iconSet: iconStyles.iconSet } : {}),
          __styles: iconStyles,
        })
      : icon;

    const renderChildren = () => {
      if (isFunction(children)) {
        return children({
          isDisabled: isDisabled ?? false,
          isChecked: checked,
          onToggle: handleOnPress,
        });
      }

      return (
        <>
          <ficus.View __styles={controlStyles}>{enhancedIcon}</ficus.View>
          {children && typeof children === 'string' ? (
            <ficus.Text __styles={labelStyles}>{children}</ficus.Text>
          ) : (
            children
          )}
        </>
      );
    };

    return (
      <ficus.TouchableOpacity
        ref={ref}
        onPress={handleOnPress}
        disabled={isDisabled}
        activeOpacity={0.5}
        __styles={containerStyles}
        {...rest}
      >
        {renderChildren()}
      </ficus.TouchableOpacity>
    );
  }
);
