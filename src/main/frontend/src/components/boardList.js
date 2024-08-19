import React from 'react';
import { Link } from'react-router-dom';

//css module
import board from '../styles/board.module.css';

function BoardList() {
    return(
        <div className={board.boardList}>
            <ul className={board.list}>
                <li className={board.item}>
                    <Link to="/detail" className={board.link}>
                        <span>글 제목</span>
                            <span className={board.date}>2021-01-01</span>
                    </Link>
                    <span className={board.writer}>글쓴이</span>
                </li>
            </ul>
        </div>
    )
}

export default BoardList
