import { withSiteData, Link } from 'react-static';
import { h } from 'react-hyperscript-helpers';
import styled from 'styled-components';

import {
  Button,
  ArticleContainer,
  ArticleHeader,
  ArticleHeaderText,
  HeaderSubtitleText,
  SectionTitle as SectionTitleBase,
  SignupForm,
} from '../ui';

export const Container = styled.div`
  padding: 16px;
`;

export const AdvertisementText = styled.div`
  font-size: 16px;
  padding: 8px;
`;

export const ButtonContainer = styled.div`
  margin: 32px 0;
  text-align: center;
`;

export const HeaderSubtitleTextUnderneath = HeaderSubtitleText.extend`
  font-size: 20px;
  color: #fff;
  margin-top: 16px;
`;

const SectionTitle = SectionTitleBase.extend`
  margin-bottom: 16px;
  margin-top: 0;
`;

export default withSiteData(() => {
  return h(ArticleContainer, [
    h(ArticleHeader, [
      h(HeaderSubtitleText, 'Bienvenidos al'),
      h(ArticleHeaderText, 'Canal Gringlés'),
      h(HeaderSubtitleTextUnderneath, 'Lecciones de ingles auténtico desde Gringolandia'),
    ]),
    h(Container, [
      h(SectionTitle, `El problema`),
      h(AdvertisementText, `
        Estudias y estudias, aprendes todas las palabras y frases de todos los
        libros en que puedes poner tus manos, y despues intentas hablar con un gringo
        y... no entiendes nada.`),
      h(SectionTitle, `La solucion`),
      h(AdvertisementText, `
        Un gringo con barba y t-shirt que te enseña cómo hablar y entender inglés de verdad.
      `),
      h(AdvertisementText, `
        Te suena bien? Lee los articulos, que son llenos de ejemplos y audios para practicar.
      `),
      h(ButtonContainer, [
        h(Link, { to: '/articulos' }, [
          h(Button, 'Ver los articulos'),
        ]),
      ]),
      h(SignupForm, { title: 'Te gusta gratis?', description: 'Suscríbete para recibir tips, noticias, y ofertas especiales' }),
    ])
  ]);
});
