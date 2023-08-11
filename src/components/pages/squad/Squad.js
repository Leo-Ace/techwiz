import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Squad.css';
import { Link } from "react-router-dom";
import { getAllTeam } from '../../../services/teamService';
import { getPlayerByIdTeam } from '../../../services/playerService';
const cx = classNames.bind(styles);

function Squad() {
	const [teams, setTeams] = useState([]);
	useEffect(() => {
		const [err_team, dt_team] = getAllTeam();
		if(err_team) {
			throw Error('Error!');
		} else {
			setTeams(dt_team);
		}
	}, []);

	const getListPlayer = (id) => {
		const [err, data] = getPlayerByIdTeam(Number(id));
    return data;
	}
	
	return (
		<div className={cx("detail_member2")}>
			<div className={cx("banner_club")}>
				<img className={cx("w-100")} src='/images/banne_detailClub.gif' alt="" />
			</div>
			<div className={cx("container")}>
				<div className={cx("row")}>
					<div className={cx("name_doi_bong text-center py-5 w-100 text-danger text-uppercase")}>
						<h1>HaNoi FC</h1>
						<hr className={cx("bg-danger")}/>
					</div>
					<div className={cx("wrap-list-cauthu ")}>
						<li class="list-cauthu">
							<a href="/the-thao/du-lieu-bong-da/cau-thu/l-messi-154" alt="L. Messi" class="header-list-cauthu" >
								<div class="avatar"><img src="https://i-thethao.vnecdn.net/logo/2021/05/04/neymar-1620116914_m_100x100.jpg" /></div>
								<div class="right">
									<span>
										<strong class="name">Neymar</strong>
									</span>
									<span class="nationality">
										<img src="/images/detail/brazil.png" alt="Argentina" class="flag" />Brazil
									</span>
								</div>
							</a>
							<div class="content">
								<div class="width_common">
									<span class="left">Age:</span>
									<span class="right">31 tuổi</span>
								</div>
								<div class="width_common">
									<span class="left">Football club:</span>
									<a href="/the-thao/du-lieu-bong-da/doi-bong/psg-85" class="right"> <img src="https://is.vnecdn.net/objects/teams/85.png" class="logo-club" /> PSG</a>
								</div>

								<div class="width_common">
									<span class="left">Location: </span>
									<span class="right">ST</span>
								</div>
								<p class="view-detail">
									<Link to={"/Detail_player"} >Detail</Link>
								</p>
							</div>
						</li>
						<li class="list-cauthu">
							<a href="/the-thao/du-lieu-bong-da/cau-thu/l-messi-154" alt="L. Messi" class="header-list-cauthu" >
								<div class="avatar"><img src="https://i-thethao.vnecdn.net/logo/2021/05/04/l-messi-1620116766_m_100x100.jpg" /></div>
								<div class="right">
									<span>
										<strong class="name">L. Messi</strong>
									</span>
									<span class="nationality">
										<img src="https://is.vnecdn.net/objects/country/ar.svg" alt="Argentina" class="flag" />Argentina
									</span>
								</div>
							</a>
							<div class="content">
								<div class="width_common">
									<span class="left">Age:</span>
									<span class="right">36 tuổi</span>
								</div>
								<div class="width_common">
									<span class="left">Football club:</span>
									<a href="/the-thao/du-lieu-bong-da/doi-bong/psg-85" class="right"> <img src="https://is.vnecdn.net/objects/teams/85.png" class="logo-club" /> PSG</a>
								</div>

											<div className={cx("width_common")}>
												<span className={cx("left")}>Location: </span>
												<span className={cx("right")}>{a.location}</span>
											</div>
											<p className={cx("view-detail text-center")}>
												<Link to={`/player/${a.id}`} >Detail</Link>
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