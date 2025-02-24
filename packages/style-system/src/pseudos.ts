export const pseudoSelectors = {
  _pressed: true,
  // Extend if needed
};

export type StatePseudos = typeof pseudoSelectors;

export type PseudoKey = keyof StatePseudos;
