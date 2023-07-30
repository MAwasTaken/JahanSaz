// axios
import axiosInstance from '../Configs/configs';

// POST login
const userLogin = async (userInfos) => axiosInstance.post('/auth/login', userInfos);

// POST register
const userRegister = async (userInfos) => axiosInstance.post('/auth/register', userInfos);

// exports
export { userLogin, userRegister };
