// package: tenant
// file: tenant.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class CreateTenantRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateTenantRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTenantRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTenantRequest): CreateTenantRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTenantRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTenantRequest;
    static deserializeBinaryFromReader(message: CreateTenantRequest, reader: jspb.BinaryReader): CreateTenantRequest;
}

export namespace CreateTenantRequest {
    export type AsObject = {
        name: string,
    }
}

export class GetTenantRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetTenantRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetTenantRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetTenantRequest): GetTenantRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetTenantRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetTenantRequest;
    static deserializeBinaryFromReader(message: GetTenantRequest, reader: jspb.BinaryReader): GetTenantRequest;
}

export namespace GetTenantRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetAllTenantsRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllTenantsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllTenantsRequest): GetAllTenantsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllTenantsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllTenantsRequest;
    static deserializeBinaryFromReader(message: GetAllTenantsRequest, reader: jspb.BinaryReader): GetAllTenantsRequest;
}

export namespace GetAllTenantsRequest {
    export type AsObject = {
    }
}

export class UpdateTenantRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateTenantRequest;
    getName(): string;
    setName(value: string): UpdateTenantRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTenantRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTenantRequest): UpdateTenantRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTenantRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTenantRequest;
    static deserializeBinaryFromReader(message: UpdateTenantRequest, reader: jspb.BinaryReader): UpdateTenantRequest;
}

export namespace UpdateTenantRequest {
    export type AsObject = {
        id: string,
        name: string,
    }
}

export class DeleteTenantRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteTenantRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTenantRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTenantRequest): DeleteTenantRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTenantRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTenantRequest;
    static deserializeBinaryFromReader(message: DeleteTenantRequest, reader: jspb.BinaryReader): DeleteTenantRequest;
}

export namespace DeleteTenantRequest {
    export type AsObject = {
        id: string,
    }
}

export class TenantResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): TenantResponse;
    getName(): string;
    setName(value: string): TenantResponse;
    getCreatedat(): string;
    setCreatedat(value: string): TenantResponse;
    getUpdatedat(): string;
    setUpdatedat(value: string): TenantResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TenantResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TenantResponse): TenantResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TenantResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TenantResponse;
    static deserializeBinaryFromReader(message: TenantResponse, reader: jspb.BinaryReader): TenantResponse;
}

export namespace TenantResponse {
    export type AsObject = {
        id: string,
        name: string,
        createdat: string,
        updatedat: string,
    }
}

export class TenantsListResponse extends jspb.Message { 
    clearTenantsList(): void;
    getTenantsList(): Array<TenantResponse>;
    setTenantsList(value: Array<TenantResponse>): TenantsListResponse;
    addTenants(value?: TenantResponse, index?: number): TenantResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TenantsListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TenantsListResponse): TenantsListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TenantsListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TenantsListResponse;
    static deserializeBinaryFromReader(message: TenantsListResponse, reader: jspb.BinaryReader): TenantsListResponse;
}

export namespace TenantsListResponse {
    export type AsObject = {
        tenantsList: Array<TenantResponse.AsObject>,
    }
}

export class CreateUserRequest extends jspb.Message { 
    getTenantid(): string;
    setTenantid(value: string): CreateUserRequest;
    getUsername(): string;
    setUsername(value: string): CreateUserRequest;
    getPassword(): string;
    setPassword(value: string): CreateUserRequest;
    getEmail(): string;
    setEmail(value: string): CreateUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
    static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
    export type AsObject = {
        tenantid: string,
        username: string,
        password: string,
        email: string,
    }
}

export class GetUserRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserRequest;
    static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
    export type AsObject = {
        id: string,
    }
}

export class UpdateUserRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateUserRequest;
    getUsername(): string;
    setUsername(value: string): UpdateUserRequest;
    getPassword(): string;
    setPassword(value: string): UpdateUserRequest;
    getEmail(): string;
    setEmail(value: string): UpdateUserRequest;
    getTenantid(): string;
    setTenantid(value: string): UpdateUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
    static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
    export type AsObject = {
        id: string,
        username: string,
        password: string,
        email: string,
        tenantid: string,
    }
}

export class DeleteUserRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserRequest): DeleteUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserRequest;
    static deserializeBinaryFromReader(message: DeleteUserRequest, reader: jspb.BinaryReader): DeleteUserRequest;
}

export namespace DeleteUserRequest {
    export type AsObject = {
        id: string,
    }
}

export class UserResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): UserResponse;
    getTenantid(): string;
    setTenantid(value: string): UserResponse;
    getUsername(): string;
    setUsername(value: string): UserResponse;
    getEmail(): string;
    setEmail(value: string): UserResponse;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): UserResponse;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): UserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserResponse;
    static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
    export type AsObject = {
        id: string,
        tenantid: string,
        username: string,
        email: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class AllUsersResponse extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<UserResponse>;
    setUsersList(value: Array<UserResponse>): AllUsersResponse;
    addUsers(value?: UserResponse, index?: number): UserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AllUsersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AllUsersResponse): AllUsersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AllUsersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AllUsersResponse;
    static deserializeBinaryFromReader(message: AllUsersResponse, reader: jspb.BinaryReader): AllUsersResponse;
}

export namespace AllUsersResponse {
    export type AsObject = {
        usersList: Array<UserResponse.AsObject>,
    }
}

export class EmptyRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmptyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: EmptyRequest): EmptyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmptyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmptyRequest;
    static deserializeBinaryFromReader(message: EmptyRequest, reader: jspb.BinaryReader): EmptyRequest;
}

export namespace EmptyRequest {
    export type AsObject = {
    }
}
