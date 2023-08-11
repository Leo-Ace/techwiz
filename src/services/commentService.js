/* eslint-disable no-use-before-define */
import { comment } from "../../db";

export const getAllComment = () => {
  return [null, comment];
}

export const getCommentById = (id) => {
  const result = comment.find(item => item.id === id);
  return [null, result]
}