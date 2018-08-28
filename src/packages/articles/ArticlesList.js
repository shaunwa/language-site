import { withRouteData, Link } from 'react-static'
import { h } from 'react-hyperscript-helpers'
import styled from 'styled-components'

import {
  ArticleContainer,
  ArticleHeader,
  ArticleHeaderText,
  colors,
} from '../ui';

const ArticlesList = styled.div`
  padding: 4px;
`;

const ArticleItem = styled.div`
  padding: 16px;
  border-bottom: 2px solid ${colors.textSecondary};

  a:link, a:visited, a:hover, a:active {
    color: #000;
    text-decoration: none;
  }
`;

const ArticleTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  color: ${colors.textPrimary};
`;

const ArticleDescription = styled.div`
  color: ${colors.textSecondary};
`;

export default withRouteData(({ articles }) => {
  const articleNames = articles.map((article) => {
    return h(ArticleItem, [
      h(Link, { to: `/articulos${article.permalink}` }, [
        h(ArticleTitle, `${article.articleNumber} - ${article.title}`),
        h(ArticleDescription, 'We examine the words gonna, wanna and gotta and how they can help you...'),
      ]),
    ])
  });

  return h(ArticleContainer, [
    h(ArticleHeader, [
      h(ArticleHeaderText, 'Articles'),
    ]),
    h(ArticlesList, articleNames),
  ]);
})
