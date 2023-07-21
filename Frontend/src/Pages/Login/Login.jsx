// react
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// styles
import 'react-toastify/dist/ReactToastify.css';

// packages
import ReCAPTCHA from 'react-google-recaptcha';
import { Form, Formik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';

// components
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import CurveTitle from '../../Components/CurveTitle/CurveTitle';
import AuthInput from '../../Components/AuthInput/AuthInput';
import { userLogin } from '../../Services/Axios/Requests/User';
import { userLoginSchema } from '../../Services/Yup/Login';

// login
function Login() {
	// document title
	document.title = 'جهان‌ساز | JahanSaz - ورود';

	// recaptcha Checkbox state
	const [isCaptchaChecked, setIscaptchChecked] = useState(false);

	// navigator
	const navigate = useNavigate();

	// is submit btn active
	const [isDisable, setIsDisable] = useState(false);

	// jsx
	return (
		<>
			<Header />
			<main className="container">
				{/* login */}
				<section className="mx-auto max-w-[650px] rounded-2xl bg-white/50 p-[10px] shadow-product md:p-5">
					{/* logo */}
					<div className="flex justify-center">
						<Link to="/" className="inline-block cursor-pointer items-center justify-center">
							<svg
								className="inline-block h-[63px] md:h-[141px]"
								viewBox="0 0 79 70"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M13.3131 20.88V26.72C13.3131 27.5307 13.2384 28.1867 13.0891 28.688C12.9397 29.1893 12.6731 29.568 12.2891 29.824C11.9157 30.08 11.3877 30.208 10.7051 30.208C9.97973 30.208 9.21706 30.1387 8.41706 30L8.65706 28.16C8.95573 28.1707 9.29706 28.1653 9.68106 28.144C10.0651 28.1227 10.2837 28.08 10.3371 28.016C10.4011 27.9093 10.4331 27.6533 10.4331 27.248C10.4331 26.8427 10.4331 26.6133 10.4331 26.56V20.88H13.3131ZM19.1259 30L18.8699 28.992C18.3793 29.792 17.6966 30.192 16.8219 30.192C16.1073 30.192 15.5206 29.9947 15.0619 29.6C14.6139 29.1947 14.3899 28.6293 14.3899 27.904C14.3899 27.456 14.5179 27.0667 14.7739 26.736C15.0406 26.3947 15.4033 26.1547 15.8619 26.016C16.4593 25.8453 17.3819 25.7493 18.6299 25.728C18.6299 25.024 18.5979 24.6507 18.5339 24.608C18.4806 24.5653 18.3099 24.544 18.0219 24.544C17.8406 24.544 17.5899 24.5547 17.2699 24.576C16.7579 24.5973 16.0646 24.656 15.1899 24.752C15.1046 24.176 15.0406 23.5573 14.9979 22.896C15.5633 22.7787 16.1553 22.6827 16.7739 22.608C17.3926 22.5227 17.9473 22.48 18.4379 22.48C19.2913 22.48 19.9313 22.624 20.3579 22.912C20.7846 23.1893 21.0619 23.5573 21.1899 24.016C21.3179 24.4747 21.3766 25.056 21.3659 25.76L21.3499 28.112L21.3979 30H19.1259ZM17.7499 28.4C18.0273 28.4 18.3206 28.3467 18.6299 28.24V27.056H18.5019C17.7126 27.056 17.2753 27.0987 17.1899 27.184C17.1366 27.2373 17.0939 27.3173 17.0619 27.424C17.0406 27.5307 17.0299 27.632 17.0299 27.728C17.0299 27.984 17.0886 28.16 17.2059 28.256C17.3233 28.352 17.5046 28.4 17.7499 28.4ZM29.7213 23.104C29.8173 23.2213 29.8866 23.5147 29.9293 23.984C29.9826 24.4533 30.0093 25.168 30.0093 26.128V30H27.2733V26.16C27.2733 26.1173 27.2733 25.9093 27.2733 25.536C27.2733 25.152 27.2466 24.9173 27.1933 24.832C27.1613 24.7893 27.0813 24.7573 26.9533 24.736C26.836 24.7147 26.6973 24.704 26.5373 24.704L26.2653 24.72C25.9666 24.7307 25.6573 24.8 25.3373 24.928V30H22.6013V20.4L25.3373 20.288V22.16C25.3373 22.928 25.3106 23.44 25.2573 23.696L25.2733 23.712C25.9986 22.8907 26.868 22.48 27.8813 22.48C28.2653 22.48 28.6226 22.5333 28.9533 22.64C29.2946 22.7467 29.5506 22.9013 29.7213 23.104ZM35.6572 30L35.4012 28.992C34.9105 29.792 34.2279 30.192 33.3532 30.192C32.6385 30.192 32.0519 29.9947 31.5932 29.6C31.1452 29.1947 30.9212 28.6293 30.9212 27.904C30.9212 27.456 31.0492 27.0667 31.3052 26.736C31.5719 26.3947 31.9345 26.1547 32.3932 26.016C32.9905 25.8453 33.9132 25.7493 35.1612 25.728C35.1612 25.024 35.1292 24.6507 35.0652 24.608C35.0119 24.5653 34.8412 24.544 34.5532 24.544C34.3719 24.544 34.1212 24.5547 33.8012 24.576C33.2892 24.5973 32.5959 24.656 31.7212 24.752C31.6359 24.176 31.5719 23.5573 31.5292 22.896C32.0945 22.7787 32.6865 22.6827 33.3052 22.608C33.9239 22.5227 34.4785 22.48 34.9692 22.48C35.8225 22.48 36.4625 22.624 36.8892 22.912C37.3159 23.1893 37.5932 23.5573 37.7212 24.016C37.8492 24.4747 37.9079 25.056 37.8972 25.76L37.8812 28.112L37.9292 30H35.6572ZM34.2812 28.4C34.5585 28.4 34.8519 28.3467 35.1612 28.24V27.056H35.0332C34.2439 27.056 33.8065 27.0987 33.7212 27.184C33.6679 27.2373 33.6252 27.3173 33.5932 27.424C33.5719 27.5307 33.5612 27.632 33.5612 27.728C33.5612 27.984 33.6199 28.16 33.7372 28.256C33.8545 28.352 34.0359 28.4 34.2812 28.4ZM46.2526 23.104C46.3486 23.2213 46.4179 23.5147 46.4606 23.984C46.5139 24.4533 46.5406 25.168 46.5406 26.128V30H43.8046V26.16V25.504C43.8046 25.1627 43.7779 24.9493 43.7246 24.864C43.6392 24.7573 43.4419 24.704 43.1326 24.704C42.9832 24.704 42.8712 24.7093 42.7966 24.72C42.4979 24.7307 42.1886 24.8 41.8686 24.928V30H39.1326V22.64H41.3566L41.6606 23.872C42.4286 22.944 43.3459 22.48 44.4126 22.48C44.7966 22.48 45.1539 22.5333 45.4846 22.64C45.8259 22.7467 46.0819 22.9013 46.2526 23.104ZM50.5724 23.344C50.5724 23.568 50.6844 23.744 50.9084 23.872C51.1431 24 51.5058 24.1387 51.9964 24.288C52.5831 24.48 53.0631 24.6667 53.4364 24.848C53.8204 25.0293 54.1511 25.312 54.4284 25.696C54.7164 26.08 54.8604 26.5813 54.8604 27.2C54.8604 29.184 53.5698 30.176 50.9884 30.176C50.5618 30.176 50.0391 30.1387 49.4204 30.064C48.8124 29.9893 48.2578 29.8933 47.7564 29.776C47.7778 29.552 47.8204 29.2267 47.8844 28.8C47.9591 28.3627 48.0284 28.0373 48.0924 27.824C48.4658 27.8773 49.0258 27.9413 49.7724 28.016C50.5298 28.0907 51.1004 28.128 51.4844 28.128C51.7084 28.128 51.8418 28.112 51.8844 28.08C51.9484 28.0373 51.9964 27.968 52.0284 27.872C52.0711 27.7653 52.0924 27.6747 52.0924 27.6C52.0924 27.3867 51.9911 27.2267 51.7884 27.12C51.5858 27.0027 51.2391 26.864 50.7484 26.704C50.1618 26.5227 49.6764 26.336 49.2924 26.144C48.9084 25.952 48.5724 25.6533 48.2844 25.248C47.9964 24.8427 47.8524 24.3093 47.8524 23.648C47.8524 23.1787 47.9591 22.72 48.1724 22.272C48.3858 21.8133 48.6044 21.504 48.8284 21.344C48.9991 21.2267 49.3511 21.1147 49.8844 21.008C50.4178 20.9013 50.9191 20.848 51.3884 20.848C52.5831 20.848 53.5591 20.96 54.3164 21.184C54.3058 21.3973 54.2684 21.6907 54.2044 22.064C54.1511 22.4373 54.0924 22.7787 54.0284 23.088L53.6604 23.072C52.2738 22.976 51.3884 22.928 51.0044 22.928C50.8444 22.928 50.7538 22.9333 50.7324 22.944C50.6898 22.9653 50.6524 23.0133 50.6204 23.088C50.5884 23.1627 50.5724 23.248 50.5724 23.344ZM60.4228 30L60.1668 28.992C59.6761 29.792 58.9935 30.192 58.1188 30.192C57.4041 30.192 56.8175 29.9947 56.3588 29.6C55.9108 29.1947 55.6868 28.6293 55.6868 27.904C55.6868 27.456 55.8148 27.0667 56.0708 26.736C56.3375 26.3947 56.7001 26.1547 57.1588 26.016C57.7561 25.8453 58.6788 25.7493 59.9268 25.728C59.9268 25.024 59.8948 24.6507 59.8308 24.608C59.7775 24.5653 59.6068 24.544 59.3188 24.544C59.1375 24.544 58.8868 24.5547 58.5668 24.576C58.0548 24.5973 57.3615 24.656 56.4868 24.752C56.4015 24.176 56.3375 23.5573 56.2948 22.896C56.8601 22.7787 57.4521 22.6827 58.0708 22.608C58.6895 22.5227 59.2441 22.48 59.7348 22.48C60.5881 22.48 61.2281 22.624 61.6548 22.912C62.0815 23.1893 62.3588 23.5573 62.4868 24.016C62.6148 24.4747 62.6735 25.056 62.6628 25.76L62.6468 28.112L62.6948 30H60.4228ZM59.0468 28.4C59.3241 28.4 59.6175 28.3467 59.9268 28.24V27.056H59.7988C59.0095 27.056 58.5721 27.0987 58.4868 27.184C58.4335 27.2373 58.3908 27.3173 58.3588 27.424C58.3375 27.5307 58.3268 27.632 58.3268 27.728C58.3268 27.984 58.3855 28.16 58.5028 28.256C58.6201 28.352 58.8015 28.4 59.0468 28.4ZM70.2822 28.208V30H63.6742V28.16L67.2262 24.384H63.7702V22.64H70.2022V24.464L66.6662 28.208H70.2822ZM17.0619 41.728C16.8379 41.6427 16.5445 41.4773 16.1819 41.232C15.8192 40.976 15.5685 40.7573 15.4299 40.576C15.4619 40.4373 15.5419 40.2507 15.6699 40.016C15.8085 39.7707 15.9632 39.552 16.1339 39.36C16.3045 39.1573 16.4539 39.0453 16.5819 39.024C16.6992 39.0027 16.8752 39.056 17.1099 39.184C17.3552 39.312 17.5792 39.472 17.7819 39.664C17.9952 39.8453 18.1125 39.9893 18.1339 40.096C18.1765 40.256 18.0539 40.5387 17.7659 40.944C17.4885 41.3387 17.2539 41.6 17.0619 41.728ZM16.1179 50.096C15.7445 49.9573 15.3072 49.7173 14.8059 49.376C14.2939 49.0453 13.9259 48.7413 13.7019 48.464C14.2139 47.7067 14.7152 46.8053 15.2059 45.76C15.7179 44.6933 16.1392 43.616 16.4699 42.528L18.7099 43.28C18.5285 44.336 18.1979 45.4933 17.7179 46.752C17.4192 47.5307 17.1099 48.224 16.7899 48.832C16.4805 49.4507 16.2565 49.872 16.1179 50.096ZM23.0134 43.024C23.184 43.024 23.296 43.1467 23.3494 43.392C23.4134 43.6373 23.4454 44.0107 23.4454 44.512C23.4454 45.024 23.4134 45.4027 23.3494 45.648C23.2854 45.8827 23.1734 46 23.0134 46C22.4267 46 21.856 45.9627 21.3014 45.888C20.7574 45.8133 20.2987 45.696 19.9254 45.536C19.8294 45.152 19.7494 43.4187 19.6854 40.336L19.5894 37.088L22.1654 36.944C22.2614 38.5333 22.3094 39.9947 22.3094 41.328C22.3094 41.7333 22.2987 42.2773 22.2774 42.96C22.544 43.0027 22.7894 43.024 23.0134 43.024ZM34.6316 40.528C34.8343 41.136 34.9356 41.84 34.9356 42.64C34.9356 43.2053 34.877 43.744 34.7596 44.256C34.653 44.768 34.493 45.1947 34.2796 45.536C33.5543 45.8773 32.8503 46.048 32.1676 46.048C31.6663 46.048 31.2183 45.952 30.8236 45.76C30.4396 45.5573 30.1303 45.264 29.8956 44.88H29.7516C29.517 45.264 29.213 45.5627 28.8396 45.776C28.477 45.9787 28.0716 46.08 27.6236 46.08C27.2076 46.08 26.813 45.9893 26.4396 45.808C26.077 45.616 25.789 45.36 25.5756 45.04H25.4316C25.0796 45.4347 24.717 45.696 24.3436 45.824C23.981 45.9413 23.5383 46 23.0156 46C22.8556 46 22.7436 45.8827 22.6796 45.648C22.6156 45.4027 22.5836 45.024 22.5836 44.512C22.5836 44.0107 22.6156 43.6373 22.6796 43.392C22.733 43.1467 22.845 43.024 23.0156 43.024C23.453 43.024 23.8156 42.9973 24.1036 42.944C24.4023 42.88 24.6743 42.7253 24.9196 42.48C25.165 42.224 25.3196 41.8293 25.3836 41.296H26.7116C26.765 42.512 27.149 43.12 27.8636 43.12C28.2263 43.12 28.5463 42.976 28.8236 42.688C29.1116 42.4 29.325 41.9467 29.4636 41.328L30.8076 41.536C30.7863 41.728 30.7756 41.8667 30.7756 41.952C30.7756 42.7733 31.1223 43.184 31.8156 43.184C32.0396 43.184 32.3223 43.136 32.6636 43.04C32.5676 42.6347 32.4503 42.2347 32.3116 41.84C32.1836 41.4453 32.1036 41.2053 32.0716 41.12L34.6316 40.528ZM45.0059 40.736C45.3259 42.08 45.4859 43.296 45.4859 44.384C45.4859 45.952 45.1445 47.216 44.4619 48.176C42.9685 48.624 41.6459 48.848 40.4939 48.848C38.9899 48.848 37.8752 48.5333 37.1499 47.904C36.4245 47.2853 36.0619 46.3893 36.0619 45.216C36.0619 44.0747 36.3979 42.6667 37.0699 40.992L39.2779 41.712C38.8832 42.8107 38.6859 43.6587 38.6859 44.256C38.6859 44.8 38.8352 45.2107 39.1339 45.488C39.4432 45.7547 39.9179 45.888 40.5579 45.888C40.8352 45.888 41.1765 45.8613 41.5819 45.808C41.9979 45.7547 42.4192 45.6747 42.8459 45.568C42.8139 44.8107 42.7605 44.1333 42.6859 43.536C42.6219 42.9387 42.5312 42.1867 42.4139 41.28L45.0059 40.736ZM41.1019 40.16C40.8779 40.0747 40.5845 39.9093 40.2219 39.664C39.8592 39.408 39.6085 39.1893 39.4699 39.008C39.5019 38.8693 39.5819 38.6827 39.7099 38.448C39.8485 38.2027 40.0032 37.984 40.1739 37.792C40.3445 37.5893 40.4939 37.4773 40.6219 37.456C40.7392 37.4347 40.9152 37.488 41.1499 37.616C41.3952 37.744 41.6192 37.904 41.8219 38.096C42.0352 38.2773 42.1525 38.4213 42.1739 38.528C42.2165 38.688 42.0939 38.9707 41.8059 39.376C41.5285 39.7707 41.2939 40.032 41.1019 40.16ZM49.8728 43.024C50.0434 43.024 50.1554 43.1467 50.2088 43.392C50.2728 43.6373 50.3048 44.0107 50.3048 44.512C50.3048 45.024 50.2728 45.4027 50.2088 45.648C50.1448 45.8827 50.0328 46 49.8728 46C49.2861 46 48.7154 45.9627 48.1608 45.888C47.6168 45.8133 47.1581 45.696 46.7848 45.536C46.6888 45.152 46.6088 43.4187 46.5448 40.336L46.4488 37.088L49.0248 36.944C49.1208 38.5333 49.1688 39.9947 49.1688 41.328C49.1688 41.7333 49.1581 42.2773 49.1368 42.96C49.4034 43.0027 49.6488 43.024 49.8728 43.024ZM56.435 43.024C56.6057 43.024 56.7177 43.1467 56.771 43.392C56.835 43.6373 56.867 44.0107 56.867 44.512C56.867 45.024 56.835 45.4027 56.771 45.648C56.707 45.8827 56.595 46 56.435 46C56.147 46 55.763 45.9573 55.283 45.872C55.0057 46.6827 54.6803 47.4827 54.307 48.272C53.9443 49.072 53.715 49.5307 53.619 49.648C53.2457 49.5093 52.8083 49.2693 52.307 48.928C51.8163 48.5973 51.4537 48.2933 51.219 48.016C51.475 47.44 51.6777 46.7413 51.827 45.92C51.379 45.9733 50.7283 46 49.875 46C49.715 46 49.603 45.8827 49.539 45.648C49.475 45.4027 49.443 45.024 49.443 44.512C49.443 44.0107 49.475 43.6373 49.539 43.392C49.5923 43.1467 49.7043 43.024 49.875 43.024C49.9923 43.024 50.323 43.008 50.867 42.976C51.1443 42.9547 51.347 42.944 51.475 42.944C51.9123 42.944 52.2377 43.1147 52.451 43.456C52.675 43.7867 52.8083 44.352 52.851 45.152H52.931C53.2617 44.512 53.5657 43.7547 53.843 42.88L53.987 42.784C54.4243 42.88 54.8777 42.944 55.347 42.976C55.827 43.008 56.1897 43.024 56.435 43.024ZM61.1415 39.872C62.0375 40.448 62.7148 40.8747 63.1735 41.152C63.6322 41.4187 63.9575 41.552 64.1495 41.552C64.1175 42.16 64.0482 42.6773 63.9415 43.104C63.8455 43.52 63.6802 44 63.4455 44.544C63.1682 44.5227 62.9655 44.512 62.8375 44.512C62.2082 44.512 61.5148 44.6453 60.7575 44.912C60.4695 45.0187 60.2028 45.12 59.9575 45.216C59.3068 45.472 58.7255 45.6693 58.2135 45.808C57.7015 45.936 57.1095 46 56.4375 46C56.2775 46 56.1655 45.8827 56.1015 45.648C56.0375 45.4027 56.0055 45.024 56.0055 44.512C56.0055 44.0107 56.0375 43.6373 56.1015 43.392C56.1548 43.1467 56.2668 43.024 56.4375 43.024C57.0135 43.024 57.5042 42.9867 57.9095 42.912C58.3255 42.8373 58.8695 42.72 59.5415 42.56L59.9415 42.464L60.9335 42.24C60.5282 42.016 60.1868 41.8507 59.9095 41.744C59.6108 41.6267 59.2908 41.5467 58.9495 41.504C58.6082 41.4507 58.1655 41.408 57.6215 41.376L57.2695 41.36L57.2055 41.296C57.2482 40.8907 57.3282 40.4427 57.4455 39.952C57.5735 39.4507 57.6962 39.0827 57.8135 38.848C58.0375 38.816 58.2455 38.8 58.4375 38.8C58.8322 38.8 59.2002 38.864 59.5415 38.992C59.8828 39.1093 60.2295 39.28 60.5815 39.504L61.1415 39.872ZM60.7255 49.344C60.5015 49.2587 60.2082 49.088 59.8455 48.832C59.4828 48.5867 59.2322 48.3733 59.0935 48.192C59.1255 48.0533 59.2055 47.8613 59.3335 47.616C59.4722 47.3813 59.6268 47.1627 59.7975 46.96C59.9682 46.768 60.1175 46.6613 60.2455 46.64C60.3628 46.6187 60.5388 46.672 60.7735 46.8C61.0188 46.928 61.2428 47.0827 61.4455 47.264C61.6588 47.456 61.7762 47.6053 61.7975 47.712C61.8402 47.872 61.7175 48.1493 61.4295 48.544C61.1522 48.9493 60.9175 49.216 60.7255 49.344Z"
									fill="#EAB308"
								/>
							</svg>
						</Link>
					</div>
					{/* title */}
					<div className="relative ">
						<CurveTitle
							title="ورود به حساب کاربری"
							haveButton={true}
							buttonText="حساب‌کاربری ندارید؟"
						/>
					</div>
					<Formik
						// initial values
						initialValues={{
							username: '',
							password: ''
						}}
						// validation
						validationSchema={userLoginSchema}
						// submit event
						onSubmit={(values) => {
							isCaptchaChecked &&
								userLogin(values)
									.then((res) => {
										setIsDisable(true);

										// show notification
										if (res.status === 201) {
											toast.success('با موفقیت وارد شدید ✅', {
												position: 'bottom-right',
												autoClose: 5000,
												hideProgressBar: false,
												closeOnClick: true,
												pauseOnHover: false,
												draggable: true,
												progress: undefined,
												theme: 'light'
											});

											// set token to localstorage
											localStorage.setItem('user', res.data.accessToken);

											// navigate to panel
											setTimeout(() => navigate('/'), 4000);
										}
									})
									.catch(() => {
										// show notification
										toast.error('اطلاعات وارد شده صحیح نمی‌باشد ❌', {
											position: 'bottom-right',
											autoClose: 5000,
											hideProgressBar: false,
											closeOnClick: true,
											pauseOnHover: false,
											draggable: true,
											progress: undefined,
											theme: 'light'
										});

										// reload page
										setTimeout(() => location.reload(), 4000);
									});
						}}
					>
						<Form className="relative flex flex-col gap-y-5">
							{/* username */}
							<AuthInput
								label="نام کاربری"
								name="username"
								placeholder="مثلا: jahansaz"
								type="text"
							/>
							{/* password */}
							<AuthInput
								label="رمز عبور"
								name="password"
								placeholder="مثلا: $JAHANsaz2020"
								type="password"
							/>
							{/* google recaptcha */}
							<ReCAPTCHA
								type="image"
								onChange={() => setIscaptchChecked(!isCaptchaChecked)}
								className="mt-5 self-center md:mt-9"
								sitekey="6Les0ysnAAAAAG_EtghJQCTJ2aUjdG1NSuDwOhcL"
							/>
							<button
								disabled={isDisable}
								type="submit"
								className="md:text-x mt-[18px] h-10 w-[120px] self-center rounded-lg bg-yellow-500/50  text-base text-gray-800 transition-colors hover:bg-yellow-500/70
									md:mt-9 md:h-[56px] md:w-[180px] md:text-xl"
							>
								{isDisable ? 'صبر کنید ⏳' : 'ورود'}
							</button>
						</Form>
					</Formik>
					<ul className="mr-5 list-disc py-12 text-[10px] child:text-gray-600 md:mr-10 md:text-[15px]">
						<li>نام کاربری عبارتی حداقل ۳ کاراکتریست از حروف و اعداد لاتین.</li>
						<li>رمز عبور عبارتی حداقل ۸ کاراکتریست از حروف بزرگ و کوچک و اعداد لاتین.</li>
					</ul>
					<span className="flex justify-center text-[10px] text-gray-600 md:text-xs">
						ورود شما به معنای پذیرش شرایط و قوانین
						<span className="text-yellow-500"> جهان‌ساز </span>است.
					</span>
				</section>
			</main>
			{/* toastify */}
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={true}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover={false}
				theme="light"
			/>
			<Footer />
		</>
	);
}

// exports
export default Login;
