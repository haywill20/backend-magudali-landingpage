//importamos la coneccion a la base de datos
import db from "../database/db.js";

//importamos sequelize
import { DataTypes } from "sequelize";

const LoginModel = db.define("logins", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},  
  username: { type: DataTypes.STRING, required: true },
  password: { type: DataTypes.STRING, required: true },
});

export default LoginModel;
