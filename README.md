# READ ME
Boilerplate express API in typescript, using knex, mysql & swagger ui. 
Running tests using mocha & chai.

to run the API
```
npm i
npm run dev

Swagger Docs:
http://localhost:8085/docs
```

# db migration
to add a new migration run 
```
npm run new:migration --name migration_script_name
```
to run the migration scripts
```
npm run migration
```
to rollback
```
npm run rollback
```

# TODO
- Integration with a logging api

# dockerization
Docker allows me to package my application with its environment and all of its dependencies into a "box", called a container. Usually, a container consists of an application running in a stripped-to-basics version of a Linux operating system.
* An image is the blueprint for a container, a container is a running instance of an image.

To build the docker image:
```
docker build -t <username>/node-web-app .
```

the you can see your image by:
```
docker images
```
in our scenario Docker mapped the 8080 port inside of the container to the port 49160 on your machine..
```
docker images
docker run -p <port>:<8080> -d <image name>
docker exec -it <container id> bash
```