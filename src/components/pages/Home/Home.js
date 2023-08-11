import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import { PiSoccerBallFill } from "react-icons/pi";
import { ImTable2 } from "react-icons/im";
import { RiTeamFill } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
import {
  getAllOrderMatch,
  getOrderMatchByIdMatch,
} from "../../../services/orderMatchService";
import { getAllMatch } from "../../../services/matchServicce";
import { getTeamById } from "../../../services/teamService";

const cx = classNames.bind(styles);

function Home() {
  const [match, setMatch] = useState([]);

  useEffect(() => {
    const [err_match, data_match] = getAllMatch();
    setMatch(data_match);
  }, []);

  const getOrderMatch = (id) => {
    const [err_orderMatch, data_orderMatch] = getOrderMatchByIdMatch(
      Number(id)
    );
    return data_orderMatch;
  };

  const getTeam = (id) => {
    const [err_team, data_team] = getTeamById(Number(id));
    return data_team;
  };

  return (
    <>
      <main className={cx("homecomponent")}>
        <div className={cx("home-component")}>
          <div>
            <div
              id="carouselId"
              className={cx("carousel slide")}
              data-ride="carousel"
            >
              <ol className={cx("carousel-indicators")}>
                <li
                  data-target="#carouselId"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#carouselId" data-slide-to="1"></li>
                <li data-target="#carouselId" data-slide-to="2"></li>
                <li data-target="#carouselId" data-slide-to="3"></li>
                <li data-target="#carouselId" data-slide-to="4"></li>
              </ol>
              <div className={cx("carousel-inner")} role="listbox">
                <div className={cx("carousel-item active")}>
                  <img
                    src="/images/cauthu-01.jpg"
                    alt="First slide"
                    className={cx("w-100")}
                  />
                  <div
                    className={cx("carousel-caption d-none d-md-block")}
                  ></div>
                </div>
                <div className={cx("carousel-item")}>
                  <img
                    src="/images/cauthu-02.jpg"
                    alt="Second slide"
                    className={cx("w-100")}
                  />
                </div>
                <div className={cx("carousel-item")}>
                  <img
                    src="/images/cauthu-03.jpg"
                    alt="Third slide"
                    className={cx("w-100")}
                  />
                  <div
                    className={cx("carousel-caption d-none d-md-block")}
                  ></div>
                </div>
                <div className="carousel-item">
                  <img
                    src="/images/cauthu-04.jpg"
                    alt="Third slide"
                    className={cx("w-100")}
                  />
                  <div
                    className={cx("carousel-caption d-none d-md-block")}
                  ></div>
                </div>
                <div className="carousel-item">
                  <img
                    src="/images/cauthu-05.jpg"
                    alt="Third slide"
                    className={cx("w-100")}
                  />
                  <div className="carousel-caption d-none d-md-block"></div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselId"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselId"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className={cx("container mt-4")}>
            <div className={cx("bcd", "my-2")}>
              <div className={cx("live")}>
                <div className={cx("pb-2 text-uppercase", "text")}>
                  Live match streaming
                </div>
                {match
                  .filter((item) => item.status === 0)
                  .map((elem, index) => (
                    <div key={index} className={cx("row m-0 mb-3")}>
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
                                src={
                                  getTeam(
                                    getOrderMatch(Number(elem.id))[0].id_team
                                  ).thumbnail
                                }
                                alt=""
                              />
                              <div
                                className={cx(
                                  "text-content text-center text-light h5 p-0 m-0"
                                )}
                              >
                                {
                                  getTeam(
                                    getOrderMatch(Number(elem.id))[0].id_team
                                  ).name
                                }
                              </div>
                            </div>
                            <div className={cx("col-4")}>
                              <div
                                className={cx(
                                  "col-12 h5 mt-5 p-1 text-center text-light",
                                  "score"
                                )}
                              >
                                Live
                              </div>
                              <div
                                className={cx(
                                  "text-content text-center text-light h5"
                                )}
                              >
                                0 - 0
                              </div>
                            </div>
                            <div
                              className={cx(
                                "col-4 d-flex flex-column justify-content-center"
                              )}
                            >
                              <img
                                className={cx("w-50 m-auto d-block")}
                                src={
                                  getTeam(
                                    getOrderMatch(Number(elem.id))[1].id_team
                                  ).thumbnail
                                }
                                alt=""
                              />
                              <div
                                className={cx(
                                  "text-content text-center text-light h5 p-0 m-0"
                                )}
                              >
                                {
                                  getTeam(
                                    getOrderMatch(Number(elem.id))[1].id_team
                                  ).name
                                }
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
                                  "py-1 px-2 text-center h5 p-0 m-0"
                                )}
                              >
                                Peter Drury
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={cx(
                          "col-md-3 d-flex align-items-center justify-content-center",
                          "bg-time"
                        )}
                      >
                        <div className={cx("")}>
                          <h6 className={cx("text-center my-3")}>
                            {elem.leagues}
                          </h6>
                          <div className="time">
                            <h1 className={cx("text-center")}>{elem.time}</h1>
                          </div>
                          <div className={cx("detail")}>
                            <div className={cx("text-center", "text-detail")}>
                              <Link
                                to={`/match/${elem.id}`}
                                className={cx(
                                  "text-center",
                                  "text-decoration-none text-white w-100 d-block"
                                )}
                              >
                                View
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div className={cx("off")}>
                <div className={cx("pb-2 text-uppercase", "text")}>
                  The upcoming match
                </div>
                {match
                  .filter((item) => item.status === 1)
                  .map((elem, index) => (
                    <div key={index} className={cx("row m-0 mb-3")}>
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
                                src={
                                  getTeam(
                                    getOrderMatch(Number(elem.id))[0].id_team
                                  ).thumbnail
                                }
                                alt=""
                              />
                              <div
                                className={cx(
                                  "text-content text-center text-light h5 p-0 m-0"
                                )}
                              >
                                {
                                  getTeam(
                                    getOrderMatch(Number(elem.id))[0].id_team
                                  ).name
                                }
                              </div>
                            </div>
                            <div className={cx("col-4")}>
                              <div
                                className={cx(
                                  "col-12 h5 mt-5 p-1 text-center text-light",
                                  "score"
                                )}
                              >
                                Live
                              </div>
                              <div
                                className={cx(
                                  "text-content text-center text-light h5"
                                )}
                              >
                                0 - 0
                              </div>
                            </div>
                            <div
                              className={cx(
                                "col-4 d-flex flex-column justify-content-center"
                              )}
                            >
                              <img
                                className={cx("w-50 m-auto d-block")}
                                src={
                                  getTeam(
                                    getOrderMatch(Number(elem.id))[1].id_team
                                  ).thumbnail
                                }
                                alt=""
                              />
                              <div
                                className={cx(
                                  "text-content text-center text-light h5 p-0 m-0"
                                )}
                              >
                                {
                                  getTeam(
                                    getOrderMatch(Number(elem.id))[1].id_team
                                  ).name
                                }
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
                                  "py-1 px-2 text-center h5 p-0 m-0"
                                )}
                              >
                                Peter Drury
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={cx(
                          "col-md-3 d-flex align-items-center justify-content-center",
                          "bg-time"
                        )}
                      >
                        <div className={cx("")}>
                          <h6 className={cx("text-center my-3")}>
                            {elem.leagues}
                          </h6>
                          <div className="time">
                            <h1 className={cx("text-center")}>{elem.time}</h1>
                          </div>
                          <div className={cx("detail")}>
                            <div className={cx("text-center", "text-detail")}>
                              <Link
                                to={`/match/${elem.id}`}
                                className={cx(
                                  "text-center",
                                  "text-decoration-none text-white w-100 d-block"
                                )}
                              >
                                View
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div className={cx("pt-5")}>
              <div className={cx("px-5", "bg-pd")}>
                <div className={cx("row")}>
                  <div className={cx("col-md-6 col-xl-3")}>
                    <div
                      className={cx("item-feature dark text-center text-white")}
                    >
                      <MdSecurity className={cx("font-size")} />
                      <h3>Host selection</h3>
                      <p>
                        The bidding procedure to host the 2018 and 2022 FIFA
                        World Cups began in January 2009, and national
                        associations.
                      </p>
                      <a
                        href="#"
                        className={cx(
                          "text-decoration-none text-white",
                          "hover-effect"
                        )}
                      >
                        Learn More
                      </a>
                    </div>
                  </div>

                  <div className={cx("col-md-6 col-xl-3")}>
                    <div
                      className={cx("item-feature dark text-center text-white")}
                    >
                      <RiTeamFill className={cx("font-size")} />
                      <h3>Teams</h3>
                      <p>
                        For the first time in the history of the FIFA World Cup,
                        all eligible nations – the 209 FIFA member associations.
                      </p>
                      <a
                        href="#"
                        className={cx(
                          "text-decoration-none text-white",
                          "hover-effect"
                        )}
                      >
                        Learn More
                      </a>
                    </div>
                  </div>

                  <div className={cx("col-md-6 col-xl-3")}>
                    <div
                      className={cx("item-feature dark text-center text-white")}
                    >
                      <ImTable2 className={cx("font-size")} />
                      <h3>Venues</h3>
                      <p>
                        The final choice of host cities was announced on 29
                        September 2012. The number of cities was further reduced
                        to 1.
                      </p>
                      <a
                        href="#"
                        className={cx(
                          "text-decoration-none text-white",
                          "hover-effect"
                        )}
                      >
                        Learn More
                      </a>
                    </div>
                  </div>

                  <div className={cx("col-md-6 col-xl-3")}>
                    <div
                      className={cx("item-feature dark text-center text-white")}
                    >
                      <PiSoccerBallFill className={cx("font-size")} />
                      <h3>Marketing</h3>
                      <p>
                        The tournament logo was unveiled on 28 October 2014 by
                        cosmonauts at the International Space Station.
                      </p>
                      <a
                        href="#"
                        className={cx(
                          "text-decoration-none text-white",
                          "hover-effect"
                        )}
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("row pt-5")}>
              <div className={cx("col-md-4")}>
                <Link to={"/team-table"} className={cx("text-decoration-none")}>
                  <div className={cx("card", "mb-4")}>
                    <div
                      className={cx("card-body", "text-center", "zoom-effect")}
                    >
                      <PiSoccerBallFill className={cx("size")} />
                      <h4 className={cx("card-title")}>Soccer Team</h4>
                      <p className={cx("card-text")}>Best Sports Features</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className={cx("col-md-4")}>
                <Link to={"/"} className={cx("text-decoration-none")}>
                  <div className={cx("card", "mb-4", "phong")}>
                    <div
                      className={cx("card-body", "text-center", "zoom-effect")}
                    >
                      <PiSoccerBallFill className={cx("size")} />
                      <h4 className={cx("card-title")}>Detail-player</h4>
                      <p className={cx("card-text")}>Best Sports Features</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className={cx("col-md-4")}>
                <Link to={"/"} className={cx("text-decoration-none")}>
                  <div className={cx("card", "mb-4")}>
                    <div
                      className={cx("card-body", "text-center", "zoom-effect")}
                    >
                      <PiSoccerBallFill className={cx("size")} />
                      <h4 className={cx("card-title")}>Technical Body</h4>
                      <p className={cx("card-text")}>Best Sports Features</p>
                    </div>
                  </div>
                </Link>
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
