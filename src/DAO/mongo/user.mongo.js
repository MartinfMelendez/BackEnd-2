import UserModel from "../models/users.model.js";
import ManagerMongo from "./manager.mongo.js";

class UserMongo extends ManagerMongo {
    constructor() {
        super(UserModel);
    }

    async getByEmail(email) {
        return await this.model.findOne({ email }).lean();
    }
}

const userMongo = new UserMongo();

export default userMongo;