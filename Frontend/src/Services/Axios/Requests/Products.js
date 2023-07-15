import axiosInstance from '../Configs/configs';

// GET all last products
const getLastProducts = async (count = 6) => {
	return axiosInstance.get(`/products?new=${count}`);
};

export { getLastProducts };
