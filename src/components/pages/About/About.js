import React from 'react';
import classNames from 'classnames/bind';
import styles from './About.module.css';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
const cx = classNames.bind(styles);
function About(props) {
    return (
        <>
            <div className={cx("about")}>
                <p>About Us</p>
                <div className={cx("back")}>
                    <div className={cx("icon_home")}>
                        <Link to="/"><AiOutlineHome fontSize={20} color='#e01a22' /></Link>
                    </div>
                    <div className={cx("home")}>
                        <Link to="/">Home</Link>
                    </div>
                    <p>/ About</p>
                </div>
            </div>
            <div className={cx("container")}>
                <div className={cx("paragraph1 my-5 row")}>
                    <div className={cx("col-lg-6")}>
                        <div className={cx("title")}>
                            <div className={cx("title_text")}>
                                <div className={cx("title_black")}>
                                    <h4>Welcome To</h4>
                                </div>
                                <div className={cx("title_red")}>
                                    <h4>Our Club</h4>
                                </div>
                            </div>
                            <div className={cx("title_line")}>
                                <div className={cx("line_black")}></div>
                                <div className={cx("line_red")}></div>
                            </div>
                        </div>
                        <div className={cx("text my-4")}>
                            <p>Voluptate illum dolore ita ipsum, quid deserunt singulis, labore admodum ita multos malis ea nam nam tamen fore amet. Vidisse quid incurreret ut ut possumus transferrem si ita labore dolor si appellat, aut dolore doctrina. Commodo dolor esse in magna, a multos senseri</p>
                            <p>Voluptate illum dolore ita ipsum, quid deserunt singulis, labore admodum ita multos malis ea nam nam tamen fore amet. Vidisse quid incurreret ut ut possumus transferrem si ita labore dolor si appellat, aut dolore doctrina. Commodo dolor esse in magna, a multos senseri</p>
                        </div>
                    </div>
                    <div className={cx("col-lg-6")}>
                        <div className={cx("image")}>
                            <img src="/images/ronaldo.jpg" />
                        </div>
                    </div>
                </div>
                <div className={cx("paragraph2")}>
                    <div className={cx("title my-4")}>
                        <div className={cx("title_text")}>
                            <div className={cx("title_black")}>
                                <h4>Something To</h4>
                            </div>
                            <div className={cx("title_red")}>
                                <h4>Tell You</h4>
                            </div>
                        </div>
                        <div className={cx("title_line")}>
                            <div className={cx("line_black")}></div>
                            <div className={cx("line_red")}></div>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit. Nam sed ligula odio. Sed id metus felis. Ut pretium nisl non justo condimentum id tincidunt nunc faucibus. Ut neque eros, pulvinar eu blandit quis, lacinia nec ipsum. Etiam vel orci ipsum. Sed eget velit ipsum. Duis in tortor scelerisque felis .Ut pretium nisl non justo condimentum id tincidunt nunc faucibus. Ut neque eros, pulvinar eu blandit quis, lacinia nec ipsum. Etiam vel orci ipsum. Sed eget velit ipsum. Duis in tortor scelerisque felis.Etiam vel orci ipsum. Sed eget velit ipsum. Duis in tortor scelerisque felis .Ut pretium nisl non justo condimentum.</p>
                    <p>Voluptate illum dolore ita ipsum, quid deserunt singulis, labore admodum ita multos malis ea nam nam tamen fore amet. Vidisse quid incurreret ut ut possumus transferrem si ita labore dolor si appellat, aut dolore doctrina. Commodo dolor labore dolor si appellat, aut dolore doctrina. Commodo dolor esse in magna, a a multos senserit nam si aliqua iis multos.</p>
                </div>
                <div className={cx("paragraph3 my-5")}>
                    <div className={cx("title")}>
                        <div className={cx("title_text")}>
                            <div className={cx("title_black")}>
                                <h4>Club</h4>
                            </div>
                            <div className={cx("title_red")}>
                                <h4>History</h4>
                            </div>
                        </div>
                        <div className={cx("title_line")}>
                            <div className={cx("line_black")}></div>
                            <div className={cx("line_red")}></div>
                        </div>
                    </div>
                    <div className={cx("list row")}>
                        <div className={cx("col-lg-4 list_item")}>
                            <div className={cx("item")}>2012, Uefa Champions League</div>
                            <div className={cx("item")}>2010, Uefa Champions League</div>
                            <div className={cx("item")}>2008, Uefa Champions League</div>
                            <div className={cx("item")}>2006, Uefa Champions League</div>
                        </div>
                        <div className={cx("col-lg-8 blogs")}>
                            <div className={cx("blog_title")}>
                                <h5>Fifa 2012, Uefa Champions League</h5>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a metus pellentesque, scelerisque ex sed, volutpat nisi. Cras sit amet felis nulla. Cras mi ex, mattis vel molestie sed. Lorem</p>
                            <div className={cx("anh")}>
                                <img src='/images/messi.jpg' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;