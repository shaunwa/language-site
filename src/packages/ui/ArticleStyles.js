import styled from 'styled-components';

import colors from './colors';

export const ArticleContainer = styled.div`
  padding: 4px;
  background-color: ${colors.themePrimary};
  color: ${colors.textPrimary};
`

export const ArticleHeader = styled.div`
  padding: 24px;
  padding-left: 36px;
  margin: 16px;
  margin-left: -20px;
  border-radius: 8px;
  background-color: ${colors.themeSecondary};
  box-shadow: 5px 5px 10px ${colors.boxShadow};
`

export const ArticleHeaderText = styled.h1`
  color: ${colors.textContrast};
  margin: 0;
`

export const HeaderSubtitleText = styled.p`
  margin: 0;
  margin-bottom: 16px;
  font-weight: 400;
  color: ${colors.textContrast};
`

export const ArticleContent = styled.div`
  padding: 0 16px;
  color: ${colors.textPrimary};
  background-color: ${colors.themePrimary};
`

export const ExamplesTable = styled.table`
  width: 100%;
`

export const SectionTitle = styled.h2`
  margin-bottom: 32px;
  padding-bottom: 8px;
  border-bottom: 2px solid ${colors.textPrimary};
`

export const SubsectionTitle = styled.h3`
  margin-bottom: 32px;
`

export const ExampleRow = styled.tr`
  display: block;
  margin-bottom: 16px;
`

export const EnglishExample = styled.td`
  display: block;
  margin-bottom: 8px;
  font-weight: bold;

  em {
    text-decoration: underline;
    font-style: normal;
  }
`

export const SpanishExample = styled.td`
  display: block;
  margin-bottom: 16px;
`

export const ExampleNote = styled.td`
  font-style: italic;
  margin-bottom: 16px;
  color: ${colors.textSecondary};
`;

export const ButtonRow = styled.tr`
  display: block;
  width: 100%;
  padding-bottom: 32px;
  margin-bottom: 32px;
  border-bottom: 2px solid ${colors.textSecondary};
`

export const ButtonCell = styled.td`
  display: inline-block;
  width: 50%;
  box-sizing: border-box;
`
