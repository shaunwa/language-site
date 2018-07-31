import { withRouteData } from 'react-static';
import { h } from 'react-hyperscript-helpers';
import ReactMarkdown from 'react-markdown';
import ScriptTag from 'react-script-tag';
import styled from 'styled-components';

import { Icon } from './Icon';
import {
  ArticleContainer,
  ArticleHeader,
  ArticleHeaderText,
  EpisodeNumberText,
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
} from './ArticleStyles';

const Article = ({ article }) => {
  const { title, articleNumber, examples } = article;
  const exampleElements = examplesToElements(examples);
  return h(ArticleContainer, [
    h(ScriptTag, { async: false, src: 'https://f.convertkit.com/aac6e66ea3/533d953c7f.js', 'data-uid': 'aac6e66ea3' }),
    h(ArticleHeader, [
      h(EpisodeNumberText, `EPISODIO ${articleNumber}`),
      h(ArticleHeaderText, `${title}`),
    ]),
    h(ExamplesTable, [
      h(ArticleContent, [...exampleElements]),
    ]),
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

function examplesToElements(examples) {
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

    return createExampleSection({ example, key })
  });
}

export default withRouteData(Article);
