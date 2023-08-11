/* eslint-disable no-use-before-define */
import { match } from "../db";

export const getAllMatch = () => {
  return [null, match];
}

export const getMatchById = (id) => {
  const result = match.find(item => item.id === id);
  return [null, result]
}