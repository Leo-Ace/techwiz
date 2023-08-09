import React from 'react';
import classNames from 'classnames/bind';
import styles from './home.module.css';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Home() {
  return (
    <>
      <main className={cx("homecomponent")}>
        <div className={cx("home-component")}>
          <div className={cx("banner-img")}>
            <img src='/images/banner.png' alt='Banner' className={cx("w-100")} />
          </div>
          <div className={cx("container")}>
            <div className={cx("bcd")}>
              <nav className={cx('py-2')}>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">All</a>
                  <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Direc</a>
                  <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Sắp diễn ra</a>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
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
                            <Link to={"/"} className={cx("text-decoration-none text-white")}>Detail</Link>
                          </div>
                        </div>
                      </div>


                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
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
                            <Link to={"/"} className={cx("text-decoration-none text-white")}>Detail</Link>
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
                            <Link to={"/"} className={cx("text-decoration-none text-white")}>Detail</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
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
                            <Link to={"/"} className={cx("text-decoration-none text-white")}>Detail</Link>
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
                            <Link to={"/"} className={cx("text-decoration-none text-white")}>Detail</Link>
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
                            <Link to={"/"} className={cx("text-decoration-none text-white")}>Detail</Link>
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
                            <Link to={"/"} className={cx("text-decoration-none text-white")}>Detail</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1>Top cầu thủ</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;