import { Sequelize } from "sequelize";

const db = new Sequelize("ladingpage_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
