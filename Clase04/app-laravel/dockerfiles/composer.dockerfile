FROM composer:2.1.14

WORKDIR /var/www/html 

ENTRYPOINT ["composer", "--ignore-platform-reqs"]