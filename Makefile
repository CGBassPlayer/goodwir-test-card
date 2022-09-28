docker-build:
	docker build --rm -t goodwir-extension .

dev-live: docker-build
	docker run --rm -it -v $$(pwd):/app goodwir-extension npm run watch-and-upload

extension:
	docker run --rm -it -v ${pwd}:/app joskfg/npx npx -p https://cdn.elluciancloud.com/assets/SDK/latest/ellucian-create-experience-extension-latest.tgz create-experience-extension goodwir-test-card
