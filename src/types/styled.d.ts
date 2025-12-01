import 'styled-components';
import { theme } from '../styles/globalStyles';

type CustomTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}
