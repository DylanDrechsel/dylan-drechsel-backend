import { AuthenticationError } from 'apollo-server';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const adminSecret: any = process.env.JWT_ADMIN_SECRET

const checkOwnerAuth = (context: any) => {
	const authHeader = context.req.headers.authorization

	if (authHeader) {
		const token = authHeader;

		if (token) {
			try {
				const owner = jwt.verify(token, adminSecret);
				return owner
			} catch (err) {
				throw new AuthenticationError('Error: Invalid token')
			}
		}
		throw new Error('Error: Invalid Header, check header contents')
	}

	throw new Error('Error: No Auth header found');
};

export default checkOwnerAuth;