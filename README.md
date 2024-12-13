# Magudali Backend

## Descripción

## Instalación

Cuando te bajas el proyecto de github ejecuta el siguiente comando: npm install

### Comando de Ejecución

para ejecutar el proyecto utiliza: npm run dev

# Tipos de Commit

A continuación se detallan los tipos de commit comunes y sus significados:

- **feat**: Se utiliza cuando se introduce una nueva característica en el código.
- **fix**: Se utiliza cuando se corrige un error o un fallo en el código.
- **docs**: Se utiliza cuando se realizan cambios en la documentación del proyecto.
- **style**: Se utiliza para cambios que no afectan al significado del código (espacios en blanco, formato, etc.).
- **refactor**: Se utiliza cuando se realizan cambios en el código que no corrigen errores ni agregan nuevas características, pero mejoran su estructura o legibilidad.
- **test**: Se utiliza cuando se añaden pruebas unitarias o se realizan cambios en las pruebas existentes.
- **chore**: Se utiliza para tareas de mantenimiento o trabajos internos que no afectan al código en sí (actualización de dependencias, configuración, etc.).

# ejemplo de commit

A continuacion se muestra un ejemplo de como debería quedar un commit

git commit -m "feat: Agregar función de búsqueda por nombre de usuario"

Se recomienda seguir estas convenciones de commit para mantener un historial de cambios claro y organizado.

# Codigos de respuesta del servidor:

1xx (Respuestas Informativas):

100 - Continuar
101 - Cambio de Protocolo
102 - Procesando (WebDAV; RFC 2518)
2xx (Respuestas Exitosas):

200 - OK
201 - Creado
202 - Aceptado
204 - Sin Contenido
206 - Contenido Parcial
207 - Multi-Estado (WebDAV; RFC 4918)
208 - Ya Reportado (WebDAV; RFC 5842)
3xx (Redirecciones):

300 - Múltiples Opciones
301 - Movido Permanentemente
302 - Encontrado
303 - Ver Otro
304 - No Modificado
307 - Redirección Temporal
308 - Redirección Permanente (RFC 7538)
4xx (Errores del Cliente):

400 - Solicitud Incorrecta
401 - No Autorizado
403 - Prohibido
404 - No Encontrado
405 - Método No Permitido
406 - No Aceptable
408 - Tiempo de Espera Agotado
409 - Conflicto
410 - Desaparecido
429 - Demasiadas Solicitudes
5xx (Errores del Servidor):

500 - Error Interno del Servidor
501 - No Implementado
502 - Puerta de Enlace Incorrecta
503 - Servicio No Disponible
504 - Tiempo de Espera de la Puerta de Enlace Agotado
505 - Versión HTTP No Compatible
507 - Almacenamiento Insuficiente (WebDAV; RFC 4918)
511 - Se Requiere Autenticación de Red
