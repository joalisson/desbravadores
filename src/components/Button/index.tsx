import React from 'react';
import s from './styles';

interface IButton {
  children?: any;
  onClick?: () => any;
} 

const Button: React.FC = (props) => (
  <s.Wrapper onClick={props.onClick}>
    {props.children}
  </s.Wrapper>
);

export default Button;