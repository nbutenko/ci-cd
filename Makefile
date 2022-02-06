PROJECT_NAME=my_node
PORTS=3001:3001

build: 
	docker build --build-arg PORT_ARG=3001 -t $(PROJECT_NAME) .

run: build
	docker run -it --rm -p $(PORTS) --network pasv --env-file .env --name $(PROJECT_NAME) $(PROJECT_NAME)

stop:
	docker stop $(PROJECT_NAME)

db:
	docker run -it --rm --network pasv --name psql -e POSTGRES_PASSWORD=root -d postgres

up: 
	docker-compose up -d

down: 
	docker-compose down