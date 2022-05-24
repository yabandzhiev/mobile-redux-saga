import { axios, GET_CARS_SERVICE } from "./config";

export const api = {
  getCars: async () => {
    return axios.get(GET_CARS_SERVICE, {});
  },
};
