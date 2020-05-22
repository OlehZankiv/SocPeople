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
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
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
    userLogin(email, password, rememberMe = false, captcha = null) {
        return instance.post("auth/login", { email, password, rememberMe, captcha }).then((response) => response.data);
    },
    userLogout() {
        return instance.delete("auth/login").then((response) => response.data);
    },
};

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get("security/get-captcha-url").then((response) => response.data);
    },
};

export const profileAPI = {
    getUser(userId) {
        return instance.get(`profile/${userId}`).then((response) => response.data);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then((response) => {
            return response.data;
        });
    },
    updateStatus(status) {
        return instance.put("profile/status", { status: status }).then((response) => response.data);
    },
    setAvatar(file) {
        const formData = new FormData();
        formData.append("image", file);

        return instance
            .put("profile/photo", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => response.data);
    },
    setProfileData(profileData) {
        return instance.put("profile", profileData).then((response) => response.data);
    },
};
