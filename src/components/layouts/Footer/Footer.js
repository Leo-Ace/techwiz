import React from 'react';
import classNames from 'classnames/bind';
import styles from './footer.module.css';
import { MdLocationPin } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephoneFill } from 'react-icons/bs';
import { GoArrowRight } from 'react-icons/go';
import { FaFacebookF } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const cx = classNames.bind(styles);

function Footer(props) {
  return (
    <>
      <footer>
        <div className={cx("container")}>
          <div className={cx("row")}>
            <div className={cx("col-lg-3")}>
              <div className={cx("footer_title")}>About US</div>
              <div className={cx("blog")}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ante at nunc pretium.</p>
              </div>
              <div className={cx("address")}>
                <div className={cx("icon_address")}>
                  <MdLocationPin fontSize={20} />
                </div>
                <div className={cx("dia_chi")}>
                  <p>238, Hoàng Quốc Việt, Cầu Giấy, Hà Nội</p>
                </div>
              </div>
              <div className={cx("email")}>
                <div className={cx("icon_email")}>
                  <HiOutlineMail fontSize={20} />
                </div>
                <div className={cx("gmail")}>
                  <p>info@companyname.com</p>
                </div>
              </div>
              <div className={cx("phone")}>
                <div className={cx("icon_phone")}>
                  <BsTelephoneFill fontSize={20} />
                </div>
                <div className={cx("phone_number")}>
                  <p>+84 987654321</p>
                </div>
              </div>
            </div>
            <div className={cx("col-lg-3")}>
              <div className={cx("footer_title")}>Site Map</div>
              <div className={cx("list_link")}>
                <GoArrowRight fontSize={20} color='#e01a22' />
                <Link to="/">Home</Link>
                <div className={cx("line")}></div>
              </div>
              <div className={cx("list_link")}>
                <GoArrowRight fontSize={20} color='#e01a22' />
                <Link to="/club/:name/:id">Our team</Link>
                <div className={cx("line")}></div>
              </div>
              <div className={cx("list_link")}>
                <GoArrowRight fontSize={20} color='#e01a22' />
                <Link to="/team-table">Team table</Link>
                <div className={cx("line")}></div>
              </div>
              <div className={cx("list_link")}>
                <GoArrowRight fontSize={20} color='#e01a22' />
                <Link to="/about">About us</Link>
                <div className={cx("line")}></div>
              </div>
              <div className={cx("list_link")}>
                <GoArrowRight fontSize={20} color='#e01a22' />
                <Link to="/contact">Contact us</Link>
                <div className={cx("line")}></div>
              </div>
            </div>
            <div className={cx("col-lg-3")}>
              <div className={cx("footer_title")}>Recent Post</div>
              <div className={cx("desc row")}>
                <div className={cx("col-lg-3 anh")}>
                  <img src='/images/footer-post.jpg' width={60} height={60} />
                </div>
                <div className='desc_text col-lg-9'>
                  <p>Lorem ipsum dolor amet, conse-ctetur adipiscing.</p>
                </div>
              </div>
              <div className={cx("line")}></div>
              <div className={cx("desc row")}>
                <div className={cx("col-lg-3 anh")}>
                  <img src='/images/footer-post-2.jpg' width={60} height={60} />
                </div>
                <div className='desc_text col-lg-9'>
                  <p>Lorem ipsum dolor amet, conse-ctetur adipiscing.</p>
                </div>
              </div>
              <div className={cx("line")}></div>
              <div className={cx("desc row")}>
                <div className={cx("col-lg-3 anh")}>
                  <img src='/images/footer-post.jpg' width={60} height={60} />
                </div>
                <div className='desc_text col-lg-9'>
                  <p>Lorem ipsum dolor amet, conse-ctetur adipiscing.</p>
                </div>
              </div>
            </div>
            <div className={cx("col-lg-3")}>
              <div className={cx("footer_title")}>Connect With Us</div>
              <p>Follow us to stay in the loop on what’s Sed ut perspiciatis unde omnis iste natus error sit Sed ut perspiciatis unde omnis</p>
              <div className={cx("footer_icon row")}>
                <div className={cx("footer_icon_item")}>
                  <div className={cx("item")}>
                    <FaFacebookF fontSize={20} color='#e01a22' />
                  </div>
                </div>
                <div className={cx("footer_icon_item")}>
                  <div className={cx("item")}>
                    <BsYoutube fontSize={20} color='#e01a22' />
                  </div>
                </div>
                <div className={cx("footer_icon_item")}>
                  <div className={cx("item")}>
                    <BsInstagram fontSize={20} color='#e01a22' />
                  </div>
                </div>
                <div className={cx("footer_icon_item")}>
                  <div className={cx("item")}>
                    <BsTwitter fontSize={20} color='#e01a22' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className={cx("copyright")}>
        <p>Copyright © 2023. Made with from Bkap</p>
      </div>
    </>
  );
}

export default Footer;