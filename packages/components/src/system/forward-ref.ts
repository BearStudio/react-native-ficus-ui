/**
 * Retrieved from Chakra UI.
 *
 * All credit goes to Chance (Reach UI), Haz (Reakit) and (fluentui)
 * for creating the base type definitions upon which we improved on
 *
 */
import { forwardRef as forwardReactRef } from 'react';

import { ComponentWithAs, PropsOf, RightJoinProps } from './system.types';
import { RNElementType } from './system.utils';

export function forwardRef<
  Props extends object,
  Component extends RNElementType,
>(
  component: React.ForwardRefRenderFunction<
    any,
    RightJoinProps<PropsOf<Component>, Props> & {
      as?: RNElementType;
    }
  >
) {
  // @ts-ignore
  return forwardReactRef(component) as unknown as ComponentWithAs<
    Component,
    Props
  >;
}
