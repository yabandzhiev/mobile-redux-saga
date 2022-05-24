import { axios, REGISTER_USER } from "./config";

export const api = {
  register: async (username, password, firstName, lastName) => {
    return axios.post(REGISTER_USER, {
      username,
      password,
      firstName,
      lastName,
    });
  },
};
