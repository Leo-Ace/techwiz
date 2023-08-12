import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Detail_member.css";
import { useParams } from "react-router-dom";
import { getPlayerById } from "../../../services/playerService";
import { getTeamById } from "../../../services/teamService";
import $ from "jquery";

const cx = classNames.bind(styles);
function Detail_player(props) {
  const { id } = useParams();
  const [player, setPlayer] = useState();
  const [club, setClub] = useState();

  useEffect(() => {
    $("html, body").animate({ scrollTop: "0" }, "slow");
  }, []);

  useEffect(() => {
    const start = async () => {
      const [err_player, data_player] = await getPlayerById(Number(id));
      setPlayer(data_player);
      const [err_team, data_team] = await getTeamById(
        Number(data_player ? Number(data_player.id_team) : '')
      );
      setClub(data_team);
    }
    start();
  }, [id]);

  return (
    <>
      <div className={cx("detail_member")}>
        <div className={cx("banner_club")}>
          <img
            className={cx("w-100")}
            src="/images/banne_detailClub.gif"
            alt=""
          />
        </div>
        {player ? (
          <>
            <div className={cx("player")}>
              <div className={cx("project-title")}>
                <h1 className={cx("h2-lg w-100 text-center text-danger py-4")}>
                  {player.name}
                </h1>
              </div>
              <div className={cx("container mb-4")}>
                <div className={cx("row")}>
                  <div className={cx("col-lg-4")}>
                    <div className={cx("product-imgs")}>
                      <div className={cx("img-display")}>
                        <div className={cx("img-showcase")}>
                          <img
                            src={player.thumbnail}
                            alt="shoe image"
                            className={cx("w-100 p-3")}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("col-lg-8")}>
                    <div className={cx("product-description")}>
                      <div className={cx("product-txt")}>
                        <div className={cx("product-info")}>
                          <p>
                            Full Name: <span>{player.name}</span>
                          </p>
                          <p>
                            Birthday: <span>{player.birthday}</span>
                          </p>
                          <p>
                            Nationality: <span>{player.country}</span>
                          </p>
                          <p>
                            Football club: <span>{club ? club.name : ""}</span>
                          </p>
                          <p>
                            Location: <span>{player.location}</span>
                          </p>
                          <p>
                            Height: <span>{player.height} cm</span>
                          </p>
                          <p>
                            Weight: <span>{player.weight} kg</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("statistics mt-5 wide-70 ")}>
              <div className={cx("container")}>
                <div className={cx("row")}>
                  <div className={cx("col-lg-12")}>
                    <div className={cx("mb-3 text-center")}>
                      <h2 className={cx("h2-xl")}>Club career</h2>
                    </div>
                  </div>
                </div>
                <div className={cx("mb-5")}>
                  <h5 className={cx("text-secondary", "career")}>
                    - {player.description}
                  </h5>
                </div>
                <div className={cx("row")}>
                  <div className={cx("col-lg-12")}>
                    <div className={cx("mb-60 text-center")}>
                      <h2 className={cx("h2-xl")}>Statistics</h2>
                    </div>
                  </div>
                </div>
                <div className={cx("row")}>
                  <div className={cx("col-lg-6")}>
                    <div className={cx(" achievements")}>
                      <table
                        cellSpacing="0"
                        cellPadding="0"
                        className={cx("table tbl-data")}
                      >
                        <thead>
                          <tr>
                            <th colSpan="2" className={cx("th-name")}>
                              Statistical
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td scope="row" className={cx("left")}>
                              Battle
                            </td>
                            <td>{player.statistics.match}</td>
                          </tr>
                          <tr>
                            <td scope="row" className={cx("left")}>
                              Yellow card
                            </td>
                            <td>{player.statistics.yellow}</td>
                          </tr>
                          <tr>
                            <td scope="row" className={cx("left")}>
                              Red card
                            </td>
                            <td>{player.statistics.red}</td>
                          </tr>
                          <tr>
                            <td scope="row" className={cx("left")}>
                              Assist
                            </td>
                            <td>{player.statistics.assist}</td>
                          </tr>
                          <tr>
                            <td scope="row" className={cx("left")}>
                              Goal
                            </td>
                            <td>{player.statistics.goal}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className={cx("col-lg-6")}>
                    <div className={cx("stylized")}>
                      <table
                        cellSpacing="0"
                        cellPadding="0"
                        className={cx("table tbl-data")}
                      >
                        <thead>
                          <tr>
                            <th colSpan="2" className={cx("th-name")}>
                              Honor
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {player.achievements.map((i, j) => (
                            <tr key={j}>
                              <td>{i}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <h1 className={cx("text-danger container py-5")}>
            No players found!
          </h1>
        )}
      </div>
    </>
  );
}

export default Detail_player;
