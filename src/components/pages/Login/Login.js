import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './loggin.module.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const cx = classNames.bind(styles);
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;




function Login(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [account, setAccount] = useState([]);

    useEffect(()=>{
        async function getAccount(){
            let res = await axios.get('http://localhost:8000/accounts');
            let accounts = res.data;
            setAccount(accounts);
        }
        getAccount();
    }, []);
    const onSubmit = function(data) {
        let acc = account.find((item)=>{
            return item.email == data.email && item.password == data.password
        });

        if(acc) {
            sessionStorage.setItem('login', JSON.stringify(acc));
            window.location.assign('/register');
        }
    };

    return (
        <section className={cx("vh-100")} style={{ backgroundColor: "#9A616D;" }}>
            <div className={cx("container py-5 h-100")}>
                <div className={cx("row d-flex justify-content-center align-items-center h-100")}>
                    <div className={cx("col col-xl-10")}>
                        <div className={cx("card")} style={{ borderRadius: "1rem" }}>
                            <div className={cx("row g-0")}>
                                <div className={cx("col-md-6 col-lg-5 d-none d-md-block")}>
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                        alt="login form" className={cx("img-fluid")} style={{ borderRadius: "1rem 0 0 1rem;" }} />
                                </div>
                                <div className={cx("col-md-6 col-lg-7 d-flex align-items-center")}>
                                    <div className={cx("card-body p-4 p-lg-5 text-black")}>
                                        <div className={cx("d-flex align-items-center mb-3 pb-1")}>
                                            <i className={cx("fas fa-cubes fa-2x me-3")} style={{ color: "#ff6219;" }}></i>
                                            <span className={cx("h1 fw-bold mb-0")}>Logo</span>
                                        </div>
                                        <h5 className={cx("fw-normal mb-3 pb-3")} style={{ letterSpacing: "1px;" }}>Sign into your account</h5>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className={cx("form-outline mb-4")}>
                                                <label className={cx("form-label")} for="form2Example17">Email address</label>
                                                <input {...register("email", { required: true, pattern: emailPattern })} id="form2Example17" className={cx("form-control form-control-lg")} />
                                                {errors.email?.type === 'required' && <span className='small text-danger font-italic'>Email is not blank</span>}
                                                {errors.email?.type === 'pattern' && <span className='small text-danger font-italic'>Email is not invalid email address</span>}
                                            </div>
                                            <div className={cx("form-outline mb-4")}>
                                                <label className={cx("form-label")} for="form2Example27">Password</label>
                                                <input {...register("password", { required: true })} id="form2Example27" className={cx("form-control form-control-lg")} />
                                                {errors.password?.type === 'required' && <span className='small text-danger font-italic'>Password is not blank</span>}
                                            </div>
                                            <div className={cx("pt-1 mb-4")}>
                                                <button className={cx("btn btn-dark btn-lg btn-block")} type="submit">Login</button>
                                            </div>
                                            <a className={cx("small text-muted")} href="#!">Forgot password?</a>
                                            <p className={cx("mb-5 pb-lg-2")} style={{ color: "#393f81;" }}>Don't have an account? <a href="#!"
                                                style={{ color: "#393f81;" }}>Register here</a></p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;