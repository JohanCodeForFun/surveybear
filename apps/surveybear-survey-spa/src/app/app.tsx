import styled from 'styled-components';
import ThankYouPage from './pages/ThankYouPage';
import SurveyPage from './pages/SurveyPage';
import StartPage from './pages/StartPage';
import StartPage2 from './pages/StartPage2';


import { Route, Routes } from 'react-router-dom';
import { render } from 'react-dom'
import ReactStars from 'react-stars'


const StyledApp = styled.div`
    // Your style here
`;

function StarRating() {
  const ratingChanged = (newRating: number) => {
    console.log(newRating)
  }
   
  return (
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    color2={'#ffd700'} />
  );
}

export function App() {

  return (
    <StyledApp>
      <button onClick={() => {throw Error("Method does not exist")}}>Break the world</button>
      <Routes>
        <Route
          path="/survey/:surveyId"
          element={<SurveyPage />}
        />
        {process.env['NX_STARTPAGE_2'] === 'true' &&
          <Route
          path="/"
          element={<StartPage2/>} />
        }
        <Route
          path="/thank-you/"
          element={<ThankYouPage />}
        />
        {process.env['NX_STARTPAGE_ENABLED'] === 'true' &&
          <Route
          path="/"
          element={
          <>
            <h1>Du är på förstasidan!</h1>
            <p>Vad tycker om våra tjänster på SurveyBear?</p>
            <StarRating/>
          </>} 
        />}
      </Routes>
    </StyledApp>
  );

}


export default App;
