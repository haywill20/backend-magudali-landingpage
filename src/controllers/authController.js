import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

import LoginModel from "../models/LoginModel.js";
import { promisify } from "util";

export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        if(!username || !password){
            return res.status(400).json({message: "Por favor, ingrese todos los campos"});
        } else {
            const localizedUser = await LoginModel.findOne({ where: { username: username } });

            if (!localizedUser || !(await bcryptjs.compare(password, localizedUser.password))) {
                return res.status(400).json({ message: "Usuario no encontrado o password incorrecto", type: "not_exist_or_incorrect_password" });
            } else {
                const id = localizedUser.id;
                const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_TIEMPO_EXPIRA,
                });

                console.log("Token " + token + " user " + localizedUser.username);

                const cookieOptions = {
                    expires: new Date(
                        //Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                        //Date.now() + process.env.JWT_COOKIE_EXPIRES * 4 * 60 * 60 * 1000
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 30 * 60 * 1000
                    ),
                    httpOnly: false,
                };
                res.cookie("jwt", token, cookieOptions);
                
                res.status(200).json({ token, username: localizedUser.username });
            }
        }
    } catch (error) {
        console.error("Error al obtener usuario:", error);
        res.status(500).json({ error: "Error al obtener usuario" });
    }
}

export const isAuthenticaded = async (req, res, next) => {
    const token = req.cookies.jwt;    
    console.log("Token desde el cliente: ", token);
    if (token) {
      try {
        const decodificada = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
        
        console.log("Decodificada: ", decodificada);

        const user = await LoginModel.findByPk(decodificada.id);
        if (!user) {
          return res.status(401).json({ message: "No autorizado", type: "not_authorized"});
        }
        req.user = user;
        res.status(200).json({ user });
        next();
      } catch (error) {
        console.error("Error al verificar token:", error);
        return res.status(401).json({ message: "Token inválido" });
      }
    } else {
      return res.status(401).json({ message: "No autorizado" });
    }
  };
