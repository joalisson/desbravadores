import React from 'react';
import s from './styles';

interface ISection {
  children: any;
  title: string;
}

const Section: React.FC<ISection> = (props) => (
  <s.Wrapper>
    <s.Title>
      {props.title}
    </s.Title>
    {props.children}
  </s.Wrapper>
)

export default Section;