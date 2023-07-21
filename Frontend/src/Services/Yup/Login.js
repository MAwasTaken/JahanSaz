import { object, string } from 'yup';

const userLoginSchema = object().shape({
	username: string()
		.min(3, 'طول نام کاربری باید حداقل ۳ کاراکتر باشد!')
		.required('وارد کردن نام‌کاربری اجباری می‌باشد!'),

	password: string()
		.min(8, 'طول رمزعبور باید حداقل ۸ کاراکتر باشد!')
		.required('وارد کردن رمزعبور اجباری می‌باشد!')
});

export { userLoginSchema };
