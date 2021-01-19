const DB = require("../DB");

class Model {
    constructor(name){
        this.name = name;
    }
    async run(query){
        try {
            const resp = await DB.query(query);
            return resp;
        } catch (error) {
            throw new Error(error);
        }
    };
    async findById(id){
        if(!id){
            throw new Error("ID not provided");
        } 
        const query = `SELECT * FROM ${this.name} WHERE id = ${this.parseInt(id,10)}`;
        const resp = await this.run(query);
        return resp;
    };
    async findByIdAndDelete(id) {
        if (id) {
            const query = `DELETE FROM ${this.name} WHERE id = ${this.parseInt(id,10)}`;
            const resp = await this.run(query);
            return resp;
        } else {
            throw new Error("ID not provided");            
        }
    };
    async findByIdAndUpdate(id, fields) {
        if (id) {
            const entries = Object.entries(fields);
            const query = `UPDATE ${this.name} SET ${entries.map(([column, value])=>`${column}='${value}'`).join(",")} WHERE id=${parseInt(id)};`
            const resp = await this.run(query);
            return resp
        } else {
            throw new Error("ID not provided");
        }
    };
    async FindOne(fields) {
        if (!fields||Object.values(fields).length===0) {
            const query = `SELECT * FROM ${this.name}`;
            const resp = await this.run(query);
            return resp;
        } else {
            const entries = Object.entries(fields);
            const where = `${entries.map(([key, value]) => `${key}='${value}'`).join(" AND ")};`
            const query = `SELECT * FROM ${this.name} WHERE ${where};`
            const resp = await this.run(query);
            return resp;
        }
    };
    async save(fields) {
        if(!fields || Object.values(fields).length===0){
            throw new Error("values not provided");
        }
        const columns = Object.keys(fields);
        const values = Object.values(fields);
        const query = `INSERT INTO  ${this.name} (${columns.join(",")}) VALUES (${values.map(v=>`'${v}'`).join(",")});`
        const resp = await this.run(query);
        return resp
    }
};
 module.exports = Model;