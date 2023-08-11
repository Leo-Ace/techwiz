import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './detail_club.module.css';
import { Link, useParams } from 'react-router-dom';
import { MainData } from '../../layouts/Main';
import { getTeamById } from '../../../services/teamService';
import { getPlayerByIdTeam } from '../../../services/playerService';
import { getCoachById } from '../../../services/coachService';
const cx = classNames.bind(styles);

function DetailClub(props) {
    // const { team, coach, player, comment } = useContext(MainData);
    const { id } = useParams();
    const [listPlayer, setListPlayer] = useState([]);
    const [isTeam, setIsTeam] = useState();
    const [coach, setCoach] = useState();

    useEffect(() => {
        const start = async () => {
            // team
            const [err_team, data_team] = await getTeamById(id);
            if(err_team) {
                throw Error("Error!");
            } else {
                setIsTeam(data_team);
            }
            // player
            const [err_player, data_player] = await getPlayerByIdTeam(id);
            if(err_player) {
                throw Error("Error!");
            } else {
                setListPlayer(data_player);
            }
            // player
            const [err_coach, data_coach] = await getCoachById(id);
            if(err_coach) {
                throw Error("Error!");
            } else {
                setCoach(data_coach);
            }
        }
        start();
    }, [id]);

    console.log(isTeam, listPlayer, coach)

    return (
        <div>
            <div className={cx("banner_club")}>
                <img className={cx("w-100")} src='/images/banne_detailClub.gif' alt="" />
            </div>
            <div className={cx("name_club")}>
                <p>{isTeam ? isTeam.name : "Dont Team"}</p>
            </div>
            <div className={cx( "img_logo w-100 text-center")}>
                <img src={isTeam ? isTeam.thumbnail : ""} alt=''/>
            </div>
            <div className={cx("container")}>
                <div className={cx("desc_club row my-5")}>
                    <div className={cx("desc_text mt-lg-0")}>
                        <h2 className={cx("text-danger text-center w-100")}>OUR HISTORY</h2>
                        {isTeam ? isTeam.description.map((item, index) => (
                            <p key={index}>- {item}</p>
                        )) : "Dont Team"}
                    </div>
                </div>
                <div className={cx("honours")}>
                    <h2 className={cx("tieu_de")}>CLUB HONOURS</h2>
                    {isTeam ? isTeam.achievements.map((item, index) => (
                        <p key={index} className={cx("list_honours")}>- {item}</p>
                    )) : "Dont Team"}
                </div>
                <div className={cx("coach")}>
                    <h2 className={cx("tieu_de", "text-uppercase")}>trainer</h2>
                    <div className={cx("row")}>
                        <div className={cx("col-lg-3 col-12 p-0 pt-3")}>
                            <img src={coach ? coach.thumbnail : ''} className={cx("w-100 p-3 shadow")} alt="" />
                        </div>
                        <div className={cx('name_coach', "d-block col-lg-9 col-12")}>
                            <h1 className={cx("d-block m-0 py-2 text-dark mb-2")}>{coach ? coach.name : ''}</h1>
                            <h5 className={cx("text-secondary")}><b className={cx("text-dark")}>Date of birth:</b>  {coach ? coach.birthday : ''}</h5>
                            <h5 className={cx("text-secondary")}><b className={cx("text-dark")}>Place of birth:</b>  {coach ? coach.country : ''}</h5>
                            <h5 className={cx("text-secondary", "description")}><b className={cx("text-dark")}>Description:</b>   {coach ? coach.description : ''}</h5>
                        </div>
                    </div>
                </div>
                <div className={cx("list_players")}>
                    <div className={cx("title_player")}>
                        <h2 className={cx("tieu_de", "text-center text-danger")}>PLAYERS</h2>
                    </div>
                    <h2 className={cx("mt-5")}>GOALKEEPERS</h2>
                    <div className={cx("player row")}>
                        {listPlayer.filter(item=>item.location === "GK").map((item, index) => (
                            <div key={index} className={cx("col-lg-4 col-md-6 p-3")}>
                                <div className={cx("cau_thu", "position-relative m-0")}>
                                    <Link to={`/player/${item.id}`} className={cx("")}>
                                        <div className={cx("img_player", "bg-white overflow-hidden")}>
                                            <img src={item.thumbnail} alt={item.thumbnail} />
                                        </div>
                                        <div className={cx("number", "position-absolute")}>
                                            <p className={cx("m-0 p-0 px-2 mr-2")}>{item.id}</p>
                                            <p className={cx("location", "position-absolute p-0 m-0")}>{item.location}</p>
                                        </div>
                                        <div className={cx("desc_player", "p-1 w-100 text-center text-dark position-relative bg-transparent")}>
                                            <p className={cx("p-0 m-0 text-center w-100")}>{item.name}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h2 className={cx("mt-5")}>DEFENDERS</h2>
                    <div className={cx("player row")}>
                        {listPlayer.filter(item=>item.location === "LB" || item.location === "CMD" || item.location === "RB").map((item, index) => (
                            <div key={index} className={cx("col-lg-4 col-md-6 p-3")}>
                                <div className={cx("cau_thu", "position-relative m-0")}>
                                    <Link to={`/player/${item.id}`} className={cx("")}>
                                        <div className={cx("img_player", "bg-white overflow-hidden")}>
                                            <img src={item.thumbnail} alt={item.thumbnail} />
                                        </div>
                                        <div className={cx("number", "position-absolute")}>
                                            <p className={cx("m-0 p-0 px-2 mr-2")}>{item.id}</p>
                                            <p className={cx("location", "position-absolute p-0 m-0")}>{item.location}</p>
                                        </div>
                                        <div className={cx("desc_player", "p-1 w-100 text-center text-dark position-relative bg-transparent")}>
                                            <p className={cx("p-0 m-0 text-center w-100")}>{item.name}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h2 className={cx("mt-5 text-uppercase")}>MIDFIELDERS</h2>
                    <div className={cx("player row")}>
                        {listPlayer.filter(item=>item.location === "LM" || item.location === "CM" || item.location === "RM").map((item, index) => (
                            <div key={index} className={cx("col-lg-4 col-md-6 p-3")}>
                                <div className={cx("cau_thu", "position-relative m-0")}>
                                    <Link to={`/player/${item.id}`} className={cx("")}>
                                        <div className={cx("img_player", "bg-white overflow-hidden")}>
                                            <img src={item.thumbnail} alt={item.thumbnail} />
                                        </div>
                                        <div className={cx("number", "position-absolute")}>
                                            <p className={cx("m-0 p-0 px-2 mr-2")}>{item.id}</p>
                                            <p className={cx("location", "position-absolute p-0 m-0")}>{item.location}</p>
                                        </div>
                                        <div className={cx("desc_player", "p-1 w-100 text-center text-dark position-relative bg-transparent")}>
                                            <p className={cx("p-0 m-0 text-center w-100")}>{item.name}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <h2 className={cx("mt-5 text-uppercase")}>FORWARDS</h2>
                    <div className={cx("player row")}>
                        {listPlayer.filter(item=>item.location === "ST").map((item, index) => (
                            <div key={index} className={cx("col-lg-4 col-md-6 p-3")}>
                                <div className={cx("cau_thu", "position-relative m-0")}>
                                    <Link to={`/player/${item.id}`} className={cx("")}>
                                        <div className={cx("img_player", "bg-white overflow-hidden")}>
                                            <img src={item.thumbnail} alt={item.thumbnail} />
                                        </div>
                                        <div className={cx("number", "position-absolute")}>
                                            <p className={cx("m-0 p-0 px-2 mr-2")}>{item.id}</p>
                                            <p className={cx("location", "position-absolute p-0 m-0")}>{item.location}</p>
                                        </div>
                                        <div className={cx("desc_player", "p-1 w-100 text-center text-dark position-relative bg-transparent")}>
                                            <p className={cx("p-0 m-0 text-center w-100")}>{item.name}</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={cx("banner_club", "mt-5")}>
                <img className={cx("w-100")} src='/images/banner_club.webp' alt="" />
            </div>  
        </div>
    );
}

export default DetailClub;