import { axios, LOGIN_USER } from "./config";

export const api = {
  login: async (username, password) => {
    return axios.post(LOGIN_USER, { username, password });
  },
};
