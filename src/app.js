import express from "express";
import cors from "cors";

//importamos la conexion a la base de datos
import db from "./database/db.js";

//importamos nuestro enrutador
import routes from "./routes/routes.js";
import cookieParser from "cookie-parser";

import dotenv from "dotenv";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:5173"],
    credentials: true,
  })
);
app.use(express.json());

dotenv.config({ path: "./.env" });

app.use(cookieParser());
app.use("/", routes);
async function startServer() {
  try {
    await db.authenticate();
    console.log("Conexion exitosa a la base de datos");
    /* app.get("/", (req, res) => {
  res.send("Hola Mundo");
}); */

    app.use("/images", express.static("./uploads/comercios"));
    app.listen(8000, () => {
      console.log("Server UP running in http://localhost:8000/");
    });
  } catch (error) {
    console.log(`El error de conexion es: ${error}`);
  }
}

startServer(); // Llama a la función para iniciar el servidor
