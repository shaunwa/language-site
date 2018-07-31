import styled from 'styled-components'

export const ArticleContainer = styled.div`
  padding: 4px;
`

export const ArticleHeader = styled.div`
  padding: 24px;
  margin: 16px;
  margin-left: -8px;
  border-radius: 8px;
  background-color: #4056F4;
`

export const ArticleHeaderText = styled.h1`
  color: #fff;
  margin: 0;
`

export const EpisodeNumberText = styled.p`
  margin: 0;
  margin-bottom: 16px;
  color: #87BFFF;
`

export const ArticleContent = styled.div`
  padding: 0 16px;
`

export const ExamplesTable = styled.table`
  width: 100%;
`

export const SectionTitle = styled.h2`
  margin-bottom: 32px;
  padding-bottom: 8px;
  border-bottom: 2px solid black;
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
  color: #888;
`;

export const ButtonRow = styled.tr`
  display: block;
  width: 100%;
  padding-bottom: 32px;
  margin-bottom: 32px;
  border-bottom: 2px solid #eee;
`

export const ButtonCell = styled.td`
  display: inline-block;
  width: 50%;
  box-sizing: border-box;
`

export const PlayButton = styled.button`
  color: #fff;
  background-color: #4056F4;
  padding: 12px;
  width: 95%;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  float: left;
`

export const SlowButton = styled.button`
  color: #fff;
  background-color: #4056F4;
  padding: 12px;
  width: 95%;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  float: right;
`

export const ButtonIcon = styled.i`
  float: left;
`

export const ButtonText = styled.span`
  margin-left: -14px;
`
