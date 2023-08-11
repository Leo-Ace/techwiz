import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Match.css';
import { Link, useParams } from "react-router-dom";
import { getMatchById } from '../../../services/matchServicce';
import { getOrderMatchByIdMatch } from '../../../services/orderMatchService';
import { getTeamById } from '../../../services/teamService';
import $ from 'jquery';

const cx = classNames.bind(styles);
function Match() {
  const { id } = useParams();
  const [match, setMatch] = useState();
      useEffect(() => {
        $("html, body").animate({ scrollTop: "0" }, "slow");
    }, []);

  useEffect(() => {
    const [err_match, data_match] = getMatchById(Number(id));
    setMatch(data_match);
  }, [id]);

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
      {match ? (
        <div className={cx("match")} >
          <div className={cx("")}>
              <img className={cx("w-100")} src='/images/banner3.jpg' alt="" />
          </div>
          <div className={cx("time_match")} >
            <div className={cx("container ")} >
              <div className={cx("text-center")}>
                {match.status === 0 ? (
                  <h2>Live match {getTeam(getOrderMatch(id)[0].id_team).name} end {getTeam(getOrderMatch(id)[1].id_team).name}</h2>
                ) : (
                  <h2>The match was over</h2>
                )}
              </div>
              <div className={cx("row mb-2")} >
                <div className={cx("col-lg-6 col-md-6 col-sm-6")}>
                  <div className={cx("match_left", "d-lg-flex justify-content-between align-items-center d-block text-center")}>
                    <div className={cx("name")} >
                      <Link to={`/club/${getTeam(getOrderMatch(id)[0].id_team).name}/${getTeam(getOrderMatch(id)[0].id_team).id}`}>{getTeam(getOrderMatch(id)[0].id_team).name}</Link>
                    </div>
                    <div className={cx("logo")}>
                      <img width="91px" src={getTeam(getOrderMatch(id)[0].id_team).thumbnail} alt={getTeam(getOrderMatch(id)[0].id_team).name} />
                    </div>
                  </div>
    
                </div>
                <div className={cx("col-lg-6 col-md-6 col-sm-6")}>
                  <div className={cx("match_right", "d-flex justify-content-between align-items-center w-100 text-center flex-column-reverse flex-lg-row")}>
                    <div className={cx("logo")}>
                      <img width="91px" src={getTeam(getOrderMatch(id)[1].id_team).thumbnail} alt={getTeam(getOrderMatch(id)[1].id_team).name} />
                    </div>
                    <div className={cx("name")} >
                      <Link to={`/club/${getTeam(getOrderMatch(id)[1].id_team).name}/${getTeam(getOrderMatch(id)[1].id_team).id}`}>{getTeam(getOrderMatch(id)[1].id_team).name}</Link>
                    </div>
                  </div>
                </div>
              </div>
              {match.status === 1 && (
                <div className={cx("h1 text-white text-center")}>{getOrderMatch(id)[0].ratio} - {getOrderMatch(id)[1].ratio}</div>
              )}
              <div className={cx("text-center")}>
                <p className="blv">Commentator: Peter Drury</p>
                <p className="time">{match.time} 11/08/2023</p>
              </div>
            </div>
          </div>
          <div className={cx("video m-5")}>
            <div className={cx("container")}>
              <div className={cx("text-center")}>
                <iframe className={cx("w-100")} src={match.iframe} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
          </div>
        </div>
      ) : ""}
    </>
  );
}

export default Match;