# Comandos de Docker

## Listar redes

```
docker network ls
```

## Crear una red de tipo bridge

```
docker network create -d bridge docker-test
```

## Crear una red de tipo bridge con subnet y gateway personalizados

```
docker network create -d bridge --subnet 172.124.10.0/24 --gateway 172.124.10.20 docker-prueba
```

## Eliminar una red

```
docker network rm <nombre de la red>
```

## Conectar un contenedor a una red

```
docker network connect <nombre de la red> <nombre del contenedor>
```

## Desconectar un contenedor a una red

```
docker network disconnect <nombre de la red> <nombre del contenedor>
```

## Crear un contenedor con un ip

```
docker run -d --name <nombre del contenedor> --ip <ip> --network <nombre de la red> <nombre de la image>
```

_Solo se puede asignar ip si fue personalizada la subnet_

## Crear un contenedor con una red none

```
docker run -d --name <nombre del contenedor> --network none <nombre de la imagen>
```
