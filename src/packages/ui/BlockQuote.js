import styled from 'styled-components';

export const BlockQuote = styled.div`
  font-family: Georgia, serif;
  font-size: 18px;
  font-style: italic;
  margin: 0.25em 0;
  padding: 0.35em 40px;
  padding-right: 22px;
  line-height: 1.45;
  position: relative;
  color: #383838;

  :before {
    display: block;
    padding-left: 16px;
    content: '“';
    font-size: 80px;
    position: absolute;
    left: -20px;
    top: -20px;
    color: #7a7a7a;
  }
`;
