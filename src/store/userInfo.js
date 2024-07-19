import { defineStore } from "pinia";
import { storage }  from "@/utils/storage"
export const useUserStore = defineStore( 'user',{
    state:()=>{
        return {
            token : storage.getItem('token'),
            uid : storage.getItem('uid'),
            sysConfig : null,
            userInfo : null
        }
    },
    getters:{
        roles: (state) => state?.userInfo?.roles ,
    },
    actions:{
        setToken(token){
            
        }
    }
}

)