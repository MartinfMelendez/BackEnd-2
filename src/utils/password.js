import bcrypt from 'bcrypt'

export const createHash = async (pass) => {
    return await bcrypt.hash(pass, 10)
}