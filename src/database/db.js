import { Sequelize } from "sequelize";

const db = new Sequelize(
  "maguinev_landingpage_db",
  "maguinev_magudali",
  "magudali@21",
  {
    host: "localhost",
    dialect: "mysql",
  }
);

export default db;
