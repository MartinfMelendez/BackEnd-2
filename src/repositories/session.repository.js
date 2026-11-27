import userMongo from '../DAO/mongo/user.mongo.js'

export default class SessionRepository {
    async create(data) {
        return await userMongo.create(data)
    }
    async getAll() {
        return await userMongo.getAll()
    }
    async getByEmail(email) {
        return await userMongo.getByEmail(email)
    }
}