"use strict";

var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _db = _interopRequireDefault(require("./database/db.js"));
var _routes = _interopRequireDefault(require("./routes/routes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//importamos la conexion a la base de datos

//importamos nuestro enrutador

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use("/", _routes["default"]);
try {
  await _db["default"].authenticate();
  console.log("Conexion exitosa a la base de datos");
} catch (error) {
  console.log("El error de conexion es: ".concat(error));
}

/* app.get("/", (req, res) => {
  res.send("Hola Mundo");
}); */

app.use("/images", _express["default"]["static"]("./uploads/comercios"));
app.listen(8000, function () {
  console.log("Server UP running in http://localhost:8000/");
});