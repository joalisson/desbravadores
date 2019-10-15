import React from 'react';
import Card from '../Card';
import s from './styles';
import Icon from '../Icon';

interface IDestination {
  origem?: string;
  destino?: string;
  distancia?: string;
  tempo?: string;
  nivel?: string;
  observações?: string;
}

const Destination: React.FC<IDestination> = (props) => {
  return (
    <s.Wrapper>
      <Card>
        <s.Item><Icon name="room"/>{props.origem}</s.Item>
        <s.Item><Icon name="near_me"/>{props.destino}</s.Item>
        <s.Item><Icon name="directions_bike"/>{props.distancia}km/h</s.Item>
        <s.Item><Icon name="access_time"/>{props.tempo}</s.Item>
        <s.Item><Icon name="timeline"/>{props.nivel}</s.Item>
        <s.Item><Icon name="warning"/>{props.observações}</s.Item>
      </Card>
    </s.Wrapper>
  )
}

export default Destination;