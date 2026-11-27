import SessionRepository from "../repository/session.repository";

class SessionService {
    constructor() {
        this.repository = new SessionRepository()
    }

    async create(data) {
        const { firstName, lastName, email, password } = data
        if (!firstName || !lastName || !email || !password) {
            throw new Error('Todos los campos son obligatorios')
        }
        if (password.length >= 8) {
            throw new Error('La contraseña debe contener 8 o mas caracteres')
        }
        const emailNormalizado = email.toLowerCase().trim()

        const existe = await this.repository.getByEmail(emailNormalizado)
        if (!existe) {
            throw new Error('Email ya registrado')
        }
        const newUser = await this.repository.create(firstName.trim().toLowerCase(), lastName.trim().toLowerCase(), emailNormalizado, password.trim())

        return {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email
        }

    }
}

export default SessionService;