import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './components/home';
import UserPage from './components/user_info'
import ESGPage from './components/esg_entry'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user-info" element={<UserPage/>}/>
        <Route path="/esg-initiative" element={<ESGPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;