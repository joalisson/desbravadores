import React, { useEffect, useState } from 'react';
import axios from 'axios';
import s from './styles';
import { members } from '../../data';
import Hero from '../../Hero';
import Section from '../../Section';
import DestinationBanner from '../../DestinationBanner';
import Destination from '../../Destination';
import Member from '../../Member';

interface IPedalRoutes {
  origem: string;
  destino: string;
  distancia: string;
  tempo: string;
  nivel: string;
  observações: string;
}

const Home: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('https://sheetdb.io/api/v1/h9lexamp72vky');
      setData(result.data);
    }
    fetchData();
  }, []);

  const firstDestination = data[0] || {};
  return (
    <>
      <Hero />
      <s.Container>
        <Section title="Próximo Pedal">
          <DestinationBanner 
            origem={firstDestination.origem}
            destino={firstDestination.destino}
            distancia={firstDestination.distancia}
            tempo={firstDestination.tempo}
            nivel={firstDestination.nivel}
          />
        </Section>
        <Section title="Em breve">
          <s.DestinationList>          
            {data && data.slice(1).map((d: IPedalRoutes) => (
              <Destination 
                origem={d.origem}
                destino={d.destino}
                distancia={d.distancia}
                tempo={d.tempo}
                nivel={d.nivel}
                observações={d.observações}
              />
            ))}
          </s.DestinationList>
        </Section>
        <Section title="Quem Pedala">
          {members.map((m) => (
            <Member 
              name={m.name}
              bike={m.bike}
              imgSrc={m.avatar}
            />
          ))}
        </Section>
      </s.Container>
    </>

  )
}

export default Home;