// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var tenant_pb = require('./tenant_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_tenant_AllUsersResponse(arg) {
  if (!(arg instanceof tenant_pb.AllUsersResponse)) {
    throw new Error('Expected argument of type tenant.AllUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tenant_AllUsersResponse(buffer_arg) {
  return tenant_pb.AllUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tenant_CreateTenantRequest(arg) {
  if (!(arg instanceof tenant_pb.CreateTenantRequest)) {
    throw new Error('Expected argument of type tenant.CreateTenantRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tenant_CreateTenantRequest(buffer_arg) {
  return tenant_pb.CreateTenantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tenant_CreateUserRequest(arg) {
  if (!(arg instanceof tenant_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type tenant.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tenant_CreateUserRequest(buffer_arg) {
  return tenant_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tenant_DeleteTenantRequest(arg) {
  if (!(arg instanceof tenant_pb.DeleteTenantRequest)) {
    throw new Error('Expected argument of type tenant.DeleteTenantRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tenant_DeleteTenantRequest(buffer_arg) {
  return tenant_pb.DeleteTenantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tenant_DeleteUserRequest(arg) {
  if (!(arg instanceof tenant_pb.DeleteUserRequest)) {
    throw new Error('Expected argument of type tenant.DeleteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tenant_DeleteUserRequest(buffer_arg) {
  return tenant_pb.DeleteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tenant_EmptyRequest(arg) {
  if (!(arg instanceof tenant_pb.EmptyRequest)) {
    throw new Error('Expected argument of type tenant.EmptyRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tenant_EmptyRequest(buffer_arg) {
  return tenant_pb.EmptyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tenant_GetAllTenantsRequest(arg) {
  if (!(arg instanceof tenant_pb.GetAllTenantsRequest)) {
    throw new Error('Expected argument of type tenant.GetAllTenantsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tenant_GetAllTenantsRequest(buffer_arg) {
  return tenant_pb.GetAllTenantsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tenant_GetTenantRequest(arg) {
  if (!(arg instanceof tenant_pb.GetTenantRequest)) {
    throw new Error('Expected argument of type tenant.GetTenantRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tenant_GetTenantRequest(buffer_arg) {
  return tenant_pb.GetTenantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tenant_GetUserRequest(arg) {
  if (!(arg instanceof tenant_pb.GetUserRequest)) {
    throw new Error('Expected argument of type tenant.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tenant_GetUserRequest(buffer_arg) {
  return tenant_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tenant_TenantResponse(arg) {
  if (!(arg instanceof tenant_pb.TenantResponse)) {
    throw new Error('Expected argument of type tenant.TenantResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tenant_TenantResponse(buffer_arg) {
  return tenant_pb.TenantResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tenant_TenantsListResponse(arg) {
  if (!(arg instanceof tenant_pb.TenantsListResponse)) {
    throw new Error('Expected argument of type tenant.TenantsListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tenant_TenantsListResponse(buffer_arg) {
  return tenant_pb.TenantsListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tenant_UpdateTenantRequest(arg) {
  if (!(arg instanceof tenant_pb.UpdateTenantRequest)) {
    throw new Error('Expected argument of type tenant.UpdateTenantRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tenant_UpdateTenantRequest(buffer_arg) {
  return tenant_pb.UpdateTenantRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tenant_UpdateUserRequest(arg) {
  if (!(arg instanceof tenant_pb.UpdateUserRequest)) {
    throw new Error('Expected argument of type tenant.UpdateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tenant_UpdateUserRequest(buffer_arg) {
  return tenant_pb.UpdateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tenant_UserResponse(arg) {
  if (!(arg instanceof tenant_pb.UserResponse)) {
    throw new Error('Expected argument of type tenant.UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tenant_UserResponse(buffer_arg) {
  return tenant_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TenantServiceService = exports.TenantServiceService = {
  createTenant: {
    path: '/tenant.TenantService/CreateTenant',
    requestStream: false,
    responseStream: false,
    requestType: tenant_pb.CreateTenantRequest,
    responseType: tenant_pb.TenantResponse,
    requestSerialize: serialize_tenant_CreateTenantRequest,
    requestDeserialize: deserialize_tenant_CreateTenantRequest,
    responseSerialize: serialize_tenant_TenantResponse,
    responseDeserialize: deserialize_tenant_TenantResponse,
  },
  getTenant: {
    path: '/tenant.TenantService/GetTenant',
    requestStream: false,
    responseStream: false,
    requestType: tenant_pb.GetTenantRequest,
    responseType: tenant_pb.TenantResponse,
    requestSerialize: serialize_tenant_GetTenantRequest,
    requestDeserialize: deserialize_tenant_GetTenantRequest,
    responseSerialize: serialize_tenant_TenantResponse,
    responseDeserialize: deserialize_tenant_TenantResponse,
  },
  getTenantById: {
    path: '/tenant.TenantService/GetTenantById',
    requestStream: false,
    responseStream: false,
    requestType: tenant_pb.GetTenantRequest,
    responseType: tenant_pb.TenantResponse,
    requestSerialize: serialize_tenant_GetTenantRequest,
    requestDeserialize: deserialize_tenant_GetTenantRequest,
    responseSerialize: serialize_tenant_TenantResponse,
    responseDeserialize: deserialize_tenant_TenantResponse,
  },
  getAllTenants: {
    path: '/tenant.TenantService/GetAllTenants',
    requestStream: false,
    responseStream: false,
    requestType: tenant_pb.GetAllTenantsRequest,
    responseType: tenant_pb.TenantsListResponse,
    requestSerialize: serialize_tenant_GetAllTenantsRequest,
    requestDeserialize: deserialize_tenant_GetAllTenantsRequest,
    responseSerialize: serialize_tenant_TenantsListResponse,
    responseDeserialize: deserialize_tenant_TenantsListResponse,
  },
  updateTenant: {
    path: '/tenant.TenantService/UpdateTenant',
    requestStream: false,
    responseStream: false,
    requestType: tenant_pb.UpdateTenantRequest,
    responseType: tenant_pb.TenantResponse,
    requestSerialize: serialize_tenant_UpdateTenantRequest,
    requestDeserialize: deserialize_tenant_UpdateTenantRequest,
    responseSerialize: serialize_tenant_TenantResponse,
    responseDeserialize: deserialize_tenant_TenantResponse,
  },
  deleteTenant: {
    path: '/tenant.TenantService/DeleteTenant',
    requestStream: false,
    responseStream: false,
    requestType: tenant_pb.DeleteTenantRequest,
    responseType: tenant_pb.TenantResponse,
    requestSerialize: serialize_tenant_DeleteTenantRequest,
    requestDeserialize: deserialize_tenant_DeleteTenantRequest,
    responseSerialize: serialize_tenant_TenantResponse,
    responseDeserialize: deserialize_tenant_TenantResponse,
  },
};

exports.TenantServiceClient = grpc.makeGenericClientConstructor(TenantServiceService);
// User related messages and service
var UserServiceService = exports.UserServiceService = {
  createUser: {
    path: '/tenant.UserService/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: tenant_pb.CreateUserRequest,
    responseType: tenant_pb.UserResponse,
    requestSerialize: serialize_tenant_CreateUserRequest,
    requestDeserialize: deserialize_tenant_CreateUserRequest,
    responseSerialize: serialize_tenant_UserResponse,
    responseDeserialize: deserialize_tenant_UserResponse,
  },
  getUser: {
    path: '/tenant.UserService/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: tenant_pb.GetUserRequest,
    responseType: tenant_pb.UserResponse,
    requestSerialize: serialize_tenant_GetUserRequest,
    requestDeserialize: deserialize_tenant_GetUserRequest,
    responseSerialize: serialize_tenant_UserResponse,
    responseDeserialize: deserialize_tenant_UserResponse,
  },
  getAllUsers: {
    path: '/tenant.UserService/GetAllUsers',
    requestStream: false,
    responseStream: false,
    requestType: tenant_pb.EmptyRequest,
    responseType: tenant_pb.AllUsersResponse,
    requestSerialize: serialize_tenant_EmptyRequest,
    requestDeserialize: deserialize_tenant_EmptyRequest,
    responseSerialize: serialize_tenant_AllUsersResponse,
    responseDeserialize: deserialize_tenant_AllUsersResponse,
  },
  updateUser: {
    path: '/tenant.UserService/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: tenant_pb.UpdateUserRequest,
    responseType: tenant_pb.UserResponse,
    requestSerialize: serialize_tenant_UpdateUserRequest,
    requestDeserialize: deserialize_tenant_UpdateUserRequest,
    responseSerialize: serialize_tenant_UserResponse,
    responseDeserialize: deserialize_tenant_UserResponse,
  },
  deleteUser: {
    path: '/tenant.UserService/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: tenant_pb.DeleteUserRequest,
    responseType: tenant_pb.UserResponse,
    requestSerialize: serialize_tenant_DeleteUserRequest,
    requestDeserialize: deserialize_tenant_DeleteUserRequest,
    responseSerialize: serialize_tenant_UserResponse,
    responseDeserialize: deserialize_tenant_UserResponse,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
