
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

import * as services from '../../protos/generated/document_grpc_pb';
import * as messages from '../../protos/generated/document_pb';

const PROTO_PATH = __dirname + '/../../protos/src/document.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});


const documentProto = grpc.loadPackageDefinition(packageDefinition).document as any;

const folerServiceClient: services.FolderServiceClient = new documentProto.FolderService('localhost:50052', grpc.credentials.createInsecure());
const fileServiceClient: services.FileServiceClient = new documentProto.FileService('localhost:50052', grpc.credentials.createInsecure());

export {
    folerServiceClient,
    fileServiceClient
};
