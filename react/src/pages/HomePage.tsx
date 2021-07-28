import React, { ReactElement } from "react";
import { useHistory } from "react-router-dom";
import { ContentWrap } from "../components/styles/ContentStyles";
import { FaCommentMedical } from "react-icons/fa";

const Home = () => {
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
      <h2 className="text-white">One Stop Covid-19</h2>
      <div className="boxWrap flex flex-col items-center justify-center">
        <FaCommentMedical className="h-48 w-56 text-white" />
        <div
          className="start-button flex items-center justify-center"
          onClick={() => {
            history.push(`/menu`);
          }}
        >
          <h4>เริ่มต้นใช้งาน</h4>
        </div>
      </div>
    </ContentWrap>
  );
};

export default Home;