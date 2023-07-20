import axiosInstance from '../Configs/configs';

// GET all last products
const getLastProducts = async (count = 6) => axiosInstance.get(`/products?new=${count}`);

// GET best sellers products
const getTopSellers = async (count = 12) => axiosInstance.get(`/products?bestseller=${count}`);

// exports
export { getLastProducts, getTopSellers };
