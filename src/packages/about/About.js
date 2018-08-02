import { h } from 'react-hyperscript-helpers';
import styled from 'styled-components';

import {
  ArticleContainer,
  ArticleHeader,
  ArticleHeaderText,
  BlockQuote,
} from '../ui';

import {
  whatIsThisSiteAboutText,
  whoIsThisGuyWithTheBeardText,
  howDoesItWorkText,
} from './copy';

const Container = styled.div`
  padding: 16px;
  white-space: pre-line;
`;

export default () =>
  h(ArticleContainer, [
    h(ArticleHeader, [
      h(ArticleHeaderText, 'De qué se trata este sitio?'),
    ]),
    h(Container, whatIsThisSiteAboutText[0]),
    h(BlockQuote, `
      Muchas veces - demasiadas - el inglés \
      no se enseña como se habla de verdad.
    `),
    h(Container, whatIsThisSiteAboutText[1]),
    h(ArticleHeader, [
      h(ArticleHeaderText, 'Cómo funcionan las lecciones?'),
    ]),
    h(Container, howDoesItWorkText[0]),
    h(BlockQuote, `
      Te doy un montón de ejemplos y audios para practicar hasta dominarlo.
    `),
    h(Container, howDoesItWorkText[1]),
    h(ArticleHeader, [
      h(ArticleHeaderText, 'Y ese tipo con la barba?'),
    ]),
    h(Container, whoIsThisGuyWithTheBeardText[0]),
  ])
