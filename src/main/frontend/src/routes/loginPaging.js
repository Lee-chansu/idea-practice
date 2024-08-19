import React from 'react';
import {Link} from'react-router-dom'

//컴포넌트
import Header from '../components/logoHeader';
import styles from '../styles/main.module.css';
import form from '../styles/form.module.css';
import button from '../styles/button.module.css';

function Login() {
  return (
  <div className={styles.inner}>
      <Header />
          <div className={form.wrap}>
              <div className={form.formContainer}>
                  <form>
                      <h2 className={form.title}>Login</h2>
                      <div className={form.formInputWrap}>
                          <input className={form.formInput} type="text" placeholder="Email" />
                          <input className={form.formInput} type="password" placeholder="Password" />
                      </div>
                          <Link to="#" className={form.formLink}>Forgot Password?</Link>
                      <div className={form.formBtnWrap}>
                          <button className={form.formBtn}>Login</button>
                          <Link to="/joinUs" className={styles.link}>
                              <button className={form.formBtn}>Sign up</button>
                          </Link>
                      </div>
                      <div className={form.formSNS}>
                          <h3 className={form.formSNSTitle}>
                              SNS Login
                          </h3>
                          <div className={form.formSNSBtnWrap}>
                              <Link to="#" className={styles.link}>
                                  <img className={button.snsBtn} src="https://test.codemshop.com/wp-content/plugins/mshop-mcommerce-premium-s2/lib/mshop-members-s2/assets/images/social/icon_1/Kakao.png" alt="kakaoLogin" />
                              </Link>
                              <Link to="#" className={styles.link}>
                                  <img className={button.snsBtn} src="https://test.codemshop.com/wp-content/plugins/mshop-mcommerce-premium-s2/lib/mshop-members-s2/assets/images/social/icon_1/Naver.png" alt="naverLogin" />
                              </Link>
                              <Link to="#" className={styles.link}>
                                  <img className={button.snsBtn} src="https://test.codemshop.com/wp-content/plugins/mshop-mcommerce-premium-s2/lib/mshop-members-s2/assets/images/social/icon_1/Google.png" alt="googleLogin" />
                              </Link>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
    </div>
  );
}

export default Login;
