import * as React from 'react';
import s from './styles';

interface ICard {
  children: any;
}

const Card: React.FC<ICard> = (props) => (
  <s.Wrapper>
    {props.children}
  </s.Wrapper>
);

export default Card;