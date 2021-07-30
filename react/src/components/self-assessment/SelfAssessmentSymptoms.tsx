import React, { useEffect, useState } from 'react';
import { FiCheck } from 'react-icons/fi';

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
    console.log(
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
    );
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
              isClicked
                ? `border-primary text-white bg-primary`
                : `text-tertiary`
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
            className={`sa-button flex w-auto h-auto ml-1 rounded-md  mb-3 border-2 ${
              isOneClicked
                ? `border-primary text-white bg-primary`
                : `text-tertiary`
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
              isTwoClicked
                ? `border-primary text-white bg-primary`
                : `text-tertiary`
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
            className={`sa-button flex w-auto h-auto rounded-md ml-1 mb-3 border-2 ${
              isThreeClicked
                ? `border-primary text-white bg-primary`
                : `text-tertiary`
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
              isFourClicked
                ? `border-primary text-white bg-primary`
                : `text-tertiary`
            }`}
            onClick={() =>
              isFourClicked ? setIsFourClick(false) : setIsFourClick(true)
            }
          >
            <div className="flex">
              <div className="flex">
                <FiCheck className="flex w-5 h-5 m-3" />
              </div>
              <div className="flex items-center text-left text-sm">
                หายใจเร็ว, หายใจเหนื่อย, หายใจลำบาก
              </div>
            </div>
          </button>
          <button
            className={`sa-button items-center flex w-auto h-auto ml-1 rounded-md mb-3 border-2 ${
              isFiveClicked
                ? `border-primary text-white bg-primary`
                : `text-tertiary`
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
              isSixClicked
                ? `border-primary text-white bg-primary`
                : `text-tertiary`
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
            className={`sa-button flex w-auto ml-1 h-auto rounded-md mb-3 border-2 ${
              isSevenClicked
                ? `border-primary text-white bg-primary`
                : `text-tertiary`
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
              isEightClicked
                ? `border-primary text-white bg-primary`
                : `text-tertiary`
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
            className={`sa-button flex w-auto ml-1 h-auto rounded-md mb-3 border-2 ${
              isNineClicked
                ? `border-primary text-white bg-primary`
                : `text-tertiary`
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
