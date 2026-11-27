class ManagerMongo {
    constructor(model) {
        this.model = model;
    }


    async create(document) {
        return await this.model.create(document);
    }

    async getAll() {
        return await this.model.find().lean();
    }

    async getById(id) {
        return await this.model.findById(id).lean();
    }
}

export default ManagerMongo;