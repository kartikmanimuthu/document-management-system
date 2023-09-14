import dotenv from "dotenv";
dotenv.config({ path: '../.env' }); // Load environment variables from .env file

import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';

import Database from './database';
import * as tenantRpc from './service/tenant';
import * as userRpc from './service/user';

const PROTO_PATH = __dirname + '/../../protos/tenant.proto';
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
const tenantProto: any = grpc.loadPackageDefinition(packageDefinition).tenant;
const server = new grpc.Server();

server.addService(tenantProto.TenantService.service, {
    ...tenantRpc, ...userRpc
});


// Connect to MongoDB
Database._connect(process.env.TENANT_DATABASE_URL!)
    .then(() => {
        // Database connection successful. You can now perform CRUD operations.
        server.bindAsync('127.0.0.1:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
            console.log(`TenantService running on http://127.0.0.1:${port}`);
            server.start();
        });

    })
    .catch(error => {
        console.error('Error:', error);
    });



