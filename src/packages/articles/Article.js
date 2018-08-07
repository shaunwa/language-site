import { Link, withRouteData } from 'react-static';
import { h } from 'react-hyperscript-helpers';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

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
  EnglishExample,
  SpanishExample,
  ExampleNote,
  ButtonRow,
  ButtonCell,
  PlayButton,
  ButtonText,
  Icon,
  SignupForm,
} from '../ui';

const PrevWrap = styled.div``;

const NextWrap = styled.div``;

const Article = ({ article }) => {
  const { title, articleNumber, examples, nextPath, previousPath, ckDataUuid, ckDataSvForm } = article;
  const exampleElements = examplesToElements(examples, ckDataUuid, ckDataSvForm);
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
        h(PlayButton, [
          h(Icon, {
            name: 'play',
            style: {
              float: 'left',
            },
          }),
          h(ButtonText, 'Play'),
        ]),
      ]),
      h(ButtonCell, [
        h(PlayButton, [
          h(Icon, {
            name: 'step-forward',
            style: {
              float: 'left',
            },
          }),
          h(ButtonText, 'Slow'),
        ]),
      ]),
    ]),
  ];
}

function examplesToElements(examples, ckDataUuid, ckDataSvForm) {
  return examples.map((example, key) => {
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
        title: 'Free Dialogue Practice',
        description: `Improve your understanding even more with a <u>free</u> dialogue, complete with script and audio!&nbsp;`,
        ckDataUuid,
        ckDataSvForm
      });
    }

    return createExampleSection({ example, key })
  });
}

export default withRouteData(Article);
