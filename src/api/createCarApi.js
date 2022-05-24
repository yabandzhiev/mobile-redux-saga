import { axios, CAR_SERVICE } from "./config";

export const api = {
  createCar: async (vehicle, accessToken) => {
    return axios.post(
      CAR_SERVICE,
      { ...vehicle },
      {
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json",
        },
      }
    );
  },
};
