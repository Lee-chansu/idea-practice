import React from 'react';

//컴포넌트
import Header from '../components/header';

//css module
import styles from '../styles/main.module.css';
import button from '../styles/button.module.css';
import board from '../styles/board.module.css';
import insert from '../styles/insert.module.css';

function Detail() {
    return (
    <div className={styles.inner}>
        <Header />
        <div className={styles.wrap}>
            <visual/>
            <div className={board.board}>
                <div className={board.boardTitle}>
                    <h2 className={board.title}>글제목</h2>
                    <p className={insert.writer}>작성자</p>
                </div>
                <div className={board.boardList}>
                    <p className={board.content}>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Sed convallis,
                        neque ut finibus viverra, ipsum justo cursus nisi,
                        at hendrerit mauris neque id justo. Nulla facilisi.
                        Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
                        Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
                        Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
                        Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
                        Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
                        Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
                        Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
                        Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facil
                    </p>
                    <div className={button.buttonWrapper}>
                        <button className={button.button}>등록</button>
                        <button className={button.button}>취소</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Detail;
