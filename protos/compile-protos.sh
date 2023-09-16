#!/bin/bash

PROTO_SRC="./src"
PROTO_DEST="./generated"

rm -rf $PROTO_DEST
mkdir -p $PROTO_DEST

./node_modules/.bin/grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --js_out=import_style=commonjs,binary:${PROTO_DEST} \
    --ts_out=service=grpc-node:${PROTO_DEST} \
    --grpc_out=grpc_js:${PROTO_DEST} \
    -I ${PROTO_SRC} \
    ${PROTO_SRC}/*.proto
