import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import LandingPage from './Components/LandingPage/LandingPage';
import Popular from './Components/Popular/Popular'
import Quiz from './Components/Quiz/Quiz';

const App = () => {
  return (
    <div>
      <BrowserRouter>
       
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/popular' element={<Popular/>} />
          <Route path='/login' element={<LoginSignup/>} />
          <Route path='/quiz' element={<Quiz/>} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
