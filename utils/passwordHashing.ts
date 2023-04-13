import bcrypt from 'bcryptjs';

const validatePassword = (password: string) => {
    const regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(password);
}

const hashPassword = async (password: string) => {
    if (validatePassword(password)) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } else {
        throw new Error('Incorrect password format')
    }
}

export default hashPassword