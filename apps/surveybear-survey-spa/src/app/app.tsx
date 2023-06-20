
import styled from 'styled-components';
import SurveyPage from './pages/SurveyPage';

import { Route, Routes } from 'react-router-dom';



const StyledApp = styled.div`
    // Your style here
`;


export function App() {

  return (
    <StyledApp>
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
          path="/"
          element={<div>Du är på förstasidan</div>} 
        />
      </Routes>
    </StyledApp>
  );

}


export default App;
