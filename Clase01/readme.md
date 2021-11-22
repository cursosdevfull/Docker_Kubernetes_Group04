# Comandos

## Listar imágenes

```
docker images
```

## Inspeccionar una imagen

```
docker image inspect <nombre imagen>
```

## Crear un contenedor usando una imagen

```
docker run <nombre imagen>
```

## Sobreescribir el comando de inicio

```
docker run <nombre imagen> <comando de inicio>
```

## Descargar una imagen

```
docker pull <nombre imagen>
```

## Crear un contenedor sin iniciarlo

```
docker create <nombre imagen>
```

## Crear un contenedor sin iniciarlo pero con nombre

```
docker create --name <nombre contenedor> <nombre imagen>
```

## Iniciar un contenedor detenido

```
docker start <nombre contenedor | id contenedor>
```

## Crear y ejecutar un contenedor con nombre

```
docker run --name <nombre contenedor> <nombre imagen>
```

## Detener un contenedor

```
docker stop <nombre contenedor | id contenedor>
```
