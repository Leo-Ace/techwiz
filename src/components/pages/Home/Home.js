import React from "react";
import classNames from "classnames/bind";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import { PiSoccerBallFill } from "react-icons/pi"
import { ImTable2 } from "react-icons/im"
import { RiTeamFill } from "react-icons/ri"
import { MdSecurity } from "react-icons/md"


const cx = classNames.bind(styles); 

function Home() {
  return (
    <>
      <main className={cx("homecomponent")}>
        <div className={cx("home-component")}>
          <div>
          <div id="carouselId" className={cx("carousel slide")} data-ride="carousel">
              <ol className={cx("carousel-indicators")}>
                <li data-target="#carouselId" data-slide-to="0" className="active"></li>
                <li data-target="#carouselId" data-slide-to="1"></li>
                <li data-target="#carouselId" data-slide-to="2"></li>
                <li data-target="#carouselId" data-slide-to="3"></li>
                <li data-target="#carouselId" data-slide-to="4"></li>
              </ol>
              <div className={cx("carousel-inner")} role="listbox">
                <div className={cx("carousel-item active")}>
                  <img src="/images/cauthu-01.jpg" alt="First slide" className={cx("w-100")} />
                  <div className={cx("carousel-caption d-none d-md-block")}>
                    
                  </div>
                </div>
                <div className={cx("carousel-item")}>
                  <img src="/images/cauthu-02.jpg" alt="Second slide" className={cx("w-100")} />
                  
                </div>
                <div className={cx("carousel-item")}>
                  <img src="/images/cauthu-03.jpg" alt="Third slide" className={cx("w-100")} />
                  <div className={cx("carousel-caption d-none d-md-block")}>
                    
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="/images/cauthu-04.jpg" alt="Third slide" className={cx("w-100")} />
                  <div className={cx("carousel-caption d-none d-md-block")}>
                    
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="/images/cauthu-05.jpg" alt="Third slide" className={cx("w-100")} />
                  <div className="carousel-caption d-none d-md-block">
                    
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className={cx("container")}>
            <div className={cx("bcd", "my-2")}>
              <nav className={cx("py-2")}>
                <div className={cx("nav nav-tabs")} id="nav-tab" role="tablist">
                  <a
                    className={cx("nav-item nav-link active")}
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    All
                  </a>
                  <a
                    className={cx("nav-item nav-link")}
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Direc
                  </a>
                  <a
                    className={cx("nav-item nav-link")}
                    id="nav-contact-tab"
                    data-toggle="tab"
                    href="#nav-contact"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    Sắp diễn ra
                  </a>
                </div>
              </nav>
              <div className={cx("tab-content")} id="nav-tabContent">
                <div
                  className={cx("tab-pane", "fade", "show", "active")}
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className={cx("row m-0")}>
                    <div className={cx("col-md-6 px-0 px-md-2")}>
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
                            Peter Drury
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("col-md-3", "bg-time")}>
                    <h6 className={cx("text-center my-3")}>Premier League</h6>
                    <div className="time">
                      <h1 className={cx("text-center")}>17:00</h1>
                    </div>
                    <div className={cx("detail")}>
                      <div className={cx("text-center", "text-detail")}><Link className={cx("text-center", "text-decoration-none text-white")}>View</Link></div>
                    </div>
                  </div>
                </div>
                <div className={cx("row m-0 mb-3")}>
                  <div className={cx("col-md-9 m-0 p-0 ")}>
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
                              "col-12 mt-5 p-1 text-center text-light",
                              "score"
                            )}
                          >
                            Live
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
                          " text-light justify-content-between align-items-center"
                        )}
                      >
                        <div className="comment h-100 align-items-center">
                          <div
                            className={cx(
                              "text-comment",
                              "py-1 px-2 text-center"
                            )}
                          >
                            Peter Drury
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("col-md-3", "bg-time")}>
                    <h6 className={cx("text-center my-3")}>Premier League</h6>
                    <div className="time">
                      <h1 className={cx("text-center")}>17:00</h1>
                    </div>
                    <div className={cx("detail")}>
                      <div className={cx("text-center", "text-detail")}><Link className={cx("text-center", "text-decoration-none text-white")}>View</Link></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("off")}>
                <div className={cx("pb-2","text")}>The upcoming match</div>
                <div className={cx("row m-0 mb-3")}>
                  <div className={cx("col-md-9 m-0 p-0 ")}>
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
                              "col-12 mt-5 p-1 text-center text-light",
                              "score"
                            )}
                          >
                            Live
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
                          " text-light justify-content-between align-items-center"
                        )}
                      >
                        <div className="comment h-100 align-items-center">
                          <div
                            className={cx(
                              "text-comment",
                              "py-1 px-2 text-center"
                            )}
                          >
                            Peter Drury
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("col-md-3", "bg-time")}>
                    <h6 className={cx("text-center my-3")}>Premier League</h6>
                    <div className="time">
                      <h1 className={cx("text-center")}>17:00</h1>
                    </div>
                    <div className={cx("detail")}>
                      <div className={cx("text-center", "text-detail")}><Link className={cx("text-center", "text-decoration-none text-white")}>View</Link></div>
                    </div>
                  </div>
                </div>
                <div className={cx("row m-0 mb-3")}>
                  <div className={cx("col-md-9 m-0 p-0 ")}>
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
                              "col-12 mt-5 p-1 text-center text-light",
                              "score"
                            )}
                          >
                            Live
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
                          " text-light justify-content-between align-items-center"
                        )}
                      >
                        <div className="comment h-100 align-items-center">
                          <div
                            className={cx(
                              "text-comment",
                              "py-1 px-2 text-center"
                            )}
                          >
                            Peter Drury
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("col-md-3", "bg-time")}>
                    <h6 className={cx("text-center my-3")}>Premier League</h6>
                    <div className="time">
                      <h1 className={cx("text-center")}>17:00</h1>
                    </div>
                    <div className={cx("detail")}>
                      <div className={cx("text-center", "text-detail")}><Link className={cx("text-center", "text-decoration-none text-white")}>View</Link></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("pt-5")}>
              <div className={cx("px-5", "bg-pd")} >
                <div className={cx("row")}>
                  <div className={cx("col-md-6 col-xl-3")}>
                    <div className={cx("item-feature dark text-center text-white")}>
                      <i className="fa fa-cogs"></i>
                      <h3>Host selection</h3>
                      <p>The bidding procedure to host the 2018 and 2022 FIFA World Cups began in January 2009, and national associations.</p>
                      <a href="#" className={cx("text-decoration-none text-white", "hover-effect")}>Learn More</a>
                    </div>
                  </div>

                  <div className={cx("col-md-6 col-xl-3")}>
                    <div className={cx("item-feature dark text-center text-white")}>
                      <i className="fa fa-users"></i>
                      <h3>Teams</h3>
                      <p>For the first time in the history of the FIFA World Cup, all eligible nations – the 209 FIFA member associations.</p>
                      <a href="#" className={cx("text-decoration-none text-white", "hover-effect")}>Learn More</a>
                    </div>
                  </div>

                  <div className={cx("col-md-6 col-xl-3")}>
                    <div className={cx("item-feature dark text-center text-white")}>
                      <i className="fa fa-calendar"></i>
                      <h3>Venues</h3>
                      <p>The final choice of host cities was announced on 29 September 2012. The number of cities was further reduced to 1.</p>
                      <a href="#" className={cx("text-decoration-none text-white", "hover-effect")}>Learn More</a>
                    </div>
                  </div>

                  <div className={cx("col-md-6 col-xl-3")}>
                    <div className={cx("item-feature dark text-center text-white")}>
                      <i className="fa fa-soccer-ball-o"></i>
                      <h3>Marketing</h3>
                      <p>The tournament logo was unveiled on 28 October 2014 by cosmonauts at the International Space Station.</p>
                      <a href="#" className={cx("text-decoration-none text-white", "hover-effect")}>Learn More</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className={cx("row pt-5")}>
              <div className={cx("col-md-4")}>
                <a href="" className={cx("text-decoration-none")}>
                  <div className={cx("card", "mb-4")}>
                    <div className={cx("card-body", "text-center", "zoom-effect")}>
                      <PiSoccerBallFill className={cx("size")} />
                      <h4 className={cx("card-title")}>Soccer Team</h4>
                      <p className={cx("card-text")}>Best Sports Features</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className={cx("col-md-4")}>
                <a href="" className={cx("text-decoration-none")}>
                  <div className={cx("card", "mb-4", "phong")}>
                    <div className={cx("card-body", "text-center", "zoom-effect")}>
                      <PiSoccerBallFill className={cx("size")} />
                      <h4 className={cx("card-title")}>Club Features</h4>
                      <p className={cx("card-text")}>Best Sports Features</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className={cx("col-md-4")}>
                <a href="services.html" className={cx("text-decoration-none")}>
                  <div className={cx("card", "mb-4")}>
                    <div className={cx("card-body", "text-center", "zoom-effect")}>
                      <PiSoccerBallFill className={cx("size")} />
                      <h4 className={cx("card-title")}>Technical Body</h4>
                      <p className={cx("card-text")}>Best Sports Features</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>
          <div>
            <img src="/images/banner3.jpg" className={cx("w-100")} />
          </div>

        </div>
      </main>
    </>
  );
}

export default Home;
