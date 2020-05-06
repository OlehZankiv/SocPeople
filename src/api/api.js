import * as axios from "axios";

let instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "569a5328-ffe4-427f-ad58-77be65e6bed7",
    },
});

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data);
    },
    follow(userId) {
        return instance.post(`follow/${userId}`);
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`);
    },
};

export const loginAPI = {
    login() {
        return instance.get(`auth/me`).then((response) => response.data);
    },
};

export const profileAPI = {
    getUser(userId) {
        return instance
            .get(`profile/${userId}`)
            .then((response) => response.data);
    },
};
