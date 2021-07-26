import React, { ReactElement } from "react";
import { useHistory, useParams } from "react-router-dom";
import MenuCard from "../components/menu/MenuCard";
import { ContentWrap } from "../components/styles/ContentStyles";

const MenuContent = () => {
  const history = useHistory();

  return (
    <ContentWrap
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h2 className="text-white">One Stop Covid</h2>
      <div className="boxWrap">
        <MenuCard
          topic="ค้นหาสถานที่ดูแลผู้ติดเชื้อ"
          description="สำรวจสถานที่ดูแล เช่น โรงพยาบาลสนาม หรือ Hospitel
        ผู้ติดเชื้อบนแผนที่หรือรายการที่มี"
          onClick={() => {
            history.push(`/search-location`);
          }}
        />
        <MenuCard
          topic="ค้นหาสถานที่ตรวจ Covid-19"
          description="ค้นหาและเแลกเปลี่ยนข้อมูลจุดตรวจโควิด-19 ที่ wheretotestcovid19.com"
          onClick={() => {
            history.push(`/where-to-test-covid-19`);
          }}
        />
        <MenuCard
          topic="ตรวจสอบอาการเบื้องต้น"
          description="ทำแบบสอบถามเพื่อกรองอาการป่วยเบื้องต้น"
          onClick={() => {
            history.push(`/search-location`);
          }}
        />
      </div>
    </ContentWrap>
  );
};

export default MenuContent;
