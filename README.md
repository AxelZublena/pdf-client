# Build container
```bash
docker build . -t pdf-client
```

# Run container
```bash
docker run --rm --name=pdf-client -p 8080:80 pdf-client
```
Access the app at `http://localhost:8080/`
