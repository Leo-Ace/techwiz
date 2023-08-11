import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './register.module.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const cx = classNames.bind(styles);
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passwordPattern = /^[a-z0-9_\.]+$/;
const namePattenrn = /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/gm;



function Register(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [account, setAccount] = useState([]);

    useEffect(() => {
        async function getAccount() {
            let res = await axios.get('http://localhost:8000/accounts');
            let accounts = res.data;
            setAccount(accounts);
        }
        getAccount();
    }, []);


    const onSubmit = async (data) => {
        console.log(account);
        console.log(data);
        let acc = account.find((item) => {
            return (item.email == data.email ? data.email : null);
        });

        if (!acc) {
            const res = await axios.post('http://localhost:8000/accounts', data);
            sessionStorage.setItem('login', JSON.stringify(acc));
            window.location.assign('/login');
        } else {
            window.alert('Email already used, please use another email');
        }
        // const res = await axios.post('http://localhost:8000/accounts', data);
        // window.location.assign('login');
    };

    return (
        <section className={cx("h-100 bg-dark")}>
            <div className={cx("container py-5 h-100")}>
                <div className={cx("row d-flex justify-content-center align-items-center h-100")}>
                    <div className={cx("col")}>
                        <div className={cx("card card-registration my-4")}>
                            <div className={cx("row g-0")}>
                                <div className={cx("col-xl-6 d-none d-xl-block p-md-5")}>
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                        alt="Sample photo" className={cx("img-fluid")}
                                        style={{ borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem" }} />
                                </div>
                                <div className={cx("col-xl-6")}>
                                    <div className={cx("card-body p-md-5 text-black")}>
                                        <h3 className={cx("mb-5 text-uppercase")}>Student registration form</h3>

                                        <form onSubmit={handleSubmit(onSubmit)}>

                                            <div className={cx("form-outline mb-4")}>
                                                <label className={cx("form-label")} for="form3Example1m">User name</label>
                                                <input {...register("name", { required: true, pattern: namePattenrn })} id="form3Example1m" className={cx("form-control form-control-lg")} />
                                                {errors.name?.type === 'required' && <span className='small text-danger font-italic'> Name is not blank</span>}
                                                {errors.name?.type === 'pattern' && <span className='small text-danger font-italic'>Name cannot have special characters.</span>}
                                            </div>

                                            <div className={cx("d-md-flex justify-content-start align-items-center mb-4 py-2")}>

                                                <h6 className={cx("mb-0 me-4 mr-3")}>Gender: </h6>

                                                <div className={cx("form-check form-check-inline mb-0 me-4")}>
                                                    <input  {...register('gender')} className={cx("form-check-input")} type="radio"
                                                        value="Female" />
                                                    <label className={cx("form-check-label")} for="femaleGender">Female</label>
                                                </div>

                                                <div className={cx("form-check form-check-inline mb-0 me-4")}>
                                                    <input {...register('gender')} className={cx("form-check-input")} type="radio"
                                                        value="Male" />
                                                    <label className={cx("form-check-label")} for="maleGender">Male</label>
                                                </div>

                                                <div className={cx("form-check form-check-inline mb-0")}>
                                                    <input  {...register('gender')} className={cx("form-check-input")} type="radio"
                                                        value="Other" />
                                                    <label className={cx("form-check-label")} for="otherGender">Other</label>
                                                </div>

                                            </div>

                                            <div className={cx("form-outline mb-4")}>
                                                <label className={cx("form-label")} for="form3Example9">Email</label>
                                                <input {...register("email", { required: true, pattern: emailPattern })} id="form2Example17" className={cx("form-control form-control-lg")} />
                                                {errors.email?.type === 'required' && <span className='small text-danger font-italic'>Email is not blank</span>}
                                                {errors.email?.type === 'pattern' && <span className='small text-danger font-italic'>Please enter a valid email address
                                                </span>}
                                            </div>

                                            <div className={cx("form-outline mb-4")}>
                                                <label className={cx("form-label")} for="form3Example9">Password</label>
                                                <input {...register("password", { required: true, pattern: passwordPattern })} id="form2Example17" className={cx("form-control form-control-lg")} />
                                                {errors.password?.type === 'required' && <span className='small text-danger font-italic'>Password is not blank</span>}
                                                {errors.password?.type === 'pattern' && <span className='small text-danger font-italic'>Only lowercase letters, numbers, underscores (_), dots (.) are allowed in User Name</span>}
                                            </div>
                                            <p className={cx("mb-5 pb-lg-2")} style={{ color: "#393f81;" }}>Have an account? <a href="#!"
                                                style={{ color: "#393f81;" }}>Loggin here</a></p>

                                            <div className={cx("d-flex justify-content-center")}>
                                                <button type="submit" className={cx("btn btn-warning btn-lg ms-2")}>Submit form</button>
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

export default Register;