.PHONY: all fmt lint test

all: lint test

fmt:
	deno fmt

lint:
	deno lint

test:
	deno test --allow-net --import-map ./import_map.json
