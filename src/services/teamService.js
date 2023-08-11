/* eslint-disable no-use-before-define */
import * as http from '../common/http-common';

const URL = 'http://localhost:8000/footballTeam';

export const getAllTeam = async () => {
  try {
    const data = await http.get(URL);
    return [null, data];
  } catch (err) {
    return [err, null];
  }
}

export const getTeamById = async (id) => {
  try {
    const data = await http.get(`${URL}/${id}`);
    return [null, data];
  } catch (err) {
    return [err, null];
  }
}