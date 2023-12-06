# Makefile for Python grpc server

init:
	pip install grpcio grpcio-tools

protoc:
	python -m grpc_tools.protoc -I. --python_out=. greeting.proto
	python -m grpc_tools.protoc -I. --grpc_python_out=. greeting.proto

# Define phony targets to avoid conflicts with files of the same name & improve performance
.PHONY: init protoc
