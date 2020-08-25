import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'a57a0a64-780f-4014-88c0-5c80c079bab6',
  },
});

export const usersAPI = {
  getUsers (page = 1, pageSize = 10) {
    return instance.get(`users?page=${page}&count=${pageSize}`).then((response) => {
      return response.data;
    });
  },

  getUserProfile (userId) {
    return instance.get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
  getAuthMe () {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  followUser (userId) {
    return instance.post(`follow/${userId}`, null).then((response) => {
      return response.data;
    });
  },
  unFollowUser (userId) {
    return instance.delete(`follow/${userId}`, null).then((response) => {
      return response.data;
    });
  },
};

// followUser

// getProfile
