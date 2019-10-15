import React from 'react';
import s from './styles';

interface IMember {
  name: string;
  bike: string;
  imgSrc: string;
}

const Member = (props) => (
  <s.Wrapper>
    <s.Image src={props.imgSrc} />
    <s.Name>
      {props.name}
    </s.Name>
    <s.Bike>
      {props.bike}
    </s.Bike>
  </s.Wrapper>
);

export default Member;