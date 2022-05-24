import { axios, CAR_SERVICE } from "./config";

export const api = {
  deleteCar: async (carId, userId, accessToken) => {
    return axios.delete(`${CAR_SERVICE}/${carId}/${userId}`, {
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
    });
  },
};
