import React from 'react';
import {Link} from'react-router-dom'

//컴포넌트
import Header from '../components/header';
import BoardList from '../components/boardList'

//css module
import styles from '../styles/main.module.css';
import button from '../styles/button.module.css';
import board from '../styles/board.module.css';

function Main() {


  return (
  <div className={styles.inner}>
    <Header />
    <div className={styles.wrap}>
        <visual/>
        <div className={board.board}>
            <div className={board.boardTitle}>
                <h2 className={board.title}>게시판</h2>
                <Link to="/insert" className={board.link} style={{display : "flex", justifyContent : "flex-end" }}>
                    <button className={button.writeButton}>글 쓰기</button>
                </Link>
            </div>
            <BoardList />
            <div className={board.paging}>
                <ul className={board.pagingNum}>
                    <li>
                        <Link to="#" className={button.numberButton}>1</Link>
                    </li>
                    <li>
                        <Link to="#" className={button.numberButton}>2</Link>
                    </li>
                 </ul>
            </div>
        </div>
    </div>
  </div>
  );
}

export default Main;
