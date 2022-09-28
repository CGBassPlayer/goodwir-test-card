docker-build:
	docker build --rm -t goodwir-extension .

dev-live: docker-build
	docker run --rm -it -v $$(pwd):/app goodwir-extension npm run watch-and-upload
