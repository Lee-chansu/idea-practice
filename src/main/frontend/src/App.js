import React from 'react';
import { Route, Routes } from'react-router-dom'
import './App.css';

//컴포넌트
import Main from './routes/main'
import LoginPaging from './routes/loginPaging'

function App() {
  return (
  <Routes>
    <Route index element={<Main />} />
    <Route path="/login" element={<LoginPaging />} />
  </Routes>
  );
}

export default App;
