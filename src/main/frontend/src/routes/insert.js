import React from 'react';

//컴포넌트
import Header from '../components/header';
import styles from '../styles/main.module.css';
import button from '../styles/button.module.css';
import board from '../styles/board.module.css';
import insert from '../styles/insert.module.css';

function Insert() {
  return (
  <div className={styles.inner}>
    <Header />
    <div className={styles.wrap}>
        <visual/>
        <div className={board.board}>
            <div className={board.boardTitle}>
                <input className={insert.title} type="text" placeholder="Title" />
                <p className={insert.writer}>작성자</p>
            </div>
            <div className={board.boardList}>
                <div className={insert.insertForm}>
                    <textarea className={insert.insertContent}/>
                    <div className={button.buttonWrapper}>
                        <button className={button.button}>등록</button>
                        <button className={button.button}>취소</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  );
}

export default Insert;
