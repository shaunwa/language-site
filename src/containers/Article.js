import { withRouteData } from 'react-static';
import { h } from 'react-hyperscript-helpers';

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
  ExamplePair,
  EnglishExample,
  SpanishExample,
  ButtonRow,
  ButtonCell,
  PlayButton,
  ButtonText,
} from './ArticleStyles';

const Article = ({ article }) => {
  const { title, articleNumber, examples } = article;
  const exampleElements = examplesToElements(examples);
  return h(ArticleContainer, [
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
    h(ExamplePair, { key }, [
      h(EnglishExample, example.english),
      h(SpanishExample, example.spanish),
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
      return h(SectionTitle, example.sectionTitle);
    }

    if (example.subsectionTitle) {
      return h(SubsectionTitle, example.subsectionTitle);
    }

    return createExampleSection({ example, key })
  });
}

export default withRouteData(Article);
