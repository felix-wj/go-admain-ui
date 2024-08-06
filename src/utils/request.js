import axios from 'axios'
import { useUserStore } from '@/store/userInfo'
import { Message } from '@arco-design/web-vue'
const service = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        const store = useUserStore();
        if(store.token){
            config.headers['Authorization'] = 'Bearer ' + store.token;
            config.headers['Content-Type'] = 'application/json';
        }
        return config
    },
    error => {
        console.log(error);
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response =>{
        return response.data;
    },
    error => {
        const store = useUserStore();
        const {code,msg} = error.response.data;
        if(code === 401){
            Message.error({
                content: '登录过期，请重新登录',
                duration: 3000
            });
            store.userLogOut();
            return router.push('/login');
        }else{
            Message.error({
                content: error.message,
                duration: 3000
            });
            return Promise.reject(error);
        }
    }
);

export default service;