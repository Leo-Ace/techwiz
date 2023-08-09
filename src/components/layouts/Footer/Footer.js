import React from 'react';
import classNames from 'classnames/bind';
import styles from './footer.module.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { GoClock } from 'react-icons/go';
import { AiFillYoutube } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsFillSendFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);

function Footer(props) {
  return (
    <>
      <footer>
        <div className={cx("container")}>
          <div className={cx("row")}>
            <div className={cx("col-lg-8 footer-left")} >
              <div className={cx("left1")}>
                <img src='/images/favicon.ico'></img>
              </div>
              <div className={cx("left2")}>
                <div className={cx("icon-address")}>
                  <AiOutlineHome fontSize={25} color='#de3e18' />
                </div>
                <div className={cx("address")}>
                  <p>Hà Nội - Việt Nam</p>
                </div>
              </div>
              <div className={cx("row left3")}>
                <div className={cx("col-lg-4 row")}>
                  <div className={cx("icon_phone")}>
                    <BiPhoneCall fontSize={25} color='#de3e18' />
                  </div>
                  <div className={cx("phone_num")}>
                    <p>+84 987654321</p>
                  </div>
                </div>
                <div className={cx("col-lg-8 row")}>
                  <div className={cx("icon_oclock")}>
                    <GoClock fontSize={25} color='#de3e18' />
                  </div>
                  <div className={cx("time")}>
                    <p> Mon - Fri : 9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
              <div className={cx("left4")}>
                <Link to={''}><AiFillYoutube className={cx("icon")} /></Link>
                <Link to={''}><FaFacebookF className={cx("icon")} /></Link>
                <Link to={''}><AiFillInstagram className={cx("icon")} /></Link>
                <Link to={''}><BsTwitter className={cx("icon")} /></Link>
              </div>
            </div>
            <div className={cx("col-lg-4 footer-right")} >
              <h5>Subscribe to our newsletter</h5>
              <p>Sign up for our newsletter to receive the latest news and updates about special offers and service discounts.</p>
              <div className={cx("email")}>
                <input type="email" name="" id="input" class="form-control" value="" required="required" title="" placeholder='Enter your email' />
                <Link to={''} className={cx("submit")}><BsFillSendFill fontSize={25} color='#de3e18' /></Link>
              </div>
            </div>
          </div>
          <div className={cx("gach_duoi")}></div>
          <div className={cx("ban_quyen")}>
            <h6>Copyright 2023 © Sáu Lục Six.</h6>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;