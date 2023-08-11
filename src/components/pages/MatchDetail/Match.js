import React from 'react';
import classNames from 'classnames/bind';
import styles from './Match.css';
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
function Match() {
  return (
    <div className={cx("match")} >
      <div className={cx("time_match")} >
        <div className={cx("container ")} >
          <div className={cx("text-center")}>
            <h2>Trực tiếp trận đấu Real Madrid và Manchester Ciy</h2>
          </div>
          <div className={cx("row mb-2")} >
            <div className={cx("col-lg-6")}>
              <div className={cx("match_left")}>
                <div className={cx("name")} >
                  <a href="">Real Madrid</a>
                </div>
                <div className={cx("logo")}>
                  <img width="91px" src="/images/match/logo_real.png" alt="Real Madrid" />
                </div>
              </div>

            </div>
            <div className={cx("col-lg-6")}>
              <div className={cx("match_right")}>
                <div className={cx("logo")}>
                  <img width="91px" src="/images/match/logo_mc.png" alt="Real Madrid" />
                </div>
                <div className={cx("name")} >
                  <a href="">Manchester City</a>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("text-center")}>
            <p className="blv">BLV: Giàng A Táo</p>
            <p className="time">00:00 11/08/2023</p>
          </div>
        </div>
      </div>
      <div className={cx("video m-5")}>
        <div className={cx("container")}>
          <div className={cx("text-center")}>
            <iframe className={cx("w-100")} src="https://www.youtube.com/embed/9qwRV00skO8?si=sbjPMKPrsO8ML1OL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div className={cx("comment pb-5")}>
        <div className={cx("container mt-5")}>
          <div className={cx("d-flex comment-bd row")}>
            <div className={cx("d-flex flex-column col-lg-12")}>
              <div className={cx("coment-bottom bg-white p-2 px-4")}>
                <div className={cx("d-flex flex-row add-comment-section mt-4 mb-4")}>
                  <img className={cx("img-fluid img-responsive rounded-circle mr-2")} src="/images/match/avatar.jpg" width="38" />
                  <input type="text" className={cx("form-control mr-3")} placeholder="Add comment" />
                  <button className="btn btn-primary" type="button" >Comment</button>
                </div>
                <div
                  className={cx("commented-section mt-2")}>
                  <div className={cx("d-flex flex-row align-items-center commented-user")}>
                    <img class={("img-fluid img-responsive rounded-circle mr-2")} src="/images/match/avatar.jpg" width="38" />
                    <h5 className={cx("mr-2")}>Corey oates</h5>
                    <span className={cx("dot mb-1")}></span>
                    <span className={cx("mb-1 ml-2")}>4 hours ago</span>
                  </div>
                  <div className={cx("comment-text-sm")}>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                  </div>
                  <div className={cx("reply-section")}>
                    <div className={cx("d-flex flex-row align-items-center voting-icons")}>
                      <i className={cx("fa fa-sort-up fa-2x mt-3 hit-voting")}></i>
                      <i className={cx("fa fa-sort-down fa-2x mb-3 hit-voting")}></i>
                      <span className={cx("ml-2")}>10</span>
                      <span className={cx("dot ml-2")}></span>
                      <h6 className={cx("ml-2 mt-1")}>Reply</h6>
                    </div>
                  </div>
                </div>
                <div className={cx("commented-section mt-2")}>
                  <div className={cx("d-flex flex-row align-items-center commented-user")}>
                    <img class={("img-fluid img-responsive rounded-circle mr-2")} src="/images/match/avatar.jpg" width="38" />
                    <h5 className={cx("mr-2")}>Samoya Johns</h5>
                    <span className={cx("dot mb-1")}></span>
                    <span className={cx("mb-1 ml-2")}>5 hours ago</span>
                  </div>
                  <div className={cx("comment-text-sm")}>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</span></div>
                  <div className={cx("reply-section")}>
                    <div className={cx("d-flex flex-row align-items-center voting-icons")}>
                      <i className={cx("fa fa-sort-up fa-2x mt-3 hit-voting")}></i>
                      <i className={cx("fa fa-sort-down fa-2x mb-3 hit-voting")}></i>
                      <span className={cx("ml-2")}>15</span><span className={cx("dot ml-2")}></span>
                      <h6 className={cx("ml-2 mt-1")}>Reply</h6>
                    </div>
                  </div>
                </div>
                <div className={cx("commented-section mt-2")}>
                  <div className={cx("d-flex flex-row align-items-center commented-user")}>
                    <img class={("img-fluid img-responsive rounded-circle mr-2")} src="/images/match/avatar.jpg" width="38" />
                    <h5 className={cx("mr-2")}>Makhaya andrew</h5>
                    <span className={cx("dot mb-1")}></span>
                    <span className={cx("mb-1 ml-2")}>10 hours ago</span>
                  </div>
                  <div className={cx("comment-text-sm")}>
                    <span>Nunc sed id semper risus in hendrerit gravida rutrum. Non odio euismod lacinia at quis risus sed. Commodo ullamcorper a lacus vestibulum sed arcu non odio euismod. Enim facilisis gravida neque convallis a. In mollis nunc sed id. Adipiscing elit pellentesque habitant morbi tristique senectus et netus. Ultrices mi tempus imperdiet nulla malesuada pellentesque.</span>
                  </div>
                  <div
                    className={cx("reply-section")}>
                    <div className={cx("d-flex flex-row align-items-center voting-icons")}>
                      <i className={cx("fa fa-sort-up fa-2x mt-3 hit-voting")}></i>
                      <i className={cx("fa fa-sort-down fa-2x mb-3 hit-voting")}></i>
                      <span className={cx("ml-2")}>25</span>
                      <span className={cx("dot ml-2")}></span>
                      <h6 className={cx("ml-2 mt-1")}>Reply</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("container")}>
          <div className={cx("match_text pb-3")}>
            <h4>Một số trận đấu khác</h4>
          </div>
          <div className={cx("row")}>
            <div className={cx("col-lg-6")}>
              <div className={cx("boder-colum", "pt-2")}>
                <div className={cx("d-flex pb-2", "content")}>
                  <div
                    className={cx(
                      "col-4 d-flex flex-column justify-content-center"
                    )}
                  >
                    <img
                      className={cx("w-50 m-auto d-block")}
                      src="/images/team1.jpg"
                    />
                    <div
                      className={cx(
                        "text-content text-center text-light"
                      )}
                    >
                      Tigres Zipaquira
                    </div>
                  </div>
                  <div className={cx("col-4")}>
                    <div
                      className={cx(
                        "col-12 mt-4 p-1 text-center text-light",
                        "score"
                      )}
                    >
                      Trực tiếp
                    </div>
                    <div
                      className={cx(
                        "text-content text-center text-light"
                      )}
                    >
                      2 - 2
                    </div>
                  </div>
                  <div
                    className={cx(
                      "col-4 d-flex flex-column justify-content-center"
                    )}
                  >
                    <img
                      className={cx("w-50 m-auto d-block")}
                      src="/images/team1.jpg"
                    />
                    <div
                      className={cx(
                        "text-content text-center text-light"
                      )}
                    >
                      Tigres Zipaquira
                    </div>
                  </div>
                </div>
                <div
                  className={cx(
                    "d-flex text-light justify-content-between align-items-center"
                  )}
                >
                  <div className="comment d-flex h-100 align-items-center">
                    <div
                      className={cx(
                        "text-comment",
                        "py-1 px-2 text-center"
                      )}
                    >
                      Captain
                    </div>
                    <div
                      className={cx(
                        "text-comment",
                        "py-1 px-2 text-center"
                      )}
                    >
                      Captain
                    </div>
                    <div
                      className={cx(
                        "text-comment",
                        "py-1 px-2 text-center"
                      )}
                    >
                      Captain
                    </div>
                  </div>
                  <div
                    className={cx(
                      "text-comment",
                      "py-1 px-2 text-center"
                    )}
                  >
                    <Link
                      to={"/"}
                      className={cx("text-decoration-none text-white")}
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("col-lg-6")}>
              <div className={cx("boder-colum", "pt-2")}>
                <div className={cx("d-flex pb-2", "content")}>
                  <div
                    className={cx(
                      "col-4 d-flex flex-column justify-content-center"
                    )}
                  >
                    <img
                      className={cx("w-50 m-auto d-block")}
                      src="/images/team1.jpg"
                    />
                    <div
                      className={cx(
                        "text-content text-center text-light"
                      )}
                    >
                      Tigres Zipaquira
                    </div>
                  </div>
                  <div className={cx("col-4")}>
                    <div
                      className={cx(
                        "col-12 mt-4 p-1 text-center text-light",
                        "score"
                      )}
                    >
                      Trực tiếp
                    </div>
                    <div
                      className={cx(
                        "text-content text-center text-light"
                      )}
                    >
                      2 - 2
                    </div>
                  </div>
                  <div
                    className={cx(
                      "col-4 d-flex flex-column justify-content-center"
                    )}
                  >
                    <img
                      className={cx("w-50 m-auto d-block")}
                      src="/images/team1.jpg"
                    />
                    <div
                      className={cx(
                        "text-content text-center text-light"
                      )}
                    >
                      Tigres Zipaquira
                    </div>
                  </div>
                </div>
                <div
                  className={cx(
                    "d-flex text-light justify-content-between align-items-center"
                  )}
                >
                  <div className="comment d-flex h-100 align-items-center">
                    <div
                      className={cx(
                        "text-comment",
                        "py-1 px-2 text-center"
                      )}
                    >
                      Captain
                    </div>
                    <div
                      className={cx(
                        "text-comment",
                        "py-1 px-2 text-center"
                      )}
                    >
                      Captain
                    </div>
                    <div
                      className={cx(
                        "text-comment",
                        "py-1 px-2 text-center"
                      )}
                    >
                      Captain
                    </div>
                  </div>
                  <div
                    className={cx(
                      "text-comment",
                      "py-1 px-2 text-center"
                    )}
                  >
                    <Link
                      to={"/"}
                      className={cx("text-decoration-none text-white")}
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("col-lg-6")}>
              <div className={cx("boder-colum", "pt-2")}>
                <div className={cx("d-flex pb-2", "content")}>
                  <div
                    className={cx(
                      "col-4 d-flex flex-column justify-content-center"
                    )}
                  >
                    <img
                      className={cx("w-50 m-auto d-block")}
                      src="/images/team1.jpg"
                    />
                    <div
                      className={cx(
                        "text-content text-center text-light"
                      )}
                    >
                      Tigres Zipaquira
                    </div>
                  </div>
                  <div className={cx("col-4")}>
                    <div
                      className={cx(
                        "col-12 mt-4 p-1 text-center text-light",
                        "score"
                      )}
                    >
                      Trực tiếp
                    </div>
                    <div
                      className={cx(
                        "text-content text-center text-light"
                      )}
                    >
                      2 - 2
                    </div>
                  </div>
                  <div
                    className={cx(
                      "col-4 d-flex flex-column justify-content-center"
                    )}
                  >
                    <img
                      className={cx("w-50 m-auto d-block")}
                      src="/images/team1.jpg"
                    />
                    <div
                      className={cx(
                        "text-content text-center text-light"
                      )}
                    >
                      Tigres Zipaquira
                    </div>
                  </div>
                </div>
                <div
                  className={cx(
                    "d-flex text-light justify-content-between align-items-center"
                  )}
                >
                  <div className="comment d-flex h-100 align-items-center">
                    <div
                      className={cx(
                        "text-comment",
                        "py-1 px-2 text-center"
                      )}
                    >
                      Captain
                    </div>
                    <div
                      className={cx(
                        "text-comment",
                        "py-1 px-2 text-center"
                      )}
                    >
                      Captain
                    </div>
                    <div
                      className={cx(
                        "text-comment",
                        "py-1 px-2 text-center"
                      )}
                    >
                      Captain
                    </div>
                  </div>
                  <div
                    className={cx(
                      "text-comment",
                      "py-1 px-2 text-center"
                    )}
                  >
                    <Link
                      to={"/"}
                      className={cx("text-decoration-none text-white")}
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("col-lg-6")}>
              <div className={cx("boder-colum", "pt-2")}>
                <div className={cx("d-flex pb-2", "content")}>
                  <div
                    className={cx(
                      "col-4 d-flex flex-column justify-content-center"
                    )}
                  >
                    <img
                      className={cx("w-50 m-auto d-block")}
                      src="/images/team1.jpg"
                    />
                    <div
                      className={cx(
                        "text-content text-center text-light"
                      )}
                    >
                      Tigres Zipaquira
                    </div>
                  </div>
                  <div className={cx("col-4")}>
                    <div
                      className={cx(
                        "col-12 mt-4 p-1 text-center text-light",
                        "score"
                      )}
                    >
                      Trực tiếp
                    </div>
                    <div
                      className={cx(
                        "text-content text-center text-light"
                      )}
                    >
                      2 - 2
                    </div>
                  </div>
                  <div
                    className={cx(
                      "col-4 d-flex flex-column justify-content-center"
                    )}
                  >
                    <img
                      className={cx("w-50 m-auto d-block")}
                      src="/images/team1.jpg"
                    />
                    <div
                      className={cx(
                        "text-content text-center text-light"
                      )}
                    >
                      Tigres Zipaquira
                    </div>
                  </div>
                </div>
                <div
                  className={cx(
                    "d-flex text-light justify-content-between align-items-center"
                  )}
                >
                  <div className="comment d-flex h-100 align-items-center">
                    <div
                      className={cx(
                        "text-comment",
                        "py-1 px-2 text-center"
                      )}
                    >
                      Captain
                    </div>
                    <div
                      className={cx(
                        "text-comment",
                        "py-1 px-2 text-center"
                      )}
                    >
                      Captain
                    </div>
                    <div
                      className={cx(
                        "text-comment",
                        "py-1 px-2 text-center"
                      )}
                    >
                      Captain
                    </div>
                  </div>
                  <div
                    className={cx(
                      "text-comment",
                      "py-1 px-2 text-center"
                    )}
                  >
                    <Link
                      to={"/"}
                      className={cx("text-decoration-none text-white")}
                    >
                      Detail
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Match;