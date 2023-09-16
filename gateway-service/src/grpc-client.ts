import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

const PROTO_PATH = __dirname + '/../../protos/src/tenant.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
const tenantProto: any = grpc.loadPackageDefinition(packageDefinition).tenant;

const tenantClient = new tenantProto.TenantService('localhost:50051', grpc.credentials.createInsecure());
const userClient = new tenantProto.UserService('localhost:50051', grpc.credentials.createInsecure());

export {
    userClient, tenantClient
}



