import { withSiteData, Link } from 'react-static';
import { h } from 'react-hyperscript-helpers';
import styled from 'styled-components';

import {
  Button as ButtonBase,
  ArticleContainer,
  HeaderSubtitleText,
  SignupForm,
  colors,
} from '../ui';

export const PageContainer = styled.div`
  width: 100vw;
`;

export const JumbotronImage = styled.div`
  width: 100%;
  padding-bottom: 64px;

  @media only screen and (min-width: 900px) {
    background-image: url('/site-pics.001.png');
    background-size: 400px;
    background-repeat: no-repeat;
    background-position: left bottom;
  }
`;

export const JumbotronContent = styled.div`
  padding: 32px;

  @media only screen and (min-width: 900px) {
    margin-left: 35vmax;
    max-width: 900px;
  }
`;

export const JumbotronBigText = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 32px;
  word-spacing: 15px;
  text-transform: uppercase;
  color: ${colors.themeSecondary};

  @media only screen and (min-width: 700px) {
    font-size: 50px;
  }
`;

export const JumbotronSmallText = styled.div`
  font-size: 16px;
  margin-bottom: 32px;
  color: ${colors.themeSecondary};

  @media only screen and (min-width: 700px) {
    font-size: 24px;
  }
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const FatDivider = styled.div`
  background: ${colors.themeSecondary};
  height: 40px;
`;

export const Container = styled.div`
  padding: 16px;
`;

export const AdvertisementText = styled.div`
  font-size: 24px;
  padding: 32px 8px;
`;

export const ButtonContainer = styled.div`
  text-align: center;
`;

export const Button = ButtonBase.extend`
  font-size: 24px;
  padding: 16px;
`;

export const HeaderSubtitleTextUnderneath = HeaderSubtitleText.extend`
  font-size: 20px;
  color: #fff;
  margin-top: 16px;
  margin-bottom: 0;
`;

export default withSiteData(() => {
  return h(PageContainer, [
    h(JumbotronImage, [
      h(JumbotronContent, [
        h(JumbotronBigText, 'Déjame mostrarte como se habla realmente el inglés'),
        h(JumbotronSmallText, [
          h(Bold, 'El problema: '), `
          Estudias y estudias, aprendes todas las palabras y frases de todos los
          libros en que puedes poner tus manos, y despues intentas hablar con un gringo
          y... no entiendes nada.
        `]),
        h(JumbotronSmallText, [
          h(Bold, 'La solución: '), `
          Un gringo con barba y t-shirt que te enseña cómo hablar y entender inglés de verdad.
          Te suena bien? Lee los artículos, que son llenos de ejemplos y audios para practicar.
        `]),
        h(ButtonContainer, [
          h(Link, { to: '/articulos' }, [
            h(Button, 'Ver los artículos'),
          ]),
        ]),
      ])
    ]),
    h(FatDivider),
    h(ArticleContainer, [
      h(SignupForm, {
        title: 'Quieres practicar con diálogos?',
        description: `Obtén acceso a diálogos con transcripción y audio, completamente gratis!&nbsp;`,
        buttonText: `Envíame el enlace`,
        ckDataSvForm: '747905',
        ckDataUuid: 'c43ad746ba'
      }),
    ]),
  ]);
});
