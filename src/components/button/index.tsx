import { ReactNode } from 'react';

import { omit } from '@chakra-ui/utils';

import {
  TextStyleProps,
  ThemingProps,
  omitThemingProps,
} from '../../style-system';
import { Pressable, PressableProps } from '../pressable';
import { ficus, forwardRef, useStyleConfig } from '../system';
import { ButtonSpinner } from './button-spinner';
import { useButton } from './button.service';
import type { ButtonOptions } from './button.types';

export interface ButtonProps
  extends PressableProps,
    TextStyleProps,
    ButtonOptions,
    ThemingProps<'Button'> {}

export const Button = forwardRef<ButtonProps, 'Pressable'>(
  function Button(props, ref) {
    const styles = useStyleConfig('Button', props);

    const { getChildren, buttonStyles, spinnerStyles, loadingText } = useButton(
      props,
      styles
    );

    const { isLoading, isDisabled, ...rest } = omitThemingProps(
      omit(props, ['children'])
    );

    return (
      <Pressable
        ref={ref}
        disabled={isDisabled || isLoading}
        aria-disabled={isDisabled || isLoading}
        rounded={props.isRound ? 'full' : undefined}
        __styles={buttonStyles}
        {...rest}
      >
        {isLoading && <ButtonSpinner {...spinnerStyles} />}

        {isLoading ? (
          loadingText || (
            <ficus.View opacity={0}>{getChildren() as ReactNode}</ficus.View>
          )
        ) : (
          <>{getChildren()}</>
        )}
      </Pressable>
    );
  }
);
