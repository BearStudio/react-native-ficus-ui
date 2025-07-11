import type { BaseRNElements } from './base-elements';
import { FicusStyledOptions, NativeFicusComponents, styled } from './system';
import { FicusComponent } from './system.types';
import { RNElementType } from './system.utils';

interface FicusFactory {
  <T extends RNElementType, P extends object = {}>(
    component: T,
    options?: FicusStyledOptions
  ): FicusComponent<T, P>;
}

function factory() {
  const cache = new Map<RNElementType, FicusComponent<RNElementType>>();

  return new Proxy(styled, {
    apply(_target, _thisArg, argArray: [RNElementType, FicusStyledOptions]) {
      return styled(...argArray);
    },

    get(_, element: BaseRNElements) {
      if (!cache.has(element)) {
        cache.set(element, styled(element));
      }
      return cache.get(element);
    },
  }) as FicusFactory & NativeFicusComponents;
}

export const ficus = factory();
