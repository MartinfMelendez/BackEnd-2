import SessionRepository from "../repository/session.repository.js";
import { createHash } from "../utils/password.js";
import APIError from "../utils/APIErrors.js";
class SessionService {
    constructor() {
        this.repository = new SessionRepository()
    }

    async create(data) {
        const { firstName, lastName, email, password } = data
        if (!firstName || !lastName || !email || !password) {
            throw new APIError('Todos los campos son obligatorios', 400)
        }
        if (password.length <= 8) {
            throw new APIError('La contraseña debe contener 8 o mas caracteres', 400)
        }
        const emailNormalizado = email.toLowerCase().trim()
        const pass = password.trim()
        const passHash = await createHash(pass)

        const existe = await this.repository.getByEmail(emailNormalizado)

        if (existe) {
            throw new APIError('Email ya se encuentra registrado', 409)
        }
        const usuarioNormalizado = {
            firstName: firstName.trim().toLowerCase(),
            lastName: lastName.trim().toLowerCase(),
            email: emailNormalizado,
            password: passHash
        }

        const newUser = await this.repository.create(usuarioNormalizado)

        return {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email
        }

    }

    async getAll() {
        const allUser = await this.repository.getAll();

        return allUser.map(user => ({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        }))
    }
}

const sessionService = new SessionService();

export default sessionService;