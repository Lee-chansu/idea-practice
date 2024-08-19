import React from 'react';
import { Route, Routes } from'react-router-dom'
import './App.css';

//컴포넌트
import Main from './routes/main'
import Insert from './routes/insert'
import BoardDetail from './routes/boardDetail'  // boardDetail.js 생성 후 import, route path "/detail"로 설정.  // boardDetail.js: boardDetail.js route path "/detail"로 설정.  // boardDetail.js: boardDetail.js route path "/detail"로 설정.  // boardDetail.js: boardDetail.js route path "/detail"로 설정.  // boardDetail.js: boardDetail.js route path "/detail"
import LoginPaging from './routes/loginPaging'
import JoinUs from './routes/joinUs'
import Join from './routes/join'

function App() {
  return (
  <Routes>
    <Route index element={<Main />} />
    <Route path="/insert" element={<Insert />} />
    <Route path="/detail" element={<BoardDetail />} />

    <Route path="/login" element={<LoginPaging />} />
    <Route path="/joinUs" element={<JoinUs />} />
    <Route path="/join" element={<Join />} />
  </Routes>
  );
}

export default App;
