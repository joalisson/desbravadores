import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../Card';
import Content from '../../Content';
import Button from '../../Button';
import s from './styles';

interface IPedalRoutes {
  origem: string;
  destino: string;
  distancia: string;
  tempo: string;
  nivel: string;
  observações: string;
}

const PedalRoutes: React.FC = (props) => {
  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('https://sheetdb.io/api/v1/h9lexamp72vky');
      setData(result.data);
    }
    fetchData();
  }, [])

  console.log(data);
  return (
    <s.Wrapper>
      <Content title="Próximos Pedais">
        {data.length && data.map((d: IPedalRoutes) => (
          <Card>
            <s.Item>Origem: {d.origem}</s.Item>
            <s.Item>Destino: {d.destino}</s.Item>
            <s.Item>Distância: {d.distancia}/km</s.Item>
            <s.Item>Tempo: {d.tempo}</s.Item>
            <s.Item>Nível: {d.nivel}</s.Item>
            <s.Item>Observações: {d.observações}</s.Item>
          </Card>
        ))}
        <Button onClick={() => window.open("https://docs.google.com/spreadsheets/d/1D8ItKfFid94i25buH4SBYjFGSHpGAw3bJDLhpxRTIhw/edit?usp=sharing", "_blank")}>
          Adicionar novo
        </Button>
      </Content>
    </s.Wrapper>
  )
};

export default PedalRoutes;