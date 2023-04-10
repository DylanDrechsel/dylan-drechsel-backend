import { AuthenticationError } from 'apollo-server';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { JwtPayload } from '../../types/JwtPayload';

dotenv.config();

const ownerSecret: any = process.env.JWT_OWNER_SECRET

const checkOwnerAuth = (context: any) => {
	const authHeader = context.req.headers.authorization

	if (authHeader) {
		const token = authHeader;

		if (token) {
			try {
				const owner = jwt.verify(token, ownerSecret) as JwtPayload;
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