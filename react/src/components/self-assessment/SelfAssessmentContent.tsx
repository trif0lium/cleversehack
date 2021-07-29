import React, { useState } from "react";
import { SelfAssessmentWrap } from "../styles/SelfAssessmentStyles";
import { history } from "./self-assessment";
import { FiCheck } from "react-icons/fi";

export const SelfAssessmentHistory = () => {
  const [isClicked, setIsClick] = useState(false);
  const [isOneClicked, setIsOneClick] = useState(false);
  const [isTwoClicked, setIsTwoClick] = useState(false);
  const [isThreeClicked, setIsThreeClick] = useState(false);

  return (
    <div>
      <div className="flex flex-col mb-8">
        <p className="flex mt-20 text-3xl font-bold text-secondary">
          คุณมีประวัติเสี่ยงดังต่อไปนี้หรือไม่?
        </p>
        <h5 className="text-lg">โปรดเลือกให้ตรงกับตัวคุณ</h5>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <button
            className={`sa-button flex w-full h-auto rounded-md p-3 mb-3 border-2 ${
              isClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() => (isClicked ? setIsClick(false) : setIsClick(true))}
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">
                มีประวัติเดินทาง มาจากต่างประเทศที่เกิดโรค COVID-19
                (ภายในระยะเวลา 1 เดือนที่ผ่านมา)
              </div>
            </div>
          </button>
          <button
            className={`sa-button flex w-full h-auto rounded-md p-3 mb-3 border-2 ${
              isOneClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() =>
              isOneClicked ? setIsOneClick(false) : setIsOneClick(true)
            }
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">
                อยู่ใกล้ชิดกับผู้ป่วยยืนยัน COVID-19 (ใกล้กว่า 1 เมตร นานเกิน 5
                นาที)
              </div>
            </div>
          </button>
          <button
            className={`sa-button flex w-full h-auto rounded-md p-3 mb-3 border-2 ${
              isTwoClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() =>
              isTwoClicked ? setIsTwoClick(false) : setIsTwoClick(true)
            }
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">
                มีประวัติไปสถานที่ชุมนุมชน
                หรือสถานที่ที่มีการรวมกลุ่มกิจกรรมเป็นจำนวนมาก เช่น ตลาดนัด
                ห้างสรรพสินค้า สถานพยาบาล ขนส่งสาธารณะ งานเลี้ยง คอนเสิร์ต
                หรือชุมนุมทางการเมือง
              </div>
            </div>
          </button>
          <button
            className={`sa-button flex w-full h-auto rounded-md p-3 mb-3 border-2 ${
              isThreeClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() =>
              isThreeClicked ? setIsThreeClick(false) : setIsThreeClick(true)
            }
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">
                ประกอบอาชีพที่สัมผัสใกล้ชิดกับแรงงานต่างชาติ สถานที่แออัด
                หรือติดต่อคนจำนวนมาก
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export const SelfAssessmentSymptoms = () => {
  const [isClicked, setIsClick] = useState(false);
  const [isOneClicked, setIsOneClick] = useState(false);
  const [isTwoClicked, setIsTwoClick] = useState(false);
  const [isThreeClicked, setIsThreeClick] = useState(false);

  return (
    <div>
      <div className="flex flex-col">
        <p className="flex mt-20 text-3xl font-bold text-secondary">
          คุณมีประวัติเสี่ยงดังต่อไปนี้หรือไม่?
        </p>
        <h5 className="text-lg">โปรดเลือกให้ตรงกับตัวคุณ</h5>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col mt-10">
          <button
            className={`sa-button flex w-full h-auto rounded-md p-3 mb-3 border-2 ${
              isClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() => (isClicked ? setIsClick(false) : setIsClick(true))}
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">
                มีประวัติเดินทาง มาจากต่างประเทศที่เกิดโรค COVID-19
                (ภายในระยะเวลา 1 เดือนที่ผ่านมา)
              </div>
            </div>
          </button>
          <button
            className={`sa-button flex w-full h-auto rounded-md p-3 mb-3 border-2 ${
              isOneClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() =>
              isOneClicked ? setIsOneClick(false) : setIsOneClick(true)
            }
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">
                อยู่ใกล้ชิดกับผู้ป่วยยืนยัน COVID-19 (ใกล้กว่า 1 เมตร นานเกิน 5
                นาที)
              </div>
            </div>
          </button>
          <button
            className={`sa-button flex w-full h-auto rounded-md p-3 mb-3 border-2 ${
              isTwoClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() =>
              isTwoClicked ? setIsTwoClick(false) : setIsTwoClick(true)
            }
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">
                มีประวัติไปสถานที่ชุมนุมชน
                หรือสถานที่ที่มีการรวมกลุ่มกิจกรรมเป็นจำนวนมาก เช่น ตลาดนัด
                ห้างสรรพสินค้า สถานพยาบาล ขนส่งสาธารณะ งานเลี้ยง คอนเสิร์ต
                หรือชุมนุมทางการเมือง
              </div>
            </div>
          </button>
          <button
            className={`sa-button flex w-full h-auto rounded-md p-3 mb-3 border-2 ${
              isThreeClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() =>
              isThreeClicked ? setIsThreeClick(false) : setIsThreeClick(true)
            }
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">
                ประกอบอาชีพที่สัมผัสใกล้ชิดกับแรงงานต่างชาติ สถานที่แออัด
                หรือติดต่อคนจำนวนมาก
              </div>
            </div>
          </button>
          <button
            className={`sa-button flex w-full h-auto rounded-md p-3 mb-3 border-2 ${
              isThreeClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() =>
              isThreeClicked ? setIsThreeClick(false) : setIsThreeClick(true)
            }
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">
                ประกอบอาชีพที่สัมผัสใกล้ชิดกับแรงงานต่างชาติ สถานที่แออัด
                หรือติดต่อคนจำนวนมาก
              </div>
            </div>
          </button>{" "}
          <button
            className={`sa-button flex w-full h-auto rounded-md p-3 mb-3 border-2 ${
              isThreeClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() =>
              isThreeClicked ? setIsThreeClick(false) : setIsThreeClick(true)
            }
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">
                ประกอบอาชีพที่สัมผัสใกล้ชิดกับแรงงานต่างชาติ สถานที่แออัด
                หรือติดต่อคนจำนวนมาก
              </div>
            </div>
          </button>{" "}
          <button
            className={`sa-button flex w-full h-auto rounded-md p-3 mb-3 border-2 ${
              isThreeClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() =>
              isThreeClicked ? setIsThreeClick(false) : setIsThreeClick(true)
            }
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">
                ประกอบอาชีพที่สัมผัสใกล้ชิดกับแรงงานต่างชาติ สถานที่แออัด
                หรือติดต่อคนจำนวนมาก
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export const SelfAssessmentResult = () => {
  const [isClicked, setIsClick] = useState(false);
  const [isOneClicked, setIsOneClick] = useState(false);
  const [isTwoClicked, setIsTwoClick] = useState(false);
  const [isThreeClicked, setIsThreeClick] = useState(false);

  return (
    <div>
      <div className="flex flex-col">
        <p className="flex mt-20 text-3xl font-bold text-secondary">
          คุณมีประวัติเสี่ยงดังต่อไปนี้หรือไม่?
        </p>
        <h5 className="text-lg">โปรดเลือกให้ตรงกับตัวคุณ</h5>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col mt-10">
          <button
            className={`sa-button flex w-full h-auto rounded-md p-3 mb-3 border-2 ${
              isClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() => (isClicked ? setIsClick(false) : setIsClick(true))}
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">
                มีประวัติเดินทาง มาจากต่างประเทศที่เกิดโรค COVID-19
                (ภายในระยะเวลา 1 เดือนที่ผ่านมา)
              </div>
            </div>
          </button>
          <button
            className={`sa-button flex w-full h-auto rounded-md p-3 mb-3 border-2 ${
              isOneClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() =>
              isOneClicked ? setIsOneClick(false) : setIsOneClick(true)
            }
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">
                อยู่ใกล้ชิดกับผู้ป่วยยืนยัน COVID-19 (ใกล้กว่า 1 เมตร นานเกิน 5
                นาที)
              </div>
            </div>
          </button>
          <button
            className={`sa-button flex w-full h-auto rounded-md p-3 mb-3 border-2 ${
              isTwoClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() =>
              isTwoClicked ? setIsTwoClick(false) : setIsTwoClick(true)
            }
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">
                มีประวัติไปสถานที่ชุมนุมชน
                หรือสถานที่ที่มีการรวมกลุ่มกิจกรรมเป็นจำนวนมาก เช่น ตลาดนัด
                ห้างสรรพสินค้า สถานพยาบาล ขนส่งสาธารณะ งานเลี้ยง คอนเสิร์ต
                หรือชุมนุมทางการเมือง
              </div>
            </div>
          </button>
          <button
            className={`sa-button flex w-full h-auto rounded-md p-3 mb-3 border-2 ${
              isThreeClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() =>
              isThreeClicked ? setIsThreeClick(false) : setIsThreeClick(true)
            }
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">
                ประกอบอาชีพที่สัมผัสใกล้ชิดกับแรงงานต่างชาติ สถานที่แออัด
                หรือติดต่อคนจำนวนมาก
              </div>
            </div>
          </button>
          <button
            className={`sa-button flex w-full h-auto rounded-md p-3 mb-3 border-2 ${
              isThreeClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() =>
              isThreeClicked ? setIsThreeClick(false) : setIsThreeClick(true)
            }
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">
                ประกอบอาชีพที่สัมผัสใกล้ชิดกับแรงงานต่างชาติ สถานที่แออัด
                หรือติดต่อคนจำนวนมาก
              </div>
            </div>
          </button>{" "}
          <button
            className={`sa-button flex w-full h-auto rounded-md p-3 mb-3 border-2 ${
              isThreeClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() =>
              isThreeClicked ? setIsThreeClick(false) : setIsThreeClick(true)
            }
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">
                ประกอบอาชีพที่สัมผัสใกล้ชิดกับแรงงานต่างชาติ สถานที่แออัด
                หรือติดต่อคนจำนวนมาก
              </div>
            </div>
          </button>{" "}
          <button
            className={`sa-button flex w-full h-auto rounded-md p-3 mb-3 border-2 ${
              isThreeClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() =>
              isThreeClicked ? setIsThreeClick(false) : setIsThreeClick(true)
            }
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">
                ประกอบอาชีพที่สัมผัสใกล้ชิดกับแรงงานต่างชาติ สถานที่แออัด
                หรือติดต่อคนจำนวนมาก
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
