const validateRegisterInput = (email: string, password: string) => {
	const error: any = {};

	if (email.trim() === '') {
		error.email = 'Email must not be empty';
	}
	if (password.trim() === '') {
		error.password = 'Password must not be empty';
	}

	return {
		error,
		valid: Object.keys(error).length < 1,
	};
};

const validateLoginInput = (email: string, password: string) => {
	const error: any = {};

	if (email.trim() === '') {
		error.email = 'Email must not be empty';
	}
	if (password.trim() === '') {
		error.password = 'Password must not be empty';
	}
	
	return {
		error,
		valid: Object.keys(error).length < 1,
	};
};

export { validateLoginInput, validateRegisterInput };