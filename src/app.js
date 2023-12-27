import express from "express";
import cors from "cors";

//importamos la conexion a la base de datos
import db from "./database/db.js";

//importamos nuestro enrutador
import routes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(express.json());
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
