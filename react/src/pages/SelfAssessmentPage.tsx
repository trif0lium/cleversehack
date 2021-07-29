import React, { useEffect, useMemo, useState } from 'react';
// import SelfAssessmentComponent from "../components/self-assessment/SelfAssessmentComponent";
// import SelfAssessmentContent from "../components/self-assessment/SelfAssessmentContent";
// import defaultSurveyConfig from "../components/self-assessment/self-assessment";
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';
import { SelfAssessmentHistory } from '../components/self-assessment/SelfAssessmentHistory';
import { SelfAssessmentResult } from '../components/self-assessment/SelfAssessmentResult';
import { SelfAssessmentSymptoms } from '../components/self-assessment/SelfAssessmentSymptoms';
import { SelfAssessmentWrap } from '../components/styles/SelfAssessmentStyles';

enum SelfAssessmentStep {
  HISTORY = 'history',
  SYMPTOMS = 'symptoms',
  RESULT = 'result',
}

const SelfAssessment = () => {
  const [step, setStep] = useState<SelfAssessmentStep>(
    SelfAssessmentStep.HISTORY,
  );
  const [historyCheck, setHistoryCheck] = useState<boolean[]>([]);
  const [symptomsCheck, setSymptomsCheck] = useState<boolean[]>([]);
  const [assessment, setAssessment] = useState<number[]>([0, 0]);

  const history = useHistory();

  useEffect(() => {
    renderBody(step);
  }, [step]);

  const result = useMemo(() => {
    const historyResult = historyCheck.filter((history) => history === true);
    const symptomsResult = symptomsCheck.filter((symptom) => symptom === true);
    return [historyResult.length, symptomsResult.length];
  }, [historyCheck, symptomsCheck]);

  const renderBody = (step: SelfAssessmentStep) => {
    switch (step) {
      case SelfAssessmentStep.HISTORY:
        return (
          <SelfAssessmentHistory
            historyCheck={historyCheck}
            setHistoryCheck={setHistoryCheck}
          />
        );
      case SelfAssessmentStep.SYMPTOMS:
        return (
          <SelfAssessmentSymptoms
            symptomsCheck={symptomsCheck}
            setSymptomsCheck={setSymptomsCheck}
          />
        );
      case SelfAssessmentStep.RESULT:
        return <SelfAssessmentResult result={result} />;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="self-assessment bg-white h-10 w-full absolute top-0 shadow-lg">
        <button
          className="back-button flex p-2 text-tertiary text-sm"
          onClick={() => history.push('/menu')}
        >
          <IoMdArrowRoundBack className="option-button-icon h-5 w-5 mr-2" />
          <p className="truncate">เมนูหลัก</p>
        </button>
      </div>
      <SelfAssessmentWrap>
        <div className="self-assessment-content overflow-y-auto">
          {renderBody(step)}
          <div className="flex w-full">
            {step == SelfAssessmentStep.RESULT ? (
              <button
                className={`sa-button flex w-full rounded-lg p-3 mb-3 text-white bg-primary font-bold justify-center
            `}
                onClick={() => history.push('/where-to-test-covid-19')}
              >
                ค้นหาจุดตรวจโควิด
              </button>
            ) : (
              <button
                className={`sa-button flex w-full rounded-lg p-3 mb-3 text-white bg-primary font-bold justify-center
          `}
                onClick={() => {
                  step == SelfAssessmentStep.HISTORY
                    ? setStep(SelfAssessmentStep.SYMPTOMS)
                    : setStep(SelfAssessmentStep.RESULT);
                }}
              >
                ถัดไป
              </button>
            )}
          </div>
        </div>
      </SelfAssessmentWrap>
    </div>
  );
};

export default SelfAssessment;
//  <SelfAssessmentComponent
//     css={defaultSurveyConfig.defaultSurveyCSS}
//     data={defaultSurveyConfig.defaultSurveyDATA}
//     json={defaultSurveyConfig.defaultSurveyJSON}
//     onComplete={(survey: any) => {
//       console.log(survey.data);

//       /** Save to a database */
//       /** Add to a spreadsheet, etc.... */
//     }}
//   />
