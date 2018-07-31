import { withRouteData } from 'react-static';
import { h } from 'react-hyperscript-helpers';
import ReactMarkdown from 'react-markdown';

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
import { SignupForm } from './SignupForm';

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

    if (example.signupForm) {
      return h(SignupForm);
    }

    return createExampleSection({ example, key })
  });
}

export default withRouteData(Article);
