import { Sequelize } from "sequelize";

const db = new Sequelize("maguinev_landingpage_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
