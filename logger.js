import winston from 'winston';

// Configurar winston
const logger = winston.createLogger({
  level: 'info', // Nivel de registro mínimo
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(), // Transporte para la consola
    new winston.transports.File({ filename: 'error.log', level: 'error' }) // Transporte para archivos de error
  ]
});

export default logger;
