# Crear una imgagen apartir de Node.js
# Version Soporte a largo plazo-Ligera
FROM node:lts-slim

#Crea y cambiamos al directorio /app
WORKDIR /app

#Copia el contenido del proyecto a /app
COPY . /app

#Exponer el puerto 80
EXPOSE 80

# Iniciar el servidor de node 
CMD [ "node", "app.js" ]