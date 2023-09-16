// package: tenant
// file: tenant.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as tenant_pb from "./tenant_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

interface ITenantServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createTenant: ITenantServiceService_ICreateTenant;
    getTenant: ITenantServiceService_IGetTenant;
    getTenantById: ITenantServiceService_IGetTenantById;
    getAllTenants: ITenantServiceService_IGetAllTenants;
    updateTenant: ITenantServiceService_IUpdateTenant;
    deleteTenant: ITenantServiceService_IDeleteTenant;
}

interface ITenantServiceService_ICreateTenant extends grpc.MethodDefinition<tenant_pb.CreateTenantRequest, tenant_pb.TenantResponse> {
    path: "/tenant.TenantService/CreateTenant";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tenant_pb.CreateTenantRequest>;
    requestDeserialize: grpc.deserialize<tenant_pb.CreateTenantRequest>;
    responseSerialize: grpc.serialize<tenant_pb.TenantResponse>;
    responseDeserialize: grpc.deserialize<tenant_pb.TenantResponse>;
}
interface ITenantServiceService_IGetTenant extends grpc.MethodDefinition<tenant_pb.GetTenantRequest, tenant_pb.TenantResponse> {
    path: "/tenant.TenantService/GetTenant";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tenant_pb.GetTenantRequest>;
    requestDeserialize: grpc.deserialize<tenant_pb.GetTenantRequest>;
    responseSerialize: grpc.serialize<tenant_pb.TenantResponse>;
    responseDeserialize: grpc.deserialize<tenant_pb.TenantResponse>;
}
interface ITenantServiceService_IGetTenantById extends grpc.MethodDefinition<tenant_pb.GetTenantRequest, tenant_pb.TenantResponse> {
    path: "/tenant.TenantService/GetTenantById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tenant_pb.GetTenantRequest>;
    requestDeserialize: grpc.deserialize<tenant_pb.GetTenantRequest>;
    responseSerialize: grpc.serialize<tenant_pb.TenantResponse>;
    responseDeserialize: grpc.deserialize<tenant_pb.TenantResponse>;
}
interface ITenantServiceService_IGetAllTenants extends grpc.MethodDefinition<tenant_pb.GetAllTenantsRequest, tenant_pb.TenantsListResponse> {
    path: "/tenant.TenantService/GetAllTenants";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tenant_pb.GetAllTenantsRequest>;
    requestDeserialize: grpc.deserialize<tenant_pb.GetAllTenantsRequest>;
    responseSerialize: grpc.serialize<tenant_pb.TenantsListResponse>;
    responseDeserialize: grpc.deserialize<tenant_pb.TenantsListResponse>;
}
interface ITenantServiceService_IUpdateTenant extends grpc.MethodDefinition<tenant_pb.UpdateTenantRequest, tenant_pb.TenantResponse> {
    path: "/tenant.TenantService/UpdateTenant";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tenant_pb.UpdateTenantRequest>;
    requestDeserialize: grpc.deserialize<tenant_pb.UpdateTenantRequest>;
    responseSerialize: grpc.serialize<tenant_pb.TenantResponse>;
    responseDeserialize: grpc.deserialize<tenant_pb.TenantResponse>;
}
interface ITenantServiceService_IDeleteTenant extends grpc.MethodDefinition<tenant_pb.DeleteTenantRequest, tenant_pb.TenantResponse> {
    path: "/tenant.TenantService/DeleteTenant";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tenant_pb.DeleteTenantRequest>;
    requestDeserialize: grpc.deserialize<tenant_pb.DeleteTenantRequest>;
    responseSerialize: grpc.serialize<tenant_pb.TenantResponse>;
    responseDeserialize: grpc.deserialize<tenant_pb.TenantResponse>;
}

export const TenantServiceService: ITenantServiceService;

export interface ITenantServiceServer {
    createTenant: grpc.handleUnaryCall<tenant_pb.CreateTenantRequest, tenant_pb.TenantResponse>;
    getTenant: grpc.handleUnaryCall<tenant_pb.GetTenantRequest, tenant_pb.TenantResponse>;
    getTenantById: grpc.handleUnaryCall<tenant_pb.GetTenantRequest, tenant_pb.TenantResponse>;
    getAllTenants: grpc.handleUnaryCall<tenant_pb.GetAllTenantsRequest, tenant_pb.TenantsListResponse>;
    updateTenant: grpc.handleUnaryCall<tenant_pb.UpdateTenantRequest, tenant_pb.TenantResponse>;
    deleteTenant: grpc.handleUnaryCall<tenant_pb.DeleteTenantRequest, tenant_pb.TenantResponse>;
}

