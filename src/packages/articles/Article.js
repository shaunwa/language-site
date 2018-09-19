import { Link, withRouteData } from 'react-static';
import { h } from 'react-hyperscript-helpers';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import YouTube from 'react-youtube';

import {
  ArticleContainer,
  ArticleHeader,
  ArticleHeaderText,
  HeaderSubtitleText,
  ArticleContent,
  ExamplesTable,
  SectionTitle,
  SubsectionTitle,
  ExampleRow,
  Explanation,
  EnglishExample,
  SpanishExample,
  ExampleNote,
  ButtonRow,
  ButtonCell,
  SignupForm,
  SignupFormSmall,
  YoutubeVideo,
} from '../ui';
import { PlayButton, SlowButton } from './PlayButton';

const PrevWrap = styled.div``;

const NextWrap = styled.div``;

const Article = ({ article }) => {
  const { title, articleNumber, examples, nextPath, previousPath, ckDataUuid, ckDataSvForm, ckDataUuidSmall, ckDataSvFormSmall } = article;
  const exampleElements = examplesToElements(examples, ckDataUuid, ckDataSvForm, ckDataUuidSmall, ckDataSvFormSmall);
  return h(ArticleContainer, [
    h(ArticleHeader, [
      h(HeaderSubtitleText, `EPISODIO ${articleNumber}`),
      h(ArticleHeaderText, `${title}`),
    ]),
    h(ExamplesTable, [
      h(ArticleContent, [...exampleElements]),
    ]),
    previousPath ? h(PrevWrap, h(Link, { to: `/articulos${previousPath}` }, 'Previous Article')) : null,
    nextPath ? h(NextWrap, h(Link, { to: `/articulos${nextPath}` }, 'Next Article')) : null,
  ]);
}

function createExampleSection({ example, key }) {
  return [
    h(ExampleRow, { key }, [
      h(EnglishExample, [h(ReactMarkdown, { source: example.english })]),
      h(SpanishExample, example.spanish),
      example.note ? h(ExampleNote, example.note) : null,
    ]),
    h(ButtonRow, [
      h(ButtonCell, [
        example.audio ? h(PlayButton, {
          audioUrl: example.audio,
        }) : null,
      ]),
      h(ButtonCell, [
        example.audioSlow ? h(SlowButton, {
          audioUrl: example.audioSlow,
        }) : null,
      ]),
    ]),
  ];
}

function examplesToElements(examples, ckDataUuid, ckDataSvForm, ckDataUuidSmall, ckDataSvFormSmall) {
  return examples.map((example, key) => {
    if (example.youtubeVideoId) {
      return h(ExampleRow, [
        h(YoutubeVideo, {
          videoId: example.youtubeVideoId,
          opts: {
            width: '100%',
            height: 'auto',
          }
        })
      ])
    }

    if (example.explanation) {
      return h(ExampleRow, [h(Explanation, example.explanation)]);
    }

    if (example.sectionTitle) {
      return h(ExampleRow, [
        h(SectionTitle, example.sectionTitle),
      ]);
    }

    if (example.subsectionTitle) {
      return h(ExampleRow, [
        h(SubsectionTitle, example.subsectionTitle),
      ]);
    }

    if (example.signupForm) {
      return h(SignupForm, {
        title: example.formTitle  || 'Quieres practicar aún más?',
        description: example.formDescription || `Obtén acceso a diálogos con transcripción y audio, completamente gratis!&nbsp;`,
        buttonText: example.formButtonText || `Envíame el enlace`,
        ckDataUuid,
        ckDataSvForm,
      });
    }

    if (example.signupFormSmall) {
      return h(SignupFormSmall, {
        ckDataUuidSmall,
        ckDataSvFormSmall,
      });
    }

    return createExampleSection({ example, key })
  });
}

export default withRouteData(Article);
