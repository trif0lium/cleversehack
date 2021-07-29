import React, { useMemo } from 'react';
interface SelfAssessmentResultProps {
  result: number[];
}

export const SelfAssessmentResult = ({ result }: SelfAssessmentResultProps) => {
  const first = useMemo(() => {
    return result[0] <= 4 && result[1] <= 3;
  }, [result]);
  const second = useMemo(() => {
    return result[0] <= 4 && result[1] > 3;
  }, [result]);
  const third = useMemo(() => {
    return result[0] > 4 && result[1] <= 3;
  }, [result]);
  const fourth = useMemo(() => {
    return result[0] > 4 && result[1] > 3;
  }, [result]);

  return (
    <div
      className={`${
        first
          ? `bg-primary`
          : second
          ? `bg-secondary`
          : third
          ? `bg-yellow-400`
          : `bg-red-500`
      } pt-10 mb-3 rounded-lg`}
      style={{ height: '90%' }}
    >
      <div
        className={`flex flex-col items-center p-6 ${
          first || second || fourth ? `text-white` : `text-secondary`
        }`}
      >
        <p className={`flex mt-20 text-3xl font-bold   items-center`}>
          {first
            ? 'คุณไม่มีความเสี่ยงในการได้รับเชื้อ Covid-19'
            : second
            ? 'คุณอาจเป็นไข้หวัด หรือไข้หวัดใหญ่'
            : third
            ? 'คุณมีความเสี่ยงในการสัมผัสเชื้อโรค CORONA VIRUS 2019'
            : 'คุณอาจติดเชื้อ COVID-19'}
        </p>
        <div className="flex flex-col mt-6">
          <p className="text-lg font-bold">
            {first
              ? 'วิธีปฎิบัติตัวในช่วงของการระบาด COVID-19'
              : second
              ? 'โดยไม่มีความเสี่ยงสัมผัสเชื้อ CORONA VIRUS 2019'
              : third
              ? 'แต่ยังไม่มีความจำเป็นต้องมารพ.เพื่อตรวจหาโรค'
              : 'กรุณาป้องกันเชื้อโรค และมาพบแพทย์ที่โรงพยาบาล ตามสิทธิ์การรักษา'}
          </p>
          {first && (
            <>
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
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col"></div>
    </div>
  );
};
