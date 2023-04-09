import { Errors } from "../types/Errors"

const validateRegisterInput = (email: string, password: string) => {
	const errors: Errors = {};

	if (email.trim() === '') {
		errors.email = 'Email must not be empty';
	}
	if (password.trim() === '') {
		errors.password = 'Password must not be empty';
	}

	return {
		errors,
		valid: Object.keys(errors).length < 1,
	};
};

const validateLoginInput = (email: string, password: string) => {
	const errors: Errors = {};

	if (email.trim() === '') {
		errors.email = 'Email must not be empty';
	}
	if (password.trim() === '') {
		errors.password = 'Password must not be empty';
	}
	
	return {
		errors,
		valid: Object.keys(errors).length < 1,
	};
};

export { validateLoginInput, validateRegisterInput };