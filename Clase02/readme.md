# Comandos de Docker

## Para listar imágenes

```
docker image ls
docker images
```

## Para listar imágenes con un filtro (solo funciona en terminales tipo Linux)

```
docker images | grep <palabra a filtrar>
```

## Para eliminar una o más imágenes

```
docker image rm <nombres o ids de imágenes>
docker rmi <nombres o ids de imágenes>
```

## Para detener un contenedor

```
docker stop <nombre contenedor>
```

## Para eliminar un contenedor detenido

```
docker rm <nombre contenedor>
```

## Para eliminar un contenedor que está ejecutándose

```
docker rm -f <nombre contenedor>
```

## Para crear y ejecutar un contenedor usando un puerto host y un puerto contenedor

```
docker run -d --name <nombre contenedor> -p <puerto host>:<puerto contenedor> <nombre imagen>
```

## Para listar contenedores ejecutándose

```
docker ps
```

## Para listar todos los contenedores (ejecutándose o detenidos)

```
docker ps -a
```

## Para listar todos los contenedores pero mostrar solo los identificadores de cada uno

```
docker ps -a -q
```

## Para listar todos los contenedores creados a partir de una imagen

```
docker ps -a --filter ancestor=<nombre imagen>
```

## Para vincular a un contenedor

```
docker attach <nombre contenedor>
```

## Para listar el log de un contenedor

```
docker logs <nombre contenedor>
```

## Para listar las últimas 20 líneas del log de un contenedor

```
docker logs --tail 20 -f <nombre contenedor>
```

## Para ejecutar un programa o comando dentro de un contenedor

```
docker exec <nombre contenedor> <programa o comando>
```

## Para ejecutar una terminal desde un contenedor

```
docker exec -it <nombre contenedor> <programa o comando de terminal>
```

## Para crear un volumen host

```
docker run -d --name <nombre contenedor> -v <ruta de directorio en la computadora>:<ruta de directorio dentro del contenedor>
```

## Ruta de Docker Desktop en Windows

_\\wsl$\docker-desktop-data\version-pack-data\community\docker_

## Para listar volúmenes

```
docker volume ls
```

## Para inspeccionar un volumen

```
docker volume inspect <nombre o identificador volumen>
```

## Para crear un volumen

```
docker volume create <nombre volumen>
```

## Para crear y ejecutar un contenedor con un volumen nombrado

```
docker run -d --name <nombre contenedor> -v <nombre volumen>:<ruta directorio dentro del contenedor> <nombre imagen>
```

## Para crear y ejecutar un contenedor con un volumen anónimo

```
docker run -d --name <nombre contenedor> -v <ruta directorio dentro del contenedor> <nombre imagen>
```

## Para eliminar un contenedor ejecutándose junto con el volumen anónimo

```
docker rm -fv <nombre o id del contenedor>
```

## Para listar volúmenes huérfanos

```
docker volume ls -f dangling=true
```

## Para eliminar un volumen no vinculado a un contenedor

```
docker volume rm <nombre o id del volumen>
```

## Para eliminar los volúmenes huérfanos

```
docker volume ls -f dangling=true | xargs docker volume rm
```

## Para crear un contenedor de SonarQube

```
docker run -d --name <nombre contenedor> -p 9000:9000 -p 9092:9092 sonarqube:community
```
