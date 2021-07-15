/*
 Entity framework es un orm de c 
    en dependenciqs abrimos admnistrador nuget y buscamos
    enetity framwork sqlserver
    entity framework tools

sirve para generar comandos

la consola de administrador nuget permite
manjar entity framework istalar paquetes, etc
 herramientas -> administrador de paquetes -> terminal

Scaffold-Dbcontext "Server=localhost; Database=CursoMVCCore; Trusted_Connection=true;" Microsoft.EntityFrameworkCore-SqlServer -UotputDir Models/DB
"" va la conexion nombre de la instancia  Trusted_Connection=true; usa las credenciales de tu maquina

se genera dos archivos 
context
y la tabla

Entity genera todas las tablas en clases (Maoea la bd) incluyendo relaciones
en  sistemas que ya existen se puede usar esta funcion

 
 */