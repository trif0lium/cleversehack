import React, { useEffect, useState } from "react";
// import SelfAssessmentComponent from "../components/self-assessment/SelfAssessmentComponent";
// import SelfAssessmentContent from "../components/self-assessment/SelfAssessmentContent";
// import defaultSurveyConfig from "../components/self-assessment/self-assessment";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useHistory } from "react-router-dom";
import {
  SelfAssessmentHistory,
  SelfAssessmentSymptoms,
} from "../components/self-assessment/SelfAssessmentContent";
import { SelfAssessmentWrap } from "../components/styles/SelfAssessmentStyles";

enum SelfAssessmentStep {
  HISTORY = "history",
  SYMPTOMS = "symptoms",
  RESULT = "result",
}

const SelfAssessment = () => {
  const [step, setStep] = useState<SelfAssessmentStep>(
    SelfAssessmentStep.HISTORY
  );

  const history = useHistory();

  useEffect(() => {
    renderBody(step);
    console.log("ju,", step);
  }, [step]);

  const renderBody = (step: SelfAssessmentStep) => {
    switch (step) {
      case SelfAssessmentStep.HISTORY:
        return <SelfAssessmentHistory />;
      case SelfAssessmentStep.SYMPTOMS:
        return <SelfAssessmentSymptoms />;
      // case SelfAssessmentStep.RESULT:
      // return <SelfAssessmentResult />;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="self-assessment bg-white h-10 w-full absolute top-0 shadow-lg">
        <button
          className="back-button flex p-2 text-tertiary text-sm"
          onClick={() => history.push("/menu")}
        >
          <IoMdArrowRoundBack className="option-button-icon h-5 w-5 mr-2" />
          <p className="truncate">เมนูหลัก</p>
        </button>
      </div>
      <SelfAssessmentWrap>
        <div className="self-assessment-content">
          {renderBody(step)}
          <div className="flex w-full">
            <button
              className={`sa-button flex w-full rounded-md p-3 mb-3 text-white bg-primary font-bold justify-center
            `}
              onClick={() => {
                setStep(SelfAssessmentStep.SYMPTOMS);
              }}
            >
              ถัดไป
            </button>
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
