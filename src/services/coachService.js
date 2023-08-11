/* eslint-disable no-use-before-define */
import { coach } from "../db";

export const getAllCoach = () => {
  return [null, coach];
}

export const getCoachById = (id) => {
  const result = coach.find(item => item.id === id);
  return [null, result]
}