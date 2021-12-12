# PODS

## Crear un pod

```
kubectl run servernginx --image=nginx:alpine
```

## Listar pods

```
kubectl get pods
kubectl get po
```

## Para acceder al puerto de un pod

```
kubectl port-forward servernginx 7000:80
kubectl port-forward pods/servernginx 7000:80
```

## Para accerder a la información del pod

```
kubectl get pods servernginx
kubectl get po servernginx -o yaml
kubectl get po servernginx -o json
```

## Para describir lo que sucede dentro un pod

```
kubectl describe po servernginx
kubectl describe pods servernginx
```

## Para ejecutar un manifiesto

```
kubectl apply -f 01-pod.yaml
```

## Para eliminar un pod

```
kubectl delete po servernginx
kubectl delete -f 01-pod.yaml
```

## Para acceder a un contenedor único dentro de un pod

```
kubectl exec -it servernginx -- sh
```

## Para acceder a un contenedor dentro de un pod (suponiendo que hay más de uno)

```
kubectl exec -it serverweb2 -c contenedor1 -- sh
```

## Para acceder al log de un contenedor único dentro de un pod

```
kubectl logs servernginx
```

## Para acceder al log de un contenedor dentro de un pod (asumiendo que hay más de uno)

```
kubectl logs serverweb2 -c contenedor1
```

## Para listar pods mostrando sus etiquetas

```
kubectl get po --show-labels
```

## Para filtrar pods usando etiquetas

```
kubectl get pods -l env=dev --show-labels
```
