import { ISurvey } from '@surveybear/surveybear-lib';

const getSurveyById = async ( surveyId: string): Promise<ISurvey> => {
    return (await fetch(`${process.env?.['NX_REQ_URL']}/api/survey/${surveyId}`)).json();
}

export default getSurveyById;