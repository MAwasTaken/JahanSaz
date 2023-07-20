import axiosInstance from '../Configs/configs';

// LOGIN
const userLogin = async (userInfos) => axiosInstance.post('/auth/login', userInfos);

// exports 
export { userLogin };
