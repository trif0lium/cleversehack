import React from 'react';
import { MenuIcon } from '../const';
import a1 from './icons/a1.svg';
import a2 from './icons/a2.svg';
import b1 from './icons/b1.svg';

interface MenuCardProps {
  topic: string;
  description: string;
  icon: MenuIcon;
  onClick: () => void;
}

const MenuCard = ({ topic, description, icon, onClick }: MenuCardProps) => {
  return (
    <button className="cont flex flex-row items-center" onClick={onClick}>
      <div className="icon flex items-center justify-center">
        {icon === MenuIcon.HOSPITEL ? (
          // <FaHospitalAlt className="w-20 h-20" />
          <img src={a1} alt="" />
        ) : icon === MenuIcon.WHERE_TO_TEST ? (
          // <FaNotesMedical className="w-20 h-20" />
          <img src={a2} alt="" />
        ) : (
          // <FaFileMedicalAlt className="w-20 h-20" />
          <img src={b1} alt="" />
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
