import axios from "axios";

const axiosIntance = axios.create();

export const get = async (url, config = {}) => {
  const res = await axiosIntance.get(url, config);
  return res.data;
}

export const post = async (url, data, config = {}) => {
  const res = await axiosIntance.post(url, data, config);
  return res.data;
}

export const put = async (url, data, config = {}) => {
  const res = await axiosIntance.put(url, data, config);
  return res.data;
}

export const remove = async (url, config = {}) => {
  const res = await axiosIntance.delete(url, config);
  return res.data;
}