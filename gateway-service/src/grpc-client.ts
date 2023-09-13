import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

const PROTO_PATH = __dirname + '/../../protos/tenant.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
const tenantProto: any = grpc.loadPackageDefinition(packageDefinition).tenant;

const client = new tenantProto.TenantService('localhost:50051', grpc.credentials.createInsecure());


export {
    client
}
