import { Transform } from './types';

interface CreateTransformOptions {
  transform?: Transform;
}

export function createTransform({
  transform,
}: CreateTransformOptions): Transform {
  return (value, theme) => {
    return transform?.(value, theme) ?? value;
  };
}
