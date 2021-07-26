import React, { ReactElement } from "react";
import { useHistory, useParams } from "react-router-dom";

interface MenuCardProps {
  topic: string;
  description: string;
  onClick: () => void;
}

const MenuCard = ({ topic, description, onClick }: MenuCardProps) => {
  return (
    <div className="cont flex flex-row items-center" onClick={onClick}>
      <div className="icon h-32 w-32"></div>
      <div className="p-5 h-auto w-auto">
        <h3>{topic}</h3>
        <h5 className="hidden xs:block">{description}</h5>
      </div>
    </div>
  );
};
export default MenuCard;
