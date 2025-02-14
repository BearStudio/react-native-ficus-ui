import { components } from './components';
import { foundations } from './foundations';

export const theme = {
  components,
  ...foundations,
};

export type Theme = typeof theme;

export { ThemeProvider } from './provider';
export * from './hook';
