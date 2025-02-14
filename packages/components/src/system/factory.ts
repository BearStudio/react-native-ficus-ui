import { FicusStyledOptions, NativeFicusComponents, styled } from './system';
import { FicusComponent } from './system.types';
import { NativeElements } from './system.utils';

interface FicusFactory {
  <T extends NativeElements, P extends object = {}>(
    component: T,
    options?: FicusStyledOptions
  ): FicusComponent<T, P>;
}

function factory() {
  const cache = new Map<NativeElements, FicusComponent<NativeElements>>();

  return new Proxy(styled, {
    /**
     * @example
     * const Div = ficus("div")
     * const WithFicus = ficus(AnotherComponent)
     */
    apply(_target, _thisArg, argArray: [NativeElements, FicusStyledOptions]) {
      return styled(...argArray);
    },
    /**
     * @example
     * <ficus.div />
     */
    get(_, element: NativeElements) {
      if (!cache.has(element)) {
        cache.set(element, styled(element));
      }
      return cache.get(element);
    },
  }) as FicusFactory & NativeFicusComponents;
}

export const ficus = factory();
