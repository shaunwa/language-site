import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import { h } from 'react-hyperscript-helpers';
import styled from 'styled-components';
import Routes from 'react-static-routes';

import { NavBar } from './packages/ui';

import './app.css'

const Content = styled.div`
  margin-top: 50px;
`;

const App = () => {
  return h(Router, [
    h('div', [
      h(NavBar, [
        h(Link, { to: '/', exact: true }, 'Home'),
        h(Link, { to: '/articulos' }, 'Articulos'),
        h(Link, { to: '/conoceme' }, 'Conóceme'),
        h(Link, { to: '/contacta' }, 'Contacta'),
      ]),
      h(Content, { className: 'content' }, [h(Routes)]),
    ])
  ])
}

export default hot(module)(App)
