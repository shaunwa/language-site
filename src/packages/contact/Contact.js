import { h } from 'react-hyperscript-helpers';
import styled from 'styled-components';
import { Link } from 'react-static';

import {
  ArticleContainer,
  ArticleHeader,
  ArticleHeaderText,
} from '../ui';

const Container = styled.div`
  padding: 16px;
  height: 100%;
`;

const LinkContainer = styled.div`
  padding: 16px;
  width: 100%;
  text-align: center;
`;

export default () =>
  h(ArticleContainer, [
    h(ArticleHeader, [
      h(ArticleHeaderText, 'Preguntas? Commentarios?'),
    ]),
    h(Container, [
      h('div', `Si tienes alguna pregunta, duda, commentario, o simplemente quieres decirme "hey", no dudes en enviar un email a`),
      h(LinkContainer, [
        h(Link, { to: 'mailto:shaun.the.gringo@gmail.com' }, 'shaun.the.gringo@gmail.com'),
      ]),
      h('div', `Nunca se sabe, quizás haré un video sobre tu pregunta!`),
    ]),
  ])
