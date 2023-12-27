"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDatoGeneral = exports.getDatoGeneral = exports.getAllDatosGenerales = exports.deleteDatoGeneral = exports.createDatoGeneral = void 0;
var _DatosGeneralesModel = _interopRequireDefault(require("../models/DatosGeneralesModel.js"));
var _expressValidator = require("express-validator");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; } //importamos el modelo
//**Metodos para el CRUD**/

//Metodo para Crear un Registro de datos generales
var createDatoGeneral = exports.createDatoGeneral = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var errors, datosGenerales, idDatosGenerales;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _expressValidator.body)("nombre").notEmpty().run(req);
        case 3:
          _context.next = 5;
          return (0, _expressValidator.body)("apellido").notEmpty().run(req);
        case 5:
          _context.next = 7;
          return (0, _expressValidator.body)("correo").notEmpty().run(req);
        case 7:
          _context.next = 9;
          return (0, _expressValidator.body)("cod").notEmpty().run(req);
        case 9:
          _context.next = 11;
          return (0, _expressValidator.body)("telefono").notEmpty().run(req);
        case 11:
          _context.next = 13;
          return (0, _expressValidator.body)("pais").notEmpty().run(req);
        case 13:
          _context.next = 15;
          return (0, _expressValidator.body)("disponibilidad").notEmpty().run(req);
        case 15:
          _context.next = 17;
          return (0, _expressValidator.body)("vacante").notEmpty().run(req);
        case 17:
          _context.next = 19;
          return (0, _expressValidator.body)("aniosExperiencia").notEmpty().run(req);
        case 19:
          _context.next = 21;
          return (0, _expressValidator.body)("expectativaSalario").notEmpty().run(req);
        case 21:
          _context.next = 23;
          return (0, _expressValidator.body)("resumen").notEmpty().run(req);
        case 23:
          _context.next = 25;
          return (0, _expressValidator.body)("sistemasOperativos").notEmpty().run(req);
        case 25:
          _context.next = 27;
          return (0, _expressValidator.body)("lenguajesProg").notEmpty().run(req);
        case 27:
          _context.next = 29;
          return (0, _expressValidator.body)("herramientasProg").notEmpty().run(req);
        case 29:
          _context.next = 31;
          return (0, _expressValidator.body)("librerias").notEmpty().run(req);
        case 31:
          _context.next = 33;
          return (0, _expressValidator.body)("basesDatos").notEmpty().run(req);
        case 33:
          _context.next = 35;
          return (0, _expressValidator.body)("clouds").notEmpty().run(req);
        case 35:
          _context.next = 37;
          return (0, _expressValidator.body)("español").notEmpty().run(req);
        case 37:
          _context.next = 39;
          return (0, _expressValidator.body)("ingles").notEmpty().run(req);
        case 39:
          errors = (0, _expressValidator.validationResult)(req);
          if (errors.isEmpty()) {
            _context.next = 42;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            errors: errors.array()
          }));
        case 42:
          _context.next = 44;
          return _DatosGeneralesModel["default"].create(req.body);
        case 44:
          datosGenerales = _context.sent;
          // Acceder al ID de los datos generales recién creados
          idDatosGenerales = datosGenerales.id; // Envía una respuesta exitosa
          res.status(200).json({
            message: "Datos Generales enviados con éxito",
            id: idDatosGenerales
          });
          _context.next = 53;
          break;
        case 49:
          _context.prev = 49;
          _context.t0 = _context["catch"](0);
          // Maneja errores, si los hay
          console.error("Error al insertar Datos Generales:", _context.t0);
          // Envía una respuesta de error
          res.status(500).json({
            error: "Error al insertar Datos Generales"
          });
        case 53:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 49]]);
  }));
  return function createDatoGeneral(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//Metodo para Obtener un Registro de datos generales
var getDatoGeneral = exports.getDatoGeneral = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var id, datosGenerales;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          // Obtiene el ID de los parámetros de ruta
          id = req.params.id; // Busca los datos generales que coincidan con el ID de ruta
          _context2.next = 4;
          return _DatosGeneralesModel["default"].findByPk(id);
        case 4:
          datosGenerales = _context2.sent;
          if (datosGenerales) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            error: "No existe un dato general con ese ID"
          }));
        case 7:
          // Envía una respuesta exitosa con los datos generales
          res.status(200).json(datosGenerales);
          _context2.next = 14;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          // Maneja errores, si los hay
          console.error("Error en getDatoGeneral:", _context2.t0);
          // Envía una respuesta de error
          res.status(500).json({
            error: "Error al obtener los datos generales"
          });
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return function getDatoGeneral(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//Metodo para Obtener todos los Registros de datos generales
var getAllDatosGenerales = exports.getAllDatosGenerales = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var datosGenerales;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _DatosGeneralesModel["default"].findAll();
        case 3:
          datosGenerales = _context3.sent;
          // Envía una respuesta exitosa con los datos generales
          res.status(200).json(datosGenerales);
          _context3.next = 11;
          break;
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          // Maneja errores, si los hay
          console.error("Error en getAllDatosGenerales:", _context3.t0);
          // Envía una respuesta de error
          res.status(500).json({
            error: "Error al obtener los datos generales"
          });
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function getAllDatosGenerales(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//Metodo para Actualizar un Registro de datos generales
var updateDatoGeneral = exports.updateDatoGeneral = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var id, datosGenerales;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          // Obtiene el ID de los parámetros de ruta
          id = req.params.id; // Busca los datos generales que coincidan con el ID de ruta
          _context4.next = 4;
          return _DatosGeneralesModel["default"].findByPk(id);
        case 4:
          datosGenerales = _context4.sent;
          if (!datosGenerales) {
            _context4.next = 11;
            break;
          }
          _context4.next = 8;
          return datosGenerales.update(req.body);
        case 8:
          return _context4.abrupt("return", res.status(200).json({
            message: "Datos Generales actualizados con éxito"
          }));
        case 11:
          // Envía una respuesta de error
          res.status(404).json({
            error: "No existe datos generales"
          });
        case 12:
          _context4.next = 18;
          break;
        case 14:
          _context4.prev = 14;
          _context4.t0 = _context4["catch"](0);
          // Maneja errores, si los hay
          console.error("Error en updateDatoGeneral:", _context4.t0);
          // Envía una respuesta de error
          res.status(500).json({
            error: "Error al actualizar los datos generales"
          });
        case 18:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 14]]);
  }));
  return function updateDatoGeneral(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

//Metodo para Eliminar un Registro de datos generales
var deleteDatoGeneral = exports.deleteDatoGeneral = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var id, datosGenerales;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          // Obtiene el ID de los parámetros de ruta
          id = req.params.id; // Busca los datos generales que coincidan con el ID de ruta
          _context5.next = 4;
          return _DatosGeneralesModel["default"].findByPk(id);
        case 4:
          datosGenerales = _context5.sent;
          if (datosGenerales) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            error: "No existe un dato general con ese ID"
          }));
        case 7:
          if (!datosGenerales) {
            _context5.next = 13;
            break;
          }
          _context5.next = 10;
          return datosGenerales.destroy();
        case 10:
          // Envía una respuesta exitosa
          res.status(200).json({
            message: "Datos Generales eliminados con éxito"
          });
          _context5.next = 14;
          break;
        case 13:
          // Envía una respuesta de error
          res.status(404).json({
            error: "No existe datos generales"
          });
        case 14:
          _context5.next = 20;
          break;
        case 16:
          _context5.prev = 16;
          _context5.t0 = _context5["catch"](0);
          // Maneja errores, si los hay
          console.error("Error en deleteDatoGeneral:", _context5.t0);
          // Envía una respuesta de error
          res.status(500).json({
            error: "Error al eliminar los datos generales"
          });
        case 20:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 16]]);
  }));
  return function deleteDatoGeneral(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();