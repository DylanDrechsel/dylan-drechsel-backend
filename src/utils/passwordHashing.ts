import bcrypt from 'bcryptjs';

const hasLowerCase = (password: string) => {
    return password.toUpperCase() != password
}

const hasUpperCase = (password: string) => {
    return password.toLowerCase() != password
}

const hasSpecialChar = (password: string) => {
    return  /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)
}

const hasNumber = (password: string) => {
    return /\d/.test(password)
}

const checkLength = (password: string) => {
    return (password.length >= 7 && password.length <= 14 ? true : false)
}

const hashPassword = async (password: string) => {
    const checkLowerCase = await hasLowerCase(password)
    const checkUpperCase = await hasUpperCase(password)
    const checkSpecialChar = await hasSpecialChar(password)
    const checkNumber = await hasNumber(password)
    const passwordLength = await checkLength(password)

    if (checkLowerCase === true && checkUpperCase === true && 
        checkSpecialChar === true && checkNumber === true && 
        passwordLength === true) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        password = hash;
    } else {
        throw new Error('Incorrect password format')
    }
    return password
}

export default hashPassword