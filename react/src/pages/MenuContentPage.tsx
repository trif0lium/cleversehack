import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MenuIcon } from '../components/const';
import MenuCard from '../components/menu/MenuCard';
import { ContentWrap } from '../components/styles/ContentStyles';
import { Wheel } from '../components/styles/Styles';
import logo from './logos/4.gif';
import intro from './logos/covid.svg';
import one from './logos/one.gif';

const MenuContent = () => {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const history = useHistory();

  return (
    <>
      <ContentWrap
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {true ? (
          <Wheel className="logo flex flex-col items-center">
            <img src={intro} className="wheel w-40 h-40" />
            <img src={one} className="h-28" />
          </Wheel>
        ) : (
          <img src={logo} className="logo w-60 h-60" />
        )}
        {/* <h2 className="text-white">One Stop Covid</h2> */}
        <div className="menu boxWrap">
          <MenuCard
            topic="ค้นหาสถานที่ดูแลผู้ติดเชื้อ"
            description="สำรวจสถานที่ดูแล เช่น โรงพยาบาลสนาม หรือ Hospitel
        ผู้ติดเชื้อบนแผนที่หรือรายการที่มี"
            icon={MenuIcon.HOSPITEL}
            onClick={() => {
              history.push(`/search-location`);
            }}
          />
          <MenuCard
            topic="ค้นหาสถานที่ตรวจ Covid-19"
            description="ค้นหาและเแลกเปลี่ยนข้อมูลจุดตรวจโควิด-19 ที่ wheretotestcovid19.com"
            icon={MenuIcon.WHERE_TO_TEST}
            onClick={() => {
              history.push(`/where-to-test-covid-19`);
            }}
          />
          <MenuCard
            topic="ตรวจสอบอาการเบื้องต้น"
            description="ทำแบบสอบถามเพื่อกรองอาการป่วยเบื้องต้น"
            icon={MenuIcon.SELF_ASSESSMENT}
            onClick={() => {
              history.push(`/self-assessment`);
            }}
          />
        </div>
      </ContentWrap>
    </>
  );
};

export default MenuContent;
