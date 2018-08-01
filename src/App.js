import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
import { h } from 'react-hyperscript-helpers';
import styled from 'styled-components';
import Routes from 'react-static-routes';

import './app.css'

const NavBar = styled.div`
  background-color: #4056F4;
  margin: auto;
  text-align: center;

  a:link, a:visited, a:hover, a:active {
    display: inline-block;
    color: #fff;
    padding: 16px;
    font-weight: 400;
    text-decoration: none;
  }
`;

const Content = styled.div``;

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
