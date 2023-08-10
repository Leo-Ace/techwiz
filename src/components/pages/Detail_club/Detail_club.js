import React from 'react';
import classNames from 'classnames/bind';
import styles from './detail_club.module.css';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Detail_club(props) {
    return (
        <div>
            <div className={cx("name_club")}>
                <p>Manchester City</p>
            </div>
            <div className={cx("banner_club")}>
                <img className={cx("w-100")} src='/images/banner_club.webp' />
            </div>
            <div className={cx("container")}>
                <div className={cx("desc_club row my-5")}>
                    <div className={cx("coach col-lg-3 text-center")}>
                        <img src='/images/couch.jpg' width={200} />
                        <div className={cx('name_coach')}>
                            <h5>Pep Guardiola</h5>
                        </div>
                    </div>
                    <div className={cx("desc_text col-lg-9")}>
                        <h2>OUR HISTORY</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam consectetur consequatur, officiis distinctio explicabo voluptatum ea impedit dolorem. Tenetur eum sint adipisci modi, quos natus consequuntur exercitationem aliquid nesciunt explicabo.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam consectetur consequatur, officiis distinctio explicabo voluptatum ea impedit dolorem. Tenetur eum sint adipisci modi, quos natus consequuntur exercitationem aliquid nesciunt explicabo.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam consectetur consequatur, officiis distinctio explicabo voluptatum ea impedit dolorem. Tenetur eum sint adipisci modi, quos natus consequuntur exercitationem aliquid nesciunt explicabo.</p>
                    </div>
                </div>
                <div className={cx("honours")}>
                    <h2 className={cx("tieu_de")}>CLUB HONOURS</h2>
                    <p className={cx("list_honours")}>Football League/Premier League Champions</p>
                    <p className={cx("list_honours")}>FA Women's Super League Champions</p>
                    <p className={cx("list_honours")}>Football League/Premier League Runners-Up</p>
                    <p className={cx("list_honours")}>FA Women's Super League Runners-Up</p>
                </div>
                <div className={cx("list_players")}>
                    <div className={cx("title_player")}>
                        <h2 className={cx("tieu_de")}>PLAYERS</h2>
                        <h5>GOALKEEPERS</h5>
                    </div>
                    <div className={cx("player row")}>
                        <div className={cx("col-lg-3")}>
                            <div className={cx("cau_thu")}>
                                <Link to="/">
                                    <div className={cx("img_player")}>
                                        <img src='/images/gk1.webp' />
                                    </div>
                                    <div className={cx("desc_player")}>
                                        <p>SCOTT CARSON</p>
                                    </div>
                                    <div className={cx("flag")}>
                                        <img src='/images/flag1.svg'/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className={cx("col-lg-3")}>
                            <div className={cx("cau_thu")}>
                                <Link to="/">
                                    <div className={cx("img_player")}>
                                        <img src='/images/gk1.webp' />
                                    </div>
                                    <div className={cx("desc_player")}>
                                        <p>SCOTT CARSON</p>
                                    </div>
                                    <div className={cx("flag")}>
                                        <img src='/images/flag1.svg'/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className={cx("col-lg-3")}>
                            <div className={cx("cau_thu")}>
                                <Link to="/">
                                    <div className={cx("img_player")}>
                                        <img src='/images/gk1.webp' />
                                    </div>
                                    <div className={cx("desc_player")}>
                                        <p>SCOTT CARSON</p>
                                    </div>
                                    <div className={cx("flag")}>
                                        <img src='/images/flag1.svg'/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className={cx("col-lg-3")}>
                            <div className={cx("cau_thu")}>
                                <Link to="/">
                                    <div className={cx("img_player")}>
                                        <img src='/images/gk1.webp' />
                                    </div>
                                    <div className={cx("desc_player")}>
                                        <p>SCOTT CARSON</p>
                                    </div>
                                    <div className={cx("flag")}>
                                        <img src='/images/flag1.svg'/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className={cx("col-lg-3")}>
                            <div className={cx("cau_thu")}>
                                <Link to="/">
                                    <div className={cx("img_player")}>
                               
                                        <img src='/images/gk1.webp' />
                                    </div>
                                    <div className={cx("desc_player")}>
                                        <p>SCOTT CARSON</p>
                                    </div>
                                    <div className={cx("flag")}>
                                        <img src='/images/flag1.svg'/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className={cx("col-lg-3")}>
                            <div className={cx("cau_thu")}>
                                <Link to="/">
                                    <div className={cx("img_player")}>
                               
                                        <img src='/images/gk1.webp' />
                                    </div>
                                    <div className={cx("desc_player")}>
                                        <p>SCOTT CARSON</p>
                                    </div>
                                    <div className={cx("flag")}>
                                        <img src='/images/flag1.svg'/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className={cx("col-lg-3")}>
                            <div className={cx("cau_thu")}>
                                <Link to="/">
                                    <div className={cx("img_player")}>
                               
                                        <img src='/images/gk1.webp' />
                                    </div>
                                    <div className={cx("desc_player")}>
                                        <p>SCOTT CARSON</p>
                                    </div>
                                    <div className={cx("flag")}>
                                        <img src='/images/flag1.svg'/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className={cx("col-lg-3")}>
                            <div className={cx("cau_thu")}>
                                <Link to="/">
                                    <div className={cx("img_player")}>
                               
                                        <img src='/images/gk1.webp' />
                                    </div>
                                    <div className={cx("desc_player")}>
                                        <p>SCOTT CARSON</p>
                                    </div>
                                    <div className={cx("flag")}>
                                        <img src='/images/flag1.svg'/>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail_club;