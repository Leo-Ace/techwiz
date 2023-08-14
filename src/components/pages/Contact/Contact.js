import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './contact.module.css';
import { FaMapMarked, FaRegPaperPlane, FaPhoneAlt, FaAngleDoubleRight } from 'react-icons/fa';
import $ from 'jquery';

const cx = classNames.bind(styles); 

function Contact(props) {
    useEffect(() => {
        $("html, body").animate({ scrollTop: "0" }, "slow");
    }, []);
    
    return (
        <>
            <main>
                <div className={cx('banner','m-0 p-0 w-100 position-relative')}>
                    <span>
                         <img className={cx('w-100')} src='./images/contact/banner-contact.jpg' alt='banner'/>
                    </span>
                    <div className={cx('text-banner','position-absolute')}>
                        <h1 className={cx('text-white')}>CONTACT</h1>
                        <h5 className={cx('text-white')}>Home <FaAngleDoubleRight /> Contact</h5>
                    </div>
                </div>
                <div className={cx('map','w-100')}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d635993.0293976123!2d-3.9926854722082896!3d53.39658{55597308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae72e7e47f69%3A0x6c930e96df4455fe!2zU8OibiB24bqtbiDEkeG7mW5nIE9sZCBUcmFmZm9yZA!5e0!3m2!1svi!2s!4v1691555806215!5m2!1svi!2s" width='100%' height='480px' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className={cx('content-wrap','container')}>
                    <div className={cx('')}>
                        <div className={cx("row my-5")}>
                            <div className={cx("col-lg-4 col-md-6 mt-3")}>
                                <div className={cx("box-contact",'shadow p-5 mx-1')}>
                                    <div className={cx('text-center')}>
                                        <FaMapMarked fontSize={55} color='red'/>
                                        <h3 className={cx('my-3')}>Address</h3>
                                        <h5>Sir Matt Busby Way, Old Trafford, Stretford, Manchester M16 0RA, Vương quốc Anh</h5>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("col-lg-4 col-md-6 mt-3")}>
                                <div className={cx("box-contact",'shadow p-5 mx-1')}>
                                    <div className={cx('text-center')}>
                                        <FaRegPaperPlane fontSize={55} color='red'/>
                                        <h3 className={cx('my-3')}>Mail</h3>
                                        <h5>OldTrafford@gmail.com</h5>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("col-lg-4 col-md-6 mt-3")}>
                                <div className={cx("box-contact",'shadow p-5 mx-1')}>
                                    <div className={cx('text-center')}>
                                        <FaPhoneAlt fontSize={55} color='red'/>
                                        <h3 className={cx('my-3')}>Phone</h3>
                                        <h5>+441616767770</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx(' text-center py-5')}>
                        <h5 className={cx('text-danger')}>HAVE A QUESTION?</h5>
                        <h2 className={cx('mb-4')}><b>DROP A LINE</b></h2>
                        <form method=''>
                            <div className={cx('row mb-3')}>
                                <div className={cx('col-lg-6 col-md-6 mt-3')}>
                                    <input type='text' placeholder='Name' className={cx('box','form-control py-4 px-3 border border-1 border-dark')}/>
                                </div>
                                <div className={cx('col-lg-6 col-md-6 mt-3')}>
                                    <input type='text' placeholder='Email' className={cx('box','form-control py-4 px-3 border border-1 border-dark')}/>
                                </div>
                            </div>
                            <textarea rows={12} cols={100} className={cx('box','form-control mt-4 border border-1 border-dark')}/>
                            <div className={cx('my-4')}>
                                <div className={cx('d-flex align-items-center justify-align-content-start')}>
                                    <input type='checkbox'/>
                                    <p className={cx("m-0 p-0 ml-2")}>I agree that my submitted data is being collected and stored.</p>
                                </div>
                            </div>
                            <button type='button' className={cx('send_msg','btn btn-dark py-3 px-4 text-uppercase')}>Send your message</button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Contact;