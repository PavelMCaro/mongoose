import { createGlobalStyle } from 'styled-components';
import { fonts } from './fonts';
import { style } from './style';

export const GlobalStyle = createGlobalStyle`
    ${fonts}
    ${style}
`;