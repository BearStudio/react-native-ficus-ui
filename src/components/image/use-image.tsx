import { useCallback, useEffect, useState } from 'react';

import { Image as RNImage } from 'react-native';

export interface UseImageOptions {
  /**
   * The React Native `source.uri` property
   */
  src?: string;
}

type Status = 'loading' | 'failed' | 'pending' | 'loaded';

/**
 * Custom hook to track the loading status of an image.
 *
 * @returns The current loading status of the image.
 *
 * @example
 * ```tsx
 * const status = useImage({ src: 'https://example.com/image.jpg' });
 * console.log(status); // "loading" | "loaded" | "failed" | "pending"
 * ```
 */
export function useImage({ src }: UseImageOptions) {
  const [status, setStatus] = useState<Status>('pending');

  useEffect(() => {
    setStatus(src ? 'loading' : 'pending');
  }, [src]);

  const load = useCallback(() => {
    if (!src) return;

    RNImage.getSize(
      src,
      /**
       * On success
       */
      () => setStatus('loaded'),
      () => setStatus('failed')
    );
  }, [src]);

  useEffect(() => {
    if (status === 'loading') {
      load();
    }
  }, [status, load]);

  return status;
}
