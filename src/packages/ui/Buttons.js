import styled from 'styled-components';

export const Button = styled.button`
  color: #fff;
  background-color: #4056F4;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  box-shadow: 2px 2px 5px #888888;
`;

export const PlayButton = Button.extend`
  width: 95%;
  float: left;
`

export const SlowButton = Button.extend`
  width: 95%;
  float: right;
`

export const ButtonIcon = styled.i`
  float: left;
`

export const ButtonText = styled.span`
  margin-left: -14px;
`
