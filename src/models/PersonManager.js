const { SQLGenericError } = require("../errors/SQLGenericError");
const AbstractManager = require("./AbstractManager");

class PersonManager extends AbstractManager {
  constructor() {
    super({ table: "person" });
  }

  // CREATE
  async addOne(name, description, password) {
    try {
      const [result] = await this.database.query(
        `INSERT INTO ${this.table} (name, description, password) VALUES (?, ?, ?)`,
        [name, description, password]
      );

      return result;
    } catch (e) {
      throw new SQLGenericError();
    }
  }

  // READ
  async readOne(id) {
    const [person] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE id=?`,
      [id]
    );

    return person;
  }

  async readAll() {
    const [persons] = await this.database.query(`SELECT * FROM ${this.table}`);

    return persons;
  }

  // UPDATE
  async editOne(id, name, description) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET name=?, description=? WHERE id=?`,
      [name, description, id]
    );

    return result;
  }

  // DELETE
  async deleteOne(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );

    return result;
  }
}

module.exports = PersonManager;
