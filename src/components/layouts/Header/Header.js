import React, { useRef } from "react";
import classNames from "classnames/bind";
import styles from "./header.module.css";
import logo from "../../../logo.png";
import { Link } from "react-router-dom";
import { BsFacebook, BsFillCaretDownSquareFill, BsPinterest, BsSearch, BsTwitter } from "react-icons/bs";
import { FaFacebookF, FaUser } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const cx = classNames.bind(styles);

function Header() {
  const boxMenuMd = useRef();

  const dropdownMenu = (check) => {
    check ? boxMenuMd.current.setAttribute("style", `transform: translateY(0);`) : boxMenuMd.current.setAttribute("style", ``);
  }
  
  return (
    <>
      <header className={cx("headercomponent")}>
        <div className={cx("position-fixed fixed-top")}>
          <div className={cx("menu", "container")}>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
              <Link
                className={cx(
                  "navbar-brand",
                  "col-lg-1 col-md-3 col-sm-6 col-2 d-block p-0 m-0 my-2"
                )}
                to={"/"}
              >
                <span
                  className={cx(
                    "col-lg-12 col-md-6 col-sm-4 col-12 p-0 m-0 d-block overflow-hidden rounded-circle"
                  )}
                >
                  <img src={logo} alt={logo} className={cx("w-100")} />
                </span>
              </Link>
              <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => dropdownMenu(true)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={cx(
                  "collapse navbar-collapse w-100 d-lg-flex align-items-center d-none",
                  "box-menu"
                )}
                id="collapsibleNavId"
              >
                <ul
                  className={cx(
                    "navbar-nav ml-auto mt-2 mt-lg-0 navbar-menu",
                    "menu-content"
                  )}
                >
                  <li className={cx("nav-item")}>
                    <Link className={cx("nav-link d-block", "item")} to={"/"}>
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li
                    className={cx(
                      "nav-item ml-2 position-relative",
                      "menu-toggle"
                    )}
                  >
                    <Link className={cx("nav-link d-block", "item")}>
                      Our team
                    </Link>
                    <div
                      className={cx(
                        "menu-child",
                        "position-absolute bg-white py-2"
                      )}
                    >
                      <ul className={cx("list-unstyled")}>
                        <li className={cx("nav-item")}>
                          <Link
                            to={"/"}
                            className={cx(
                              "text-decoration-none d-block w-100 px-3 py-2 text-dark small",
                              "item"
                            )}
                          >
                            Doiiiii 1
                          </Link>
                        </li>
                        <li className={cx("nav-item")}>
                          <Link
                            to={"/"}
                            className={cx(
                              "text-decoration-none d-block w-100 px-3 py-2 text-dark small",
                              "item"
                            )}
                          >
                            Doiiiii 2
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className={cx("nav-item ml-2")}>
                    <Link className={cx("nav-link d-block", "item")}>
                      Team table
                    </Link>
                  </li>
                  <li className={cx("nav-item ml-2")}>
                    <Link className={cx("nav-link d-block", "item")}>
                      About Us
                    </Link>
                  </li>
                  <li className={cx("nav-item ml-2")}>
                    <Link className={cx("nav-link d-block", "item")}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <ul className={cx("navbar-nav mt-2 mt-lg-0 ml-3", "box-icons")}>
                  {/* <li className={cx("nav-item ml-2")}>
                    <Link className={cx("nav-link d-block text-white p-0 m-0 rounded-circle overflow-hidden", "item")} >
                      <BsTwitter className={cx("icon")} /> 
                    </Link>
                  </li>
                  <li className={cx("nav-item ml-2")}>
                    <Link className={cx("nav-link d-block text-white p-0 m-0 rounded-circle overflow-hidden", "item")} >
                      <FaFacebookF className={cx("icon")} /> 
                    </Link>
                  </li>
                  <li className={cx("nav-item ml-2")}>
                    <Link className={cx("nav-link d-block text-white p-0 m-0 rounded-circle overflow-hidden", "item")} >
                      <BsPinterest className={cx("icon")} /> 
                    </Link>
                  </li> */}
                  <li className={cx("nav-item ml-3 dropdown show")}>
                    <Link
                      className={cx(
                        "nav-link d-block text-dark p-0 m-0 py-2",
                        "item"
                      )}
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <BsSearch fontSize={20} className={cx("icon")} />
                    </Link>
                    <div
                      className={cx(
                        "dropdown-menu p-0 m-0 border-0",
                        "form-search"
                      )}
                      aria-labelledby="dropdownMenuLink"
                    >
                      <form>
                        <div
                          className={cx(
                            "form-group d-flex position-relative m-0 p-0"
                          )}
                        >
                          <input
                            type="text"
                            name="q"
                            placeholder="search..."
                            className={cx("form-control shadow-none border-0")}
                          />
                          <button
                            type="submit"
                            className={cx(
                              "btn shadow-none border-0 position-absolute bg-transparent"
                            )}
                          >
                            <BsSearch color="#000" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </li>
                  <li
                    className={cx(
                      "nav-item ml-3 position-relative",
                      "menu-toggle"
                    )}
                  >
                    <Link
                      className={cx(
                        "nav-link d-block text-dark p-0 m-0 py-2",
                        "item"
                      )}
                    >
                      <FaUser fontSize={20} className={cx("icon", "p-0 m-0")} />
                    </Link>
                    <div
                      className={cx(
                        "menu-child",
                        "position-absolute bg-white py-2"
                      )}
                    >
                      <ul className={cx("list-unstyled")}>
                        <li className={cx("nav-item")}>
                          <Link
                            to={"/"}
                            className={cx(
                              "text-decoration-none d-block w-100 px-3 py-2 text-dark small",
                              "item"
                            )}
                          >
                            Login
                          </Link>
                        </li>
                        <li className={cx("nav-item")}>
                          <Link
                            to={"/"}
                            className={cx(
                              "text-decoration-none d-block w-100 px-3 py-2 text-dark small",
                              "item"
                            )}
                          >
                            Register
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className={cx("menu-md", "position-fixed w-100 h-100")} ref={boxMenuMd}>
          <div className={cx("container d-flex flex-column align-items-center justify-content-center position-relative mt-5")}>
            <Link
              className={cx(
                "navbar-brand",
                "col-4"
              )}
              to={"/"}
            >
              <span
                className={cx(
                  "col-md-6 p-0 m-0 d-block overflow-hidden rounded-circle"
                )}
              >
                <img src={logo} alt={logo} className={cx("w-100")} />
              </span>
            </Link>
            <div id="accordion" className={cx("w-100 mb-3")}>
              <div className={cx("card bg-transparent border-0", "card-item")}>
                <div className={cx("card-header p-0 border-0 bg-transparent")} id="headingOne">
                  <h5 className={cx("mb-0")}>
                    <Link to={'/'}
                      className={cx("text-decoration-none text-dark d-flex justify-content-between p-3", "link-item")}
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span>Home</span>
                    </Link>
                  </h5>
                </div>
              </div>
              <div className={cx("card bg-transparent border-0", "card-item")}>
                <div className={cx("card-header p-0 border-0 bg-transparent")} id="headingTwo">
                  <h5 className={cx("mb-0")}>
                    <Link to={'/'}
                      className={cx("text-decoration-none text-dark d-flex justify-content-between p-3", "link-item")}
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <span>Our team</span>
                      <span><BsFillCaretDownSquareFill /></span>
                    </Link>
                  </h5>
                </div>
                <div
                  id={cx("collapseTwo")}
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className={cx("card-body py-0", "box-menu")}>
                    <div>
                      <Link to={'/'} className={cx("item", "text-decoration-none w-100 d-block text-dark p-2")}>Doiii 1</Link>
                    </div>
                    <div>
                      <Link to={'/'} className={cx("item", "text-decoration-none w-100 d-block text-dark p-2")}>Doiii 2</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("card bg-transparent border-0", "card-item")}>
                <div className={cx("card-header p-0 border-0 bg-transparent")} id="headingThree">
                  <h5 className={cx("mb-0")}>
                    <Link to={'/'}
                      className={cx("text-decoration-none text-dark d-flex justify-content-between p-3", "link-item")}
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="true"
                      aria-controls="collapseThree"
                    >
                      <span>Team table</span>
                    </Link>
                  </h5>
                </div>
              </div>
              <div className={cx("card bg-transparent border-0", "card-item")}>
                <div className={cx("card-header p-0 border-0 bg-transparent")} id="headingFour">
                  <h5 className={cx("mb-0")}>
                    <Link to={'/'}
                      className={cx("text-decoration-none text-dark d-flex justify-content-between p-3", "link-item")}
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseFour"
                    >
                      <span>About us</span>
                    </Link>
                  </h5>
                </div>
              </div>
              <div className={cx("card bg-transparent border-0", "card-item")}>
                <div className={cx("card-header p-0 border-0 bg-transparent")} id="headingfive">
                  <h5 className={cx("mb-0")}>
                    <Link to={'/'}
                      className={cx("text-decoration-none text-dark d-flex justify-content-between p-3", "link-item")}
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="true"
                      aria-controls="collapseFive"
                    >
                      <span>Contact us</span>
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className={cx("form-search", "w-75 m-auto")}>
              <form className={cx("w-100")}>
                <div className={cx("form-group", "position-relative w-100 d-flex p-0 m-0")}>
                  <input type="textt" name="q" placeholder="search..." className={cx("form-control w-100 bg-transparent p-4")} />
                  <button type="submit" className={cx("btn border-0 shadow-none position-absolute h-100")}>
                    <BsSearch fontSize={25} color="red" />
                  </button>
                </div>
              </form>
            </div>
            <div className={cx("d-flex mt-3 align-items-center")}>
              <Link to={'/login'} className={cx("text-decoration-none h5 p-0 m-0 p-2 d-block")}>Login</Link>
              <span className={cx("small mx-2 d-block text-secondary")}>OR</span>
              <Link to={'/register'} className={cx("text-decoration-none h5 p-0 m-0 p-2 d-block")}>Register</Link>
            </div>
          </div>
          <div className={cx("box-exit", "position-absolute p-0 m-0")} onClick={() => dropdownMenu(false)}>
            <span className={cx("d-block text-dark")}>
              <RxCross1 fontSize={25} />
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
