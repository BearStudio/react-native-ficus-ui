import {
  omitThemingProps,
  ThemingProps,
} from '@ficus-ui/style-system';
import { ReactElement, cloneElement, isValidElement } from 'react';

import { forwardRef, useStyleConfig } from '../system';
import { ButtonProps } from '../button';
import { Pressable } from '../pressable';
import { useButton } from '../button/button.service';
import { omit } from '@chakra-ui/utils';
import { ButtonSpinner } from '../button/button-spinner';

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
        size: textStyles?.fontSize
      }) : props.icon;

    return (
      <Pressable
        ref={ref}
        disabled={isDisabled || isLoading}
        aria-disabled={isDisabled || isLoading}
        rounded={props.isRound ? 'full' : undefined}
        __styles={buttonStyles}
        {...rest}
      >
        {isLoading ? (<ButtonSpinner {...spinnerStyles} />) : enhancedIcon }
      </Pressable>
    );
  }
);
