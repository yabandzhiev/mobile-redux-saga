import { axios, CAR_SERVICE } from "./config";

export const api = {
  editCar: async (newData, userId, accessToken) => {
    return axios.put(
      `${CAR_SERVICE}/${userId}`,
      { ...newData },
      {
        headers: {
          Authorization: "Bearer " + accessToken,
          "Content-Type": "application/json",
        },
      }
    );
  },
};
