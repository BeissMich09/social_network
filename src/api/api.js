import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "2207a5d4-08e2-4a3b-98af-c3bbaf315c7d",
  },
});

export const userAPI ={ 
  getUsers(currentPage = 1, pageSize = 10) {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`, {})
    .then((response) => {
      return response.data;
    });
}}
