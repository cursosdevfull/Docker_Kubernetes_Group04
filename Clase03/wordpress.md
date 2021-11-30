# Instalar WordPress

## Crear una red

```
docker network create my_network -d bridge
```

## Crear volúmenes

```
docker volume create data_mysql
docker volume create data_wp
```

## Crear el contenedor la base de datos

```
docker run -d --name my_mysql -e MYSQL_ROOT_PASSWORD=test -e MYSQL_USER=wp_db -e MYSQL_PASSWORD=12345 -e MYSQL_DATABASE=first_wp --network my_network -v data_mysql:/var/lib/mysql mysql:8.0
```

## Crear el contenedor de wordpress

```
docker run -d --name my_wp -p 8090:80 --network=my_network -e WORDPRESS_DB_HOST=my_mysql:3306 -e WORDPRESS_DB_USER=root -e WORDPRESS_DB_PASSWORD=test -e WORDPRESS_DB_NAME=first_wp -d -v data_wp:/var/www/html wordpress
```
