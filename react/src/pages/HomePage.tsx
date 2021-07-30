import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ContentWrap } from '../components/styles/ContentStyles';
import { Wheel } from '../components/styles/Styles';
import intro from './logos/covid.svg';

const Home = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push(`/menu`);
    }, 3000);
  }, []);
  return (
    <ContentWrap
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className="intro flex flex-col w-full absolute bg-primary items-center justify-center"
        style={{ height: '100vh' }}
      >
        <Wheel className="">
          <img src={intro} className="wheel w-40 h-40 mb-10" />
        </Wheel>

        {/* <Spinner /> */}
      </div>

      <h4>เริ่มต้นใช้งาน</h4>
    </ContentWrap>
  );
};

export default Home;
