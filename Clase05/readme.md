## Estadísticas

```
docker stats <nombre contenedor>
```

## Límites

```
docker run --name servernginx01 -it --rm -m "500mb" nginx bash
docker run --name servernginx01 -it --rm -m "5gb" nginx bash
docker run --name servernginx01 -it --rm -m "5gb" --cpus=3 nginx bash
docker run --name servernginx01 -it --rm -m "5gb" --cpuset-cpus=1,3 nginx bash
docker run --name servernginx01 -it --rm -m "5gb" --cpuset-cpus=0-3 nginx bash
```

## Copiar o extraer

```
docker cp notas.txt servernginx01:/cache
docker cp servernginx01:/cache/data.txt ./
```
