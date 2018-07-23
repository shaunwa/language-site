import { withRouteData } from 'react-static'
import { h } from 'react-hyperscript-helpers'

import { Icon } from './Icon'
import {
  ArticleHeader,
  ArticleHeaderText,
  EpisodeNumberText,
  ArticleContent,
  ExamplesTable,
  ExamplePair,
  EnglishExample,
  SpanishExample,
  ButtonRow,
  ButtonCell,
  PlayButton,
  ButtonText,
} from './ArticleStyles'

const Article = ({ article }) => {
  const { title, articleNumber, examples } = article
  const exampleElements = examples.map((example, key) => {
    if (example.sectionTitle) {
      return h('h2', example.sectionTitle)
    }
    if (example.subsectionTitle) {
      return h('h3', example.subsectionTitle)
    }
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
    ]
  })
  return h('div', [
    h(ArticleHeader, [
      h(EpisodeNumberText, `EPISODIO ${articleNumber}`),
      h(ArticleHeaderText, `${title}`),
    ]),
    h(ExamplesTable, [
      h(ArticleContent, [...exampleElements]),
    ]),
  ])
}

export default withRouteData(Article)
