
import styled from 'styled-components';
import SurveyPage from './pages/SurveyPage';

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
      <Routes>
        <Route
          path="/survey/:surveyId"
          element={<SurveyPage />}
        />
        <Route
          path="/"
          element={
          <>
            <h1>Du är på första sidan!</h1>
            <p>Vad tycker om våra tjänster på SurveyBear?</p>
            <StarRating/>
          </>} 
        />
      </Routes>
    </StyledApp>
  );

}


export default App;
