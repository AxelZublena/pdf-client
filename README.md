# Build container
```bash
docker build . -t svelte-docker
```

# Run container
```bash
docker run --rm --name=svelte-docker -p 8080:80 svelte-docker
```
Access the app at `http://localhost:8080/`
