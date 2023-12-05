# Makefile for Ninja dev.

init: ninja-init

ninja-init:
	npm install grpc-web google-protobuf @types/react @types/react-dom @types/node

protoc:
	npm install -g ts-protoc-gen

# Define phony targets to avoid conflicts with files of the same name & improve performance
.PHONY: init ninja-init

# Generate TypeScript files
# protoc -I=./proto --js_out=import_style=commonjs,binary:./src/generated --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./src/generated ./proto/your_service.proto
