import React, { useEffect, useState } from "react";
import { Spinner } from "../styles/Styles";
import * as Survey from "survey-react";

export interface ISurveyProps {
  css: any;
  json: any;
  data: any;
  onComplete: (survey: any) => void;
}

const SelfAssessmentComponent: React.FunctionComponent<ISurveyProps> = (
  props
) => {
  const { css, data, json, onComplete } = props;

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return <Spinner />;

  return (
    <Survey.Survey css={css} data={data} json={json} onComplete={onComplete} />
  );
};

export default SelfAssessmentComponent;
