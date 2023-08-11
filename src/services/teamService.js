/* eslint-disable no-use-before-define */
import { footballTeam } from "../db";

export const getAllTeam = () => {
  return [null, footballTeam];
}

export const getTeamById = (id) => {
  const result = footballTeam.find(item => item.id === id);
  return [null, result]
}