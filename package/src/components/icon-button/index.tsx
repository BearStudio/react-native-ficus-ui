import { ReactElement, cloneElement, isValidElement } from 'react';

import { omit } from '@chakra-ui/utils';

import { ThemingProps, omitThemingProps } from '../../style-system';
import { ButtonProps } from '../button';
import { ButtonSpinner } from '../button/button-spinner';
import { useButton } from '../button/button.service';
import { Pressable } from '../pressable';
import { forwardRef, useStyleConfig } from '../system';

export interface IconButtonProps
  extends ButtonProps,
    ThemingProps<'IconButton'> {
  icon: React.ReactNode;
}

export const IconButton = forwardRef<IconButtonProps, 'Pressable'>(
  function IconButton(props, ref) {
    const styles = useStyleConfig('IconButton', props);

    const { textStyles, buttonStyles, spinnerStyles } = useButton(
      props,
      styles
    );

    const { isLoading, isDisabled, ...rest } = omitThemingProps(
      omit(props, ['children'])
    );

    const enhancedIcon = isValidElement(props.icon)
      ? cloneElement(props.icon as ReactElement, {
          color: textStyles?.color,
          size: textStyles?.fontSize,
        })
      : props.icon;

    return (
      <Pressable
        ref={ref}
        disabled={isDisabled || isLoading}
        aria-disabled={isDisabled || isLoading}
        rounded={props.isRound ? 'full' : undefined}
        __styles={buttonStyles}
        {...rest}
      >
        {isLoading ? <ButtonSpinner {...spinnerStyles} /> : enhancedIcon}
      </Pressable>
    );
  }
);
