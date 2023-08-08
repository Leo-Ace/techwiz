/* eslint-disable no-use-before-define */
import * as http from '../common/http-common';

const URL = 'http://localhost:8000/users';

export const getAll = async () => {
  try {
    const data = await http.get(URL);
    return [null, data];
  } catch (err) {
    return [err, null];
  }
}

export const getById = async (id) => {
  try {
    const data = await http.get(`${URL}/${id}`);
    return [null, data];
  } catch (err) {
    return [err, null];
  }
}

export const create = async (data) => {
  try {
    const data = await http.post(URL, data);
    return [null, data];
  } catch (err) {
    return [err, null];
  }
}

export const update = async (id, data) => {
  try {
    const data = await http.put(`${URL}/${id}`, data);
    return [null, data];
  } catch (err) {
    return [err, null];
  }
}

export const deleteUser = async (id) => {
  try {
    const data = await http.remove(`${URL}/${id}`);
    return [null, data];
  } catch (err) {
    return [err, null];
  }
}