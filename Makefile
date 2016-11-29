build: install
	npm run dist

clean:
	rm -rf dist

test: install
	npm test

lint: install
	npm run lint

dev: install
	npm run dev

install: node_modules

.PHONY: test install lint

node_modules:
	npm install
	touch node_modules
