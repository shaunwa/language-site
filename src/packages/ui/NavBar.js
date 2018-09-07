import React from 'react';
import { Link } from 'react-static';
import { h } from 'react-hyperscript-helpers';
import styled from 'styled-components';
import { Icon } from './Icon';
import colors from './colors';

export const Content = styled.div`
  padding-top: 56px;
  background-color: ${colors.themePrimary};
  min-height: 100vh;

  @media only screen and (min-width: 500px) {
    padding-top: 114px;
  }
`;

const NavContainer = styled.div`
  background-color: ${colors.themePrimary};
  margin: auto;
  text-align: center;
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;

  a:link, a:visited, a:hover, a:active {
    float: none;
    display: block;
    color: #fff;
    padding: 16px;
    font-weight: bold;
    text-decoration: none;
  }
`;

const LogoBar = styled.div`
  width: 100%;
  height: 56px;
  background-color: ${colors.themePrimary};
  border-bottom: solid #ddd 4px;
`;

const CompanyName = styled.div`
  font-size: 24px;
  padding-top: 12px;
`;

const NavigationOptionsBar = styled.div`
  height: 56px;
  background-color: #444;
  text-align: center;
  padding-top: 16px;

  a:link, a:visited, a:hover, a:active {
    float: none;
    display: inline;
    color: #fff;
    padding: 16px;
    font-weight: bold;
    text-decoration: none;
  }

  @media only screen and (max-width: 499px) {
    display: none;
  }
`;

const HamburgerButton = styled.div`
  position: absolute;
  right: 8px;
  font-size: 40px;
  color: ${colors.textPrimary};
  top: 0;

  @media only screen and (min-width: 500px) {
    display: none;
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 56px;
  display: block;
  width: 100%;
  box-shadow: 0px 10px 10px ${colors.boxShadow};
  background-color: #444;
`;

export class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  openMenu = () => {
    this.setState({ open: true });
  }

  closeMenu = () => {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;

    return h(NavContainer, [
      h(LogoBar, [
        h(CompanyName, 'Canal Gringlés'),
        h(HamburgerButton, {
          onClick: open ? this.closeMenu : this.openMenu,
        }, [
          h(Icon, { name: 'bars' }),
        ]),
      ]),
      h(NavigationOptionsBar, [
        h(Link, { to: '/', exact: true, onClick: this.closeMenu }, 'Home'),
        h(Link, { to: '/articulos', onClick: this.closeMenu }, 'Articulos'),
        h(Link, { to: '/conoceme', onClick: this.closeMenu }, 'Conóceme'),
        h(Link, { to: '/contacta', onClick: this.closeMenu }, 'Contacta'),
      ]),
      open ? h(Menu, [
        h(Link, { to: '/', exact: true, onClick: this.closeMenu }, 'Home'),
        h(Link, { to: '/articulos', onClick: this.closeMenu }, 'Articulos'),
        h(Link, { to: '/conoceme', onClick: this.closeMenu }, 'Conóceme'),
        h(Link, { to: '/contacta', onClick: this.closeMenu }, 'Contacta'),
      ]) : null,
    ]);
  }
}
