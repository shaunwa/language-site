import { h } from 'react-hyperscript-helpers';
import styled from 'styled-components';

import colors from './colors';

const Container = styled.div`
  text-align: center;
  color: ${colors.textSecondary};
  background-color: ${colors.themePrimary};
`;

export function Footer() {
  return h(Container, '© 2018 Shaun Wassell');
}
