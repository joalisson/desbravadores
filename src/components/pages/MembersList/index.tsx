import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../Card';
import s from './styles';

const MembersList: React.FC = (props) => {
  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('https://www.strava.com/api/v3/clubs/471801/members', {
        headers: {
          Authorization: `Bearer ${process.env.STRAVA_TOKEN}`
        }
      });
      setData(result.data);
    }
    fetchData();
  }, []);

  console.log(data);
  return (
    <s.Wrapper>
      {data.length && data.map((m) => (
        <Card className="profile">
          <s.Image src="" />
          <s.Name>{m.firstname} {m.lastname}</s.Name>
          <s.City></s.City>
        </Card>
      ))}
    </s.Wrapper>
  );
}

export default MembersList;