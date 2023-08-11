import React, { createContext, useEffect, useState } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { getAllTeam } from '../../services/teamService';
import { getAllCoach } from '../../services/coachService';
import { getAllPlayer } from '../../services/playerService';
import { getAllComment } from '../../services/commentService';

export const MainData = createContext();

function Main({children}) {
  const [team, setTeam] = useState([]);
  const [coach, setCoach] = useState([]);
  const [player, setPlayer] = useState([]);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const start = async () => {
      // // team
      // const [err_team, dt_team] = await getAllTeam();
      // if(err_team) {
      //   throw Error('Error!');
      // } else {
      //   setTeam(dt_team);
      // }
      // // coach
      // const [err_coach, dt_coach] = await getAllCoach();
      // if(err_coach) {
      //   throw Error('Error!');
      // } else {
      //   setCoach(dt_coach);
      // }
      // // player
      // const [err_player, dt_player] = await getAllPlayer();
      // if(err_player) {
      //   throw Error('Error!');
      // } else {
      //   setCoach(dt_player);
      // }
      // // comment
      // const [err_comment, dt_comment] = await getAllComment();
      // if(err_comment) {
      //   throw Error('Error!');
      // } else {
      //   setCoach(dt_comment);
      // }
    }
    start();
  }, []);
  
  return (
    <MainData.Provider value={{team, coach, player, comment}}>
      <Header></Header>
        {children}
      <Footer></Footer>
    </MainData.Provider>
  );
}

export default Main;