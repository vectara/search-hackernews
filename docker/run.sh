# build the image
docker build -f docker/Dockerfile . --tag=shn:latest
if [ $? -ne 0 ]; then
    echo "Docker build failed with exit code $?. Exiting..."
    exit 3
fi

# remove any old containers of the same name
docker rm shn -f 2> /dev/null

# use the Docker command to forward the queries.json path to the container.
docker run --platform linux/amd64 -d --name shn -p 80:4444/tcp shn

if [ $? -eq 0 ]; then
  echo "Success! Application is running at http://localhost:80."
  echo "To shut it down use: docker container stop shn."
else
  echo "Container failed to start."
fi
