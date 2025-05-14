import { useEffect, useState } from 'react';

import { isFunction } from '@chakra-ui/utils';
import { ThemingProps, omitThemingProps } from '@ficus-ui/style-system';
import { GestureResponderEvent } from 'react-native';

import {
  type NativeFicusProps,
  ficus,
  forwardRef,
  useMultiStyleConfig,
} from '../system';
import { useRadio } from './radio.service';
import { RadioOptions } from './radio.types';

export interface RadioProps
  extends Omit<NativeFicusProps<'TouchableOpacity'>, 'children'>,
    ThemingProps<'Radio'>,
    RadioOptions {}

export const Radio = forwardRef<RadioProps, 'TouchableOpacity'>(
  (props, ref) => {
    const styles = useMultiStyleConfig('Radio', props);
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
      ('checked' in props ? isChecked : defaultChecked) ?? false
    );

    const { containerStyles, controlStyles, labelStyles } = useRadio(
      { ...props, isChecked: checked },
      styles
    );

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

      setChecked(true);

      if (isFunction(onChange)) {
        onChange(value);
      }

      if (isFunction(onPress)) {
        onPress(event);
      }
    };

    const renderChildren = () => {
      if (isFunction(children)) {
        return children({
          isDisabled: isDisabled ?? false,
          isChecked: checked,
        });
      }

      return (
        <>
          <ficus.View __styles={controlStyles} />
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
