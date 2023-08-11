/* eslint-disable no-use-before-define */
import * as http from '../common/http-common';

const URL = 'http://localhost:8000/comment';

export const getAllComment = async () => {
  try {
    const data = await http.get(URL);
    return [null, data];
  } catch (err) {
    return [err, null];
  }
}

export const getCommentById = async (id) => {
  try {
    const data = await http.get(`${URL}/${id}`);
    return [null, data];
  } catch (err) {
    return [err, null];
  }
}