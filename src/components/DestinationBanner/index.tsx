import React from 'react';
import s from './styles';

interface IDestinationBanner {
  origem?: string;
  destino?: string;
  distancia?: string;
  tempo?: string;
  nivel?: string;
  observações?: string;
}
const DestinationBanner: React.FC<IDestinationBanner> = (props) => {
  return (
    <s.Wrapper>
      <s.Title>
        {props.destino}
      </s.Title>
      <s.Content>
        <span>{props.origem}</span>
        <span>{props.tempo}</span>
        <span>{props.distancia}km/h</span>
        <span>{props.nivel}</span>
        <span>{props.observações}</span>
      </s.Content>
    </s.Wrapper>
  )
};

export default DestinationBanner;