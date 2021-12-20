# Despliegue

## Generar imágenes desde Docker Compose

```
docker compose build
```

## Push imágenes desde Docker Compose

```
docker compose push
```

## Creación de contenedor con registry

```
docker run -d -p 5000:5000 --restart=always --name registry registry:2
```

## Para listar las imágenes que están en el contenedor registry

```
http://localhost:5000/v2/_catalog
```
