/* eslint-disable no-use-before-define */
import { account } from "../db";

export const getAllAccount = () => {
  return [null, account];
}

export const getAccountById = (id) => {
  const result = account.find(item => item.id === id);
  return [null, result]
}