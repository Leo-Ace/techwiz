import React from 'react';
import classNames from 'classnames/bind';
import styles from './home.module.css';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Home(props) {
  return (
    <>
      <main className={cx("abc")}>
        <div className={cx("home-component")}>
          <div className={cx("container")}>
            <div className={cx("bcd")}>
              <div className={cx("d-flex ")}>
                <div className={cx("mr-3 p-2")} >
                  <Link className={cx("text-light text-decoration-none")}>Tất cả</Link>
                </div>
                <div className={cx("mr-3 p-2")} >
                  <Link className={cx("text-light text-decoration-none")}>Trực tiếp</Link>
                </div>
                <div className={cx("mr-3 p-2")} >
                  <Link className={cx("text-light text-decoration-none")}>Cầu thủ</Link>
                </div>
              </div>
              <div className={cx("row m-0")}>
                <div className={cx("col-md-6 px-0 px-md-2")}>
                  <div className={cx("boder-colum")}>
                    <div className={cx("d-flex pb-2", "content")}>
                      <div className={cx("col-4")}>
                        <img className={cx("ml-3")} src='/images/team1.jpg' />
                        <div className={cx("text-content text-center text-light")}>
                          Tigres Zipaquira
                        </div>
                      </div>
                      <div className={cx("col-4")}>
                        <div className={cx("col-12 mt-4 p-1 text-center text-light", "score")}>
                          Trực tiếp
                        </div>
                        <div className={cx("text-content text-center text-light")}>
                          2 - 2
                        </div>
                      </div>
                      <div className={cx("col-4")}>
                        <img className={cx("ml-3")} src='/images/team1.jpg' />
                        <div className={cx("text-content text-center text-light")}>
                          Tigres Zipaquira
                        </div>
                      </div>
                    </div>
                    <div className={cx("d-flex text-light justify-content-between")}>
                      <div className='comment d-flex'>
                        <div className={cx("text-comment")}>Captain</div>
                        <div className={cx("text-comment")}>Captain</div>
                        <div className={cx("text-comment")}>Captain</div>
                      </div>
                      <div className={cx("text-comment")}>
                        Xem ngay
                      </div>
                    </div>
                  </div>


                </div>
                <div className={cx("col-md-6 px-0 px-md-2")}>
                  <div className={cx("boder-colum")}>
                    <div className={cx("d-flex pb-2", "content")}>
                      <div className={cx("col-4")}>
                        <img className={cx("ml-3")} src='/images/team1.jpg' />
                        <div className={cx("text-content text-center text-light")}>
                          Tigres Zipaquira
                        </div>
                      </div>
                      <div className={cx("col-4")}>
                        <div className={cx("col-12 mt-4 p-1 text-center text-light", "score")}>
                          Trực tiếp
                        </div>
                        <div className={cx("text-content text-center text-light")}>
                          2 - 2
                        </div>
                      </div>
                      <div className={cx("col-4")}>
                        <img className={cx("ml-3")} src='/images/team1.jpg' />
                        <div className={cx("text-content text-center text-light")}>
                          Tigres Zipaquira
                        </div>
                      </div>
                    </div>
                    <div className={cx("d-flex text-light justify-content-between")}>
                      <div className='comment d-flex'>
                        <div className={cx("text-comment")}>Captain</div>
                        <div className={cx("text-comment")}>Captain</div>
                        <div className={cx("text-comment")}>Captain</div>
                      </div>
                      <div className={cx("text-comment")}>
                        Xem ngay
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;