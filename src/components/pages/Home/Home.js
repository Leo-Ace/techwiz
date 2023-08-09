import React from "react";
import classNames from "classnames/bind";
import styles from "./home.module.css";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles); 

function Home() {
  return (
    <>
      <main className={cx("homecomponent")}>
        <div className={cx("home-component")}>
          <div>
            <div id="carouselId" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselId" data-slide-to="0" class="active"></li>
                <li data-target="#carouselId" data-slide-to="1"></li>
                <li data-target="#carouselId" data-slide-to="2"></li>
                <li data-target="#carouselId" data-slide-to="3"></li>
                <li data-target="#carouselId" data-slide-to="4"></li>
              </ol>
              <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                  <img src="/images/cauthu-01.jpg" alt="First slide" className={cx("w-100")} />
                  <div class="carousel-caption d-none d-md-block">
                    <h3>Erling Haaland</h3>
                    <p>Manchester united</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="/images/cauthu-02.jpg" alt="Second slide" className={cx("w-100")} />
                  <div class="carousel-caption d-none d-md-block">
                    <h3>Title</h3>
                    <p>Description</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="/images/cauthu-03.jpg" alt="Third slide" className={cx("w-100")} />
                  <div class="carousel-caption d-none d-md-block">
                    <h3>Title</h3>
                    <p>Description</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="/images/cauthu-04.jpg" alt="Third slide" className={cx("w-100")} />
                  <div class="carousel-caption d-none d-md-block">
                    <h3>Title</h3>
                    <p>Description</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="/images/cauthu-05.jpg" alt="Third slide" className={cx("w-100")} />
                  <div class="carousel-caption d-none d-md-block">
                    <h3>Title</h3>
                    <p>Description</p>
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>

          </div>
          <div className={cx("container")}>
            <div className={cx("bcd")}>
              <nav className={cx("py-2")}>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <a
                    class="nav-item nav-link active"
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
                    class="nav-item nav-link"
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
                    class="nav-item nav-link"
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
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
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
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
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
                <div
                  class="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
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

          </div>

        </div>
      </main>
    </>
  );
}

export default Home;
