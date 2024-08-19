import React from 'react';
import {Link} from'react-router-dom'

//컴포넌트
import Header from '../components/logoHeader';

import styles from '../styles/main.module.css';
import form from '../styles/form.module.css';
import button from '../styles/button.module.css';

function JoinUs() {
  return (
  <div className={styles.inner}>
    <Header />
        <div className={form.wrap}>
            <div className={form.formContainer}>
                <form>
                    <h2 className={form.title}>회원가입</h2>
                    <div className={form.formInputWrap}>
                        <div className={form.inputMailWrap}>
                            <input className={form.formInput} type="email" placeholder="Email" />
                            <button className={button.mailCheck}>Email 인증</button>
                        </div>
                            <p className={form.message}>메일 인증 확인 메시지</p>
                        <input className={form.formInput} type="password" placeholder="비밀번호" />
                            <p className={form.message}>비밀번호 유효성 검사 메시지</p>
                        <input className={form.formInput} type="password" placeholder="비밀번호를 다시 입력해주세요." />
                            <p className={form.message}>비밀번호 일치 여부 메시지</p>
                    </div>
                    <div className={button.buttonWrapper}>
                        <input className={button.button} type="submit" value="완료"/>
                        <button className={button.button}>
                            <Link className={form.link} to="/">취소</Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
  </div>
  );
}

export default JoinUs;
