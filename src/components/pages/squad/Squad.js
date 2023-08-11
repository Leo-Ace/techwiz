import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Squad.css";
import { Link } from "react-router-dom";
import { getAllTeam } from "../../../services/teamService";
import { getPlayerByIdTeam } from "../../../services/playerService";
import $ from "jquery";

const cx = classNames.bind(styles);

function Squad() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    $("html, body").animate({ scrollTop: "0" }, "slow");
  }, []);
  useEffect(() => {
    const [err_team, dt_team] = getAllTeam();
    if (err_team) {
      throw Error("Error!");
    } else {
      setTeams(dt_team);
    }
  }, []);

  const getListPlayer = (id) => {
    const [err, data] = getPlayerByIdTeam(Number(id));
    return data;
  };

  return (
    <div className={cx("detail_member2")}>
      <div className={cx("banner_club")}>
        <img
          className={cx("w-100")}
          src="/images/banne_detailClub.gif"
          alt=""
        />
      </div>
      {teams.map((item, index) => (
        <div key={index} className={cx("container")}>
          <div className={cx("row")}>
            <div
              className={cx(
                "name_doi_bong text-center py-5 w-100 text-danger text-uppercase"
              )}
            >
              <h1>{item.name}</h1>
              <hr className={cx("bg-danger")} />
            </div>
          </div>
          <div className={cx("box-player")}>
            <div className={cx("row")}>
              {getListPlayer(item.id).map((a, b) => (
                <div className={cx("col-lg-3 col-md-6 col-sm-12")}>
                  <div className={cx("Squad_player")}>
                    <div className={cx("player")}>
                      <div className={cx("row")}>
                        <div className={cx("d-flex")}>
                          <div className={cx("avatar")}>
                            <img src={a.thumbnail} alt="" />
                          </div>
                          <div className={cx("right")}>
                            <span>
                              <strong className={cx("name")}>{a.name}</strong>
                            </span>
                            <span className={cx("nationality")}>
                              <img
                                src="/images/detail/brazil.png"
                                alt="Argentina"
                                className={cx("flag")}
                              />
                              {a.country}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={cx("content")}>
                      <div className={cx("width_common")}>
                        <span className={cx("left")}>Birthday:</span>
                        <span className={cx("right")}>{a.birthday}</span>
                      </div>
                      <div className={cx("width_common")}>
                        <span className={cx("left")}>Football club:</span>
                        <Link
                          to={`/club/${item.name}/${item.id}`}
                          className={cx("right")}
                        >
                          <img
                            src={item.thumbnail}
                            className={cx("logo-club")}
                            alt=""
                          />
                        </Link>
                      </div>

                      <div className={cx("width_common")}>
                        <span className={cx("left")}>Location: </span>
                        <span className={cx("right")}>{a.location}</span>
                      </div>
                      <p className={cx("view-detail text-center")}>
                        <Link to={`/player/${a.id}`}>Detail</Link>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Squad;
