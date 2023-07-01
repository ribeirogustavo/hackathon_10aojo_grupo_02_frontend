# Getting Started with Create React App

## Build docker
### `docker build -t react_hack:dev .`

## Run Docker 
### `docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true react_hack:dev`
