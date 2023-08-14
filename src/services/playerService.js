/* eslint-disable no-use-before-define */
import { player } from "../db";

export const getAllPlayer = () => {
  return [null, player];
}

export const getPlayerById = async (id) => {
  console.log("check", player, id);
  const result = await player.find(item => item.id === Number(id));
  return [null, result];
}

export const getPlayerByName = (value) => {
  const result = player.find(item => item.name.indexOf(value) !== -1);
  return [null, result];
}

export const getPlayerByIdTeam = (id) => {
  const result = player.filter(item => item.id_team === id);
  return [null, result];
}

export const getTopTenPayer = () => {
  const result = player.sort((a, b) => {
    return a.statistics.goal - b.statistics.goal;
  })
  return [null, result];
}