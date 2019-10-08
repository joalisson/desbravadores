import * as React from 'react';
import s from './styles';

interface IContent {
  children?: any;
  title?: string;
}

const Content: React.FC<IContent> = (props) => (
  <s.Wrapper>
    <s.Title>{props.title}</s.Title>
    {props.children}
  </s.Wrapper>
);

export default Content;