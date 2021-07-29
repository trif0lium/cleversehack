import React, { useEffect, useMemo, useState } from 'react';
import { SelfAssessmentWrap } from '../styles/SelfAssessmentStyles';
import { history } from './self-assessment';
import { FiCheck } from 'react-icons/fi';
interface SelfAssessmentHistoryProps {
  historyCheck?: boolean[];
  setHistoryCheck: (historyCheck: boolean[]) => void;
}

export const SelfAssessmentHistory = ({
  historyCheck: _historyCheck,
  setHistoryCheck,
}: SelfAssessmentHistoryProps) => {
  const [isClicked, setIsClick] = useState(false);
  const [isOneClicked, setIsOneClick] = useState(false);
  const [isTwoClicked, setIsTwoClick] = useState(false);
  const [isThreeClicked, setIsThreeClick] = useState(false);
  const [isFourClicked, setIsFourClick] = useState(false);
  const [isFiveClicked, setIsFiveClick] = useState(false);

  useEffect(() => {
    setHistoryCheck([
      isClicked,
      isOneClicked,
      isTwoClicked,
      isThreeClicked,
      isFourClicked,
      isFiveClicked,
    ]);
  }, [
    isClicked,
    isOneClicked,
    isTwoClicked,
    isThreeClicked,
    isFourClicked,
    isFiveClicked,
  ]);

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
          <button
            className={`sa-button flex w-full h-auto rounded-md p-3 mb-3 border-2 ${
              isFourClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() =>
              isFourClicked ? setIsFourClick(false) : setIsFourClick(true)
            }
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">
                มีประวัติเดินทางมาจาก หรือ อาศัยอยู่ในพื้นที่ที่มีการระบาดโรค
                COVID-19 (** พื้นที่เสี่ยงโปรดดูประกาศตามแต่ละพื้นที่ **)
              </div>
            </div>
          </button>
          <button
            className={`sa-button flex w-full h-auto rounded-md p-3 mb-3 border-2 ${
              isFiveClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() =>
              isFiveClicked ? setIsFiveClick(false) : setIsFiveClick(true)
            }
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">
                มีประวัติมีอาการติดเชื้อระบบทางเดินหายใจและอยู่รวมกันเป็นกลุ่มก้อน
                ตั้งแต่ 5 รายขึ้นไป ในสถานที่และช่วงสัปดาห์เดียวกัน
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

interface SelfAssessmentSymptomsProps {
  symptomsCheck?: boolean[];
  setSymptomsCheck: (symptomsCheck: boolean[]) => void;
}

export const SelfAssessmentSymptoms = ({
  symptomsCheck: _symptomsCheck,
  setSymptomsCheck,
}: SelfAssessmentSymptomsProps) => {
  const [isClicked, setIsClick] = useState(false);
  const [isOneClicked, setIsOneClick] = useState(false);
  const [isTwoClicked, setIsTwoClick] = useState(false);
  const [isThreeClicked, setIsThreeClick] = useState(false);
  const [isFourClicked, setIsFourClick] = useState(false);
  const [isFiveClicked, setIsFiveClick] = useState(false);
  const [isSixClicked, setIsSixClick] = useState(false);
  const [isSevenClicked, setIsSevenClick] = useState(false);
  const [isEightClicked, setIsEightClick] = useState(false);
  const [isNineClicked, setIsNineClick] = useState(false);

  useEffect(() => {
    setSymptomsCheck([
      isClicked,
      isOneClicked,
      isTwoClicked,
      isThreeClicked,
      isFourClicked,
      isFiveClicked,
      isSixClicked,
      isSevenClicked,
      isEightClicked,
      isNineClicked,
    ]);
  }, [
    isClicked,
    isOneClicked,
    isTwoClicked,
    isThreeClicked,
    isFourClicked,
    isFiveClicked,
    isSixClicked,
    isSevenClicked,
    isEightClicked,
    isNineClicked,
  ]);

  return (
    <div>
      <div className="flex flex-col mb-8">
        <p className="flex mt-20 text-3xl font-bold text-secondary">
          คุณมีอาการดังต่อไปนี้หรือไม่?
        </p>
        <h5 className="text-lg">โปรดเลือกให้ตรงกับตัวคุณ</h5>
      </div>
      <div className="flex flex-col">
        <div className="grid grid-cols-2">
          <button
            className={`sa-button flex w-auto mr-1 h-auto rounded-md  mb-3 border-2 ${
              isClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() => (isClicked ? setIsClick(false) : setIsClick(true))}
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">มีไข้</div>
            </div>
          </button>
          <button
            className={`sa-button flex w-full h-auto ml-1 rounded-md  mb-3 border-2 ${
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
              <div className="flex items-center">ไอ</div>
            </div>
          </button>
          <button
            className={`sa-button flex w-auto h-auto rounded-md mr-1 mb-3 border-2 ${
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
              <div className="flex items-center">มีน้ำมูก</div>
            </div>
          </button>
          <button
            className={`sa-button flex w-full h-auto rounded-md ml-1 mb-3 border-2 ${
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
              <div className="flex items-center">เจ็บคอ</div>
            </div>
          </button>
          <button
            className={`sa-button flex w-auto h-auto rounded-md mr-1 mb-3 border-2 ${
              isFourClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() =>
              isFourClicked ? setIsFourClick(false) : setIsFourClick(true)
            }
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center text-sm">
                หายใจเร็ว, หายใจเหนื่อย, หายใจลำบาก
              </div>
            </div>
          </button>
          <button
            className={`sa-button items-center flex w-full h-auto ml-1 rounded-md mb-3 border-2 ${
              isFiveClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() =>
              isFiveClicked ? setIsFiveClick(false) : setIsFiveClick(true)
            }
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">จมูกไม่ได้กลิ่น</div>
            </div>
          </button>
          <button
            className={`sa-button flex w-auto mr-1 h-auto rounded-md mb-3 border-2 ${
              isSixClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() =>
              isSixClicked ? setIsSixClick(false) : setIsSixClick(true)
            }
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">ลิ้นไม่รับรส</div>
            </div>
          </button>
          <button
            className={`sa-button flex w-full ml-1 h-auto rounded-md mb-3 border-2 ${
              isSevenClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() =>
              isSevenClicked ? setIsSevenClick(false) : setIsSevenClick(true)
            }
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">ตาแดง</div>
            </div>
          </button>
          <button
            className={`sa-button flex w-auto mr-1 h-auto rounded-md mb-3 border-2 ${
              isEightClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() =>
              isEightClicked ? setIsEightClick(false) : setIsEightClick(true)
            }
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">มีผื่น</div>
            </div>
          </button>
          <button
            className={`sa-button flex w-full ml-1 h-auto rounded-md mb-3 border-2 ${
              isNineClicked ? `border-primary text-primary` : `text-tertiary`
            }`}
            onClick={() =>
              isNineClicked ? setIsNineClick(false) : setIsNineClick(true)
            }
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center">ท้องเสีย</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
interface SelfAssessmentResultProps {
  result: number[];
}

export const SelfAssessmentResult = ({ result }: SelfAssessmentResultProps) => {
  //   const first = useMemo(() => {
  //     return result[0] <= 4 || result[1] <= 3;
  //   }, [result]);
  const first = result[0] <= 4 && result[1] <= 3;
  const second = result[0] <= 4 && result[1] > 3;
  const third = result[0] > 4 && result[1] <= 3;
  const fourth = result[0] > 4 && result[1] > 3;

  return (
    <div
      className=" bg-primary pt-10 mb-3 rounded-lg"
      style={{ height: '90%' }}
    >
      <div className="flex flex-col items-center p-4">
        <p className="flex mt-20 text-3xl font-bold text-white items-center">
          คุณไม่มีความเสี่ยงในการได้รับเชื้อ Covid-19
        </p>
        <img src={'/greenn.svg'} />
        <div className="flex flex-col text-white mt-6">
          <p className="text-lg font-bold">
            วิธีปฎิบัติตัวในช่วงของการระบาด COVID-19
          </p>
          <p className="text-md">
            1. หมั่นล้างมือให้สะอาดด้วยสบู่หรือแอลกอฮอล์เจล
          </p>
          <p className="text-md">
            2. หลีกเลี่ยงการสัมผัสผู้ที่มีอาการคล้ายไข้หวัด
            หรือหลีกเลี่ยงการไปที่มีฝูงชน
          </p>
          <p className="text-md">
            3. ปรุงอาหารประเภทเนื้อสัตว์และไข่ให้สุกด้วยความร้อน
          </p>
          <p className="text-md">
            4. ให้ผ้าปิดปากหรือจมูก เพื่อป้องกันการได้รับเชื้อโรค
          </p>
        </div>
      </div>
      <div className="flex flex-col"></div>
    </div>
  );
};
