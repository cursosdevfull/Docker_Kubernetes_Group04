# Despliegue en Google Cloud

### Obtener cuenta para Google Cloud

- [Google Cloud](https://cloud.google.com)

### Crear un proyecto

- Crear el proyecto desde la consola de Google Clouds

### Habilitar el Container Registry API

- Si es necesario, habilitar la facturación

### Descargar e instalar GCloud

- [Descargar GCloud](https://dl.google.com/dl/cloudsdk/channels/rapid/GoogleCloudSDKInstaller.exe?hl=Es)

### Autenticarse con Google Cloud

```
gcloud auth login
```

### Conectar con proyecto

```
gcloud config set project microservicios03
gcloud auth configure-docker
```

### Habilitar el control de acceso inicial

```
gcloud projects get-iam-policy microservicios03 --flatten="bindings[].members" --format='table(bindings.role)' --filter="bindings.members:service-845412221130@containerregistry.iam.gserviceaccount.com"
```

### Estructura del nombre de las imágenes

- [hostname]/[id proyecto]/[nombre de la imagen]
- gcr.io/microservicios03/frontend

### Generar imágenes desde el docker compose

```
docker compose -f docker-compose-google.yaml build
```

### Publicar las imágenes usando docker compose

```
docker compose -f docker-compose-google.yaml push
```

### Habilitar Kubernetes Engine API desde la consola de Google Cloud

### Conectarse al Cluster de Google Cloud

```
gcloud container clusters get-credentials cluster-docker04 --zone us-central1-c --project microservicios03
```
