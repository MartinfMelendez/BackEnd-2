import bcrypt from 'bcrypt'

export const createHash = async (pass) => {
    return await bcrypt.hash(pass, 10)
}

export const compareHash = async (pass, passHashed) => {
    return await bcrypt.compare(pass, passHashed)
}