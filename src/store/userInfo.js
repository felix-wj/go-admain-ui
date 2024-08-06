import { defineStore } from "pinia";
import { storage } from "@/utils/storage"
import { getInfo } from "@/api/admin/sys-user"
import { getAppConfig } from "@/api/admin/login"
export const useUserStore = defineStore('user', {
    state: () => {
        return {
            token: storage.getItem('token'),
            uid: storage.getItem('uid'),
            sysConfig: null,
            userInfo: null
        }
    },
    getters: {
        roles: (state) => state?.userInfo?.roles,
    },
    actions: {
        setToken(token) {
            this.token = token;
            storage.setItem('token', token);
        },
        async getUserInfo() {
            try {
                const { data } = await getInfo();
                storage.setItem('uid', data.userId);
                this.userInfo = data;
            } catch (e) {
                console.error(e);
            }
        },
        async getSysConfig() {
            const sysConfig = storage.getItem('sysConfig');
            if (sysConfig) {
                this.sysConfig = sysConfig;
            } else {
                try {
                    const { data, code, errorMessage } = await getAppConfig();
                    if (code === 200) {
                        storage.setItem('sysConfig', data);
                        this.sysConfig = data;
                    }
                } catch (e) {
                    console.error(e);
                }
            }
        },
        userLogOut() {
            storage.removeItem('token');
            this.token = null;
            this.userInfo = null;
        }
    }
})