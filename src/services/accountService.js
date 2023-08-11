/* eslint-disable no-use-before-define */
import * as http from '../common/http-common';

const URL = 'http://localhost:8000/wishlist';

export const getAllAccount = async () => {
  try {
    const data = await http.get(URL);
    return [null, data];
  } catch (err) {
    return [err, null];
  }
}

export const getAccountById = async (id) => {
  try {
    const data = await http.get(`${URL}/${id}`);
    return [null, data];
  } catch (err) {
    return [err, null];
  }
}

export const createAccount = async (data) => {
  try {
    const data = await http.post(URL, data);
    return [null, data];
  } catch (err) {
    return [err, null];
  }
}

export const updateAccount = async (id, data) => {
  try {
    const data = await http.put(`${URL}/${id}`, data);
    return [null, data];
  } catch (err) {
    return [err, null];
  }
}

export const deleteAccount = async (id) => {
  try {
    const data = await http.remove(`${URL}/${id}`);
    return [null, data];
  } catch (err) {
    return [err, null];
  }
}