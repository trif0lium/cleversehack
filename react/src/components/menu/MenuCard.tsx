import React from "react";
import { MenuIcon } from "../const";
import {
  FaHospitalAlt,
  FaNotesMedical,
  FaFileMedicalAlt,
} from "react-icons/fa";

interface MenuCardProps {
  topic: string;
  description: string;
  icon: MenuIcon;
  onClick: () => void;
}

const MenuCard = ({ topic, description, icon, onClick }: MenuCardProps) => {
  return (
    <button className="cont flex flex-row items-center" onClick={onClick}>
      <div className="icon">
        {icon === MenuIcon.HOSPITEL ? (
          <FaHospitalAlt className="w-20 h-20" />
        ) : icon === MenuIcon.WHERE_TO_TEST ? (
          <FaNotesMedical className="w-20 h-20" />
        ) : (
          <FaFileMedicalAlt className="w-20 h-20" />
        )}
      </div>
      <div className="h-auto w-full text-left">
        <h3>{topic}</h3>
        <h5 className="hidden xs:block">{description}</h5>
      </div>
    </button>
  );
};
export default MenuCard;
