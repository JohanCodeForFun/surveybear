import SurveyModel, { ISurvey } from './SurveyModel';

export const getAllSurveys = async () => {
  /*  let customers = [];

   let data = await db_context.selectAllCustomers();

   data.forEach((customer) => {
     customers.push(
       new customerModel(
         customer.title,
         customer.author,
         customer.loaned,
         customer.available
       )
     );
   });

   return customers; */


  const survey = SurveyModel.find();
  if (!survey) {
    throw '404';
  }

  return survey;
};
