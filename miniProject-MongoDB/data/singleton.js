const { MongoClient } = require("mongodb");

module.exports = class mongoDBconnection {
    #DB_NAME = "FirstMongoDB";
    #DB_URL = `mongodb://0.0.0.0:27017/${this.#DB_NAME}`;
    #DB_TUNNEL = null;
    async #connect(collection_name) {
        try {
            const client = new MongoClient(this.#DB_URL);      
            const db = client.db();
            this.#DB_TUNNEL =  db.collection(collection_name)
            return this.#DB_TUNNEL;
        } catch (error) {
            console.log(error.message);
        }
    }
    async getDBtunnel(collection_name) {
        try {
            if (this.#DB_TUNNEL) {
                console.log("db tunnel is already exist!");
                return this.#DB_TUNNEL;
            }
            this.#DB_TUNNEL = await this.#connect(collection_name);
            return this.#DB_TUNNEL;
        } catch (error) {
            console.log(error.message);
        }
    }
};