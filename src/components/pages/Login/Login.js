import classNames from 'classnames/bind';
import styles from './login.module.css';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom'
import { account } from '../../../db';
import $ from 'jquery';
import { useEffect } from 'react';

const cx = classNames.bind(styles);
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordPattern = /^[a-z0-9_\.]+$/;

function Login(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const accounts = account;
        useEffect(() => {
        $("html, body").animate({ scrollTop: "0" }, "slow");
    }, []);
    const onSubmit = function(data) {
        let acc = accounts.find((item)=>{
            return item.email === data.email && item.password === data.password
        });
        if(acc) {
            sessionStorage.setItem('login', JSON.stringify(acc));
            window.location.assign('/');
        } else {
            window.alert('Email address or passrord is incorrect')
        }
    };
    
    return (
        <section className={cx("h-100 bg-dark")}>
            <div className={cx("container py-5 h-100")}>
                <div className={cx("row d-flex justify-content-center align-items-center h-100")}>
                    <div className={cx("col")}>
                        <div className={cx("my-4 text-white")}>
                            <div className={cx("row g-0 d-flex align-items-center")}>
                                <div className={cx("col-xl-6 d-none d-xl-block p-md-5")}>
                                    <img src="/images/img_login.avif"
                                        alt="Sample photo" className={cx("img-fluid")}
                                        style={{ borderRadius: ".25rem"}} />
                                </div>
                                <div className={cx("col-xl-6")}>
                                    <div className={cx("card-body p-md-5 text-black")}>
                                        <h3 className={cx("mb-5 text-uppercase")}>Sign in your account</h3>

                                        <form onSubmit={handleSubmit(onSubmit)}>

                                            <div className={cx("form-outline mb-4")}>
                                                <label className={cx("form-label")} for="form3Example9">Email</label>
                                                <input {...register("email", { required: true, pattern: emailPattern })} id="form2Example17" className={cx("form-control form-control-lg")} />
                                                {errors.email?.type === 'required' && <span className='small text-danger font-italic'>Email is not blank</span>}
                                                {errors.email?.type === 'pattern' && <span className='small text-danger font-italic'>Please enter a valid email address
                                                </span>}
                                            </div>

                                            <div className={cx("form-outline mb-4")}>
                                                <label className={cx("form-label")} for="form3Example9">Password</label>
                                                <input {...register("password", { required: true, pattern: passwordPattern, minLength: 8,maxLength: 32 })} id="form2Example17" className={cx("form-control form-control-lg")} />
                                                {errors.password?.type === 'required' && <span className='small text-danger font-italic'>Password is not blank</span>}
                                                {errors.password?.type === 'pattern' && <span className='small text-danger font-italic'>Only lowercase letters, numbers, underscores (_), dots (.) are allowed in password</span>}
                                                {errors.password?.type === 'minLength' && <span className='small text-danger font-italic'>Password is more than 8 characters</span>}
                                                {errors.password?.type === 'maxLength' && <span className='small text-danger font-italic'>Password is less than 32 characters</span>}
                                            </div>
                                            <p className={cx("mb-5 pb-lg-2")} style={{ color: "#393f81;" }}>Don't have an account? <Link to="/register"
                                                style={{ color: "#393f81;" }}>Register here</Link></p>

                                            <div className={cx("d-flex justify-content-center")}>
                                                <button type="submit" className={cx("btn btn-warning btn-lg ms-2")}>Sign in</button>
                                            </div>

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