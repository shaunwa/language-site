import React from 'react'
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
        h(Link, { to: '/article' }, 'Articles'),
        h(Link, { to: '/about' }, 'About'),
      ]),
      h(Content, { className: 'content' }, [h(Routes)]),
    ])
  ])
}
  // <Router>
  //   <div>
  //     <nav>
  //       <Link exact to="/">Home</Link>
  //       <Link to="/about">About</Link>
  //       <Link to="/blog">Blog</Link>
  //     </nav>
  //     <div className="content">
  //       <Routes />
  //     </div>
  //   </div>
  // </Router>

export default hot(module)(App)
