build:
	docker-compose build

start:
	docker-compose up -d

stop:
	docker-compose down

fresh:
	docker-compose down && docker-compose up -d --build

ps:
	docker-compose ps

nginx:
	docker-compose exec bir-nginx sh

api:
	docker-compose exec bir-api sh
