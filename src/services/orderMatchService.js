/* eslint-disable no-use-before-define */
import { orderMatch } from "../db";

export const getAllOrderMatch = () => {
  return [null, orderMatch];
}

export const getOrderMatchById = (id) => {
  const result = orderMatch.find(item => item.id === id);
  return [null, result]
}

export const getOrderMatchByIdMatch = (id) => {
  const result = orderMatch.filter(item => item.id_match === id);
  return [null, result]
}