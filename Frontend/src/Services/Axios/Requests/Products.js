// axios
import axiosInstance from '../Configs/configs';

// GET all last products
const getLastProducts = async (count = 6) => axiosInstance.get(`/products?new=${count}`);

// GET best sellers products
const getTopSellers = async (count = 12) => axiosInstance.get(`/products?bestseller=${count}`);

// GET all products
const getAllProducts = async () => axiosInstance.get('/products');

// GET all categories
const getAllCategories = async () => axiosInstance.get(`products/getCategories`);

// GET categorized products
const getFilteredProducts = async (categoryName) =>
	axiosInstance.get(`products?category=${categoryName}`);

// exports
export { getLastProducts, getTopSellers, getAllProducts, getAllCategories, getFilteredProducts };