export interface ITenantServiceClient {
    createTenant(request: tenant_pb.CreateTenantRequest, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    createTenant(request: tenant_pb.CreateTenantRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    createTenant(request: tenant_pb.CreateTenantRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    getTenant(request: tenant_pb.GetTenantRequest, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    getTenant(request: tenant_pb.GetTenantRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    getTenant(request: tenant_pb.GetTenantRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    getTenantById(request: tenant_pb.GetTenantRequest, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    getTenantById(request: tenant_pb.GetTenantRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    getTenantById(request: tenant_pb.GetTenantRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    getAllTenants(request: tenant_pb.GetAllTenantsRequest, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantsListResponse) => void): grpc.ClientUnaryCall;
    getAllTenants(request: tenant_pb.GetAllTenantsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantsListResponse) => void): grpc.ClientUnaryCall;
    getAllTenants(request: tenant_pb.GetAllTenantsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantsListResponse) => void): grpc.ClientUnaryCall;
    updateTenant(request: tenant_pb.UpdateTenantRequest, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    updateTenant(request: tenant_pb.UpdateTenantRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    updateTenant(request: tenant_pb.UpdateTenantRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    deleteTenant(request: tenant_pb.DeleteTenantRequest, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    deleteTenant(request: tenant_pb.DeleteTenantRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    deleteTenant(request: tenant_pb.DeleteTenantRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
}

export class TenantServiceClient extends grpc.Client implements ITenantServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createTenant(request: tenant_pb.CreateTenantRequest, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    public createTenant(request: tenant_pb.CreateTenantRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    public createTenant(request: tenant_pb.CreateTenantRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    public getTenant(request: tenant_pb.GetTenantRequest, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    public getTenant(request: tenant_pb.GetTenantRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    public getTenant(request: tenant_pb.GetTenantRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    public getTenantById(request: tenant_pb.GetTenantRequest, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    public getTenantById(request: tenant_pb.GetTenantRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    public getTenantById(request: tenant_pb.GetTenantRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    public getAllTenants(request: tenant_pb.GetAllTenantsRequest, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantsListResponse) => void): grpc.ClientUnaryCall;
    public getAllTenants(request: tenant_pb.GetAllTenantsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantsListResponse) => void): grpc.ClientUnaryCall;
    public getAllTenants(request: tenant_pb.GetAllTenantsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantsListResponse) => void): grpc.ClientUnaryCall;
    public updateTenant(request: tenant_pb.UpdateTenantRequest, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    public updateTenant(request: tenant_pb.UpdateTenantRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    public updateTenant(request: tenant_pb.UpdateTenantRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    public deleteTenant(request: tenant_pb.DeleteTenantRequest, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    public deleteTenant(request: tenant_pb.DeleteTenantRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
    public deleteTenant(request: tenant_pb.DeleteTenantRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tenant_pb.TenantResponse) => void): grpc.ClientUnaryCall;
}

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createUser: IUserServiceService_ICreateUser;
    getUser: IUserServiceService_IGetUser;
    getAllUsers: IUserServiceService_IGetAllUsers;
    updateUser: IUserServiceService_IUpdateUser;
    deleteUser: IUserServiceService_IDeleteUser;
}

interface IUserServiceService_ICreateUser extends grpc.MethodDefinition<tenant_pb.CreateUserRequest, tenant_pb.UserResponse> {
    path: "/tenant.UserService/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tenant_pb.CreateUserRequest>;
    requestDeserialize: grpc.deserialize<tenant_pb.CreateUserRequest>;
    responseSerialize: grpc.serialize<tenant_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<tenant_pb.UserResponse>;
}
interface IUserServiceService_IGetUser extends grpc.MethodDefinition<tenant_pb.GetUserRequest, tenant_pb.UserResponse> {
    path: "/tenant.UserService/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tenant_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<tenant_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<tenant_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<tenant_pb.UserResponse>;
}
interface IUserServiceService_IGetAllUsers extends grpc.MethodDefinition<tenant_pb.EmptyRequest, tenant_pb.AllUsersResponse> {
    path: "/tenant.UserService/GetAllUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tenant_pb.EmptyRequest>;
    requestDeserialize: grpc.deserialize<tenant_pb.EmptyRequest>;
    responseSerialize: grpc.serialize<tenant_pb.AllUsersResponse>;
    responseDeserialize: grpc.deserialize<tenant_pb.AllUsersResponse>;
}
interface IUserServiceService_IUpdateUser extends grpc.MethodDefinition<tenant_pb.UpdateUserRequest, tenant_pb.UserResponse> {
    path: "/tenant.UserService/UpdateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tenant_pb.UpdateUserRequest>;
    requestDeserialize: grpc.deserialize<tenant_pb.UpdateUserRequest>;
    responseSerialize: grpc.serialize<tenant_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<tenant_pb.UserResponse>;
}
interface IUserServiceService_IDeleteUser extends grpc.MethodDefinition<tenant_pb.DeleteUserRequest, tenant_pb.UserResponse> {
    path: "/tenant.UserService/DeleteUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tenant_pb.DeleteUserRequest>;
    requestDeserialize: grpc.deserialize<tenant_pb.DeleteUserRequest>;
    responseSerialize: grpc.serialize<tenant_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<tenant_pb.UserResponse>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer {
    createUser: grpc.handleUnaryCall<tenant_pb.CreateUserRequest, tenant_pb.UserResponse>;
    getUser: grpc.handleUnaryCall<tenant_pb.GetUserRequest, tenant_pb.UserResponse>;
    getAllUsers: grpc.handleUnaryCall<tenant_pb.EmptyRequest, tenant_pb.AllUsersResponse>;
    updateUser: grpc.handleUnaryCall<tenant_pb.UpdateUserRequest, tenant_pb.UserResponse>;
    deleteUser: grpc.handleUnaryCall<tenant_pb.DeleteUserRequest, tenant_pb.UserResponse>;
}

export interface IUserServiceClient {
    createUser(request: tenant_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: tenant_pb.UserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: tenant_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tenant_pb.UserResponse) => void): grpc.ClientUnaryCall;
    createUser(request: tenant_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tenant_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: tenant_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: tenant_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: tenant_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tenant_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: tenant_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tenant_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getAllUsers(request: tenant_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: tenant_pb.AllUsersResponse) => void): grpc.ClientUnaryCall;
    getAllUsers(request: tenant_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tenant_pb.AllUsersResponse) => void): grpc.ClientUnaryCall;
    getAllUsers(request: tenant_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tenant_pb.AllUsersResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: tenant_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: tenant_pb.UserResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: tenant_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tenant_pb.UserResponse) => void): grpc.ClientUnaryCall;
    updateUser(request: tenant_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tenant_pb.UserResponse) => void): grpc.ClientUnaryCall;
    deleteUser(request: tenant_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: tenant_pb.UserResponse) => void): grpc.ClientUnaryCall;
    deleteUser(request: tenant_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tenant_pb.UserResponse) => void): grpc.ClientUnaryCall;
    deleteUser(request: tenant_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tenant_pb.UserResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createUser(request: tenant_pb.CreateUserRequest, callback: (error: grpc.ServiceError | null, response: tenant_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: tenant_pb.CreateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tenant_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public createUser(request: tenant_pb.CreateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tenant_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: tenant_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: tenant_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: tenant_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tenant_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: tenant_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tenant_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getAllUsers(request: tenant_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: tenant_pb.AllUsersResponse) => void): grpc.ClientUnaryCall;
    public getAllUsers(request: tenant_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tenant_pb.AllUsersResponse) => void): grpc.ClientUnaryCall;
    public getAllUsers(request: tenant_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tenant_pb.AllUsersResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: tenant_pb.UpdateUserRequest, callback: (error: grpc.ServiceError | null, response: tenant_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: tenant_pb.UpdateUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tenant_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public updateUser(request: tenant_pb.UpdateUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tenant_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public deleteUser(request: tenant_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: tenant_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public deleteUser(request: tenant_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tenant_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public deleteUser(request: tenant_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tenant_pb.UserResponse) => void): grpc.ClientUnaryCall;
}
