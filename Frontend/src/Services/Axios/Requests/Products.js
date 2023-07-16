import axiosInstance from '../Configs/configs';

// GET all last products
const getLastProducts = async (count = 6) => axiosInstance.get(`/products?new=${count}`);

export { getLastProducts };
