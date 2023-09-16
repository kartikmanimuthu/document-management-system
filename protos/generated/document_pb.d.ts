// package: document
// file: document.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class FileUploadRequest extends jspb.Message { 
    getOwnerid(): string;
    setOwnerid(value: string): FileUploadRequest;
    getFolderid(): string;
    setFolderid(value: string): FileUploadRequest;
    getContenttype(): string;
    setContenttype(value: string): FileUploadRequest;
    getName(): string;
    setName(value: string): FileUploadRequest;
    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): FileUploadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileUploadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FileUploadRequest): FileUploadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileUploadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileUploadRequest;
    static deserializeBinaryFromReader(message: FileUploadRequest, reader: jspb.BinaryReader): FileUploadRequest;
}

export namespace FileUploadRequest {
    export type AsObject = {
        ownerid: string,
        folderid: string,
        contenttype: string,
        name: string,
        content: Uint8Array | string,
    }
}

export class UploadStatus extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): UploadStatus;
    getMessage(): string;
    setMessage(value: string): UploadStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadStatus.AsObject;
    static toObject(includeInstance: boolean, msg: UploadStatus): UploadStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadStatus;
    static deserializeBinaryFromReader(message: UploadStatus, reader: jspb.BinaryReader): UploadStatus;
}

export namespace UploadStatus {
    export type AsObject = {
        success: boolean,
        message: string,
    }
}

export class GetFileRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetFileRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetFileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetFileRequest): GetFileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetFileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetFileRequest;
    static deserializeBinaryFromReader(message: GetFileRequest, reader: jspb.BinaryReader): GetFileRequest;
}

export namespace GetFileRequest {
    export type AsObject = {
        id: string,
    }
}

export class FileResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): FileResponse;
    getOwnerid(): string;
    setOwnerid(value: string): FileResponse;
    getFolderid(): string;
    setFolderid(value: string): FileResponse;
    getName(): string;
    setName(value: string): FileResponse;
    getContenttype(): string;
    setContenttype(value: string): FileResponse;
    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): FileResponse;
    getCreatedAt(): string;
    setCreatedAt(value: string): FileResponse;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): FileResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FileResponse): FileResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileResponse;
    static deserializeBinaryFromReader(message: FileResponse, reader: jspb.BinaryReader): FileResponse;
}

export namespace FileResponse {
    export type AsObject = {
        id: string,
        ownerid: string,
        folderid: string,
        name: string,
        contenttype: string,
        content: Uint8Array | string,
        createdAt: string,
        updatedAt: string,
    }
}

export class DeleteFileRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteFileRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteFileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteFileRequest): DeleteFileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteFileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteFileRequest;
    static deserializeBinaryFromReader(message: DeleteFileRequest, reader: jspb.BinaryReader): DeleteFileRequest;
}

export namespace DeleteFileRequest {
    export type AsObject = {
        id: string,
    }
}

export class DeleteStatus extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): DeleteStatus;
    getMessage(): string;
    setMessage(value: string): DeleteStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteStatus.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteStatus): DeleteStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteStatus;
    static deserializeBinaryFromReader(message: DeleteStatus, reader: jspb.BinaryReader): DeleteStatus;
}

export namespace DeleteStatus {
    export type AsObject = {
        success: boolean,
        message: string,
    }
}

export class UpdateFileRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateFileRequest;
    getOwnerid(): string;
    setOwnerid(value: string): UpdateFileRequest;
    getFolderid(): string;
    setFolderid(value: string): UpdateFileRequest;
    getName(): string;
    setName(value: string): UpdateFileRequest;
    getContenttype(): string;
    setContenttype(value: string): UpdateFileRequest;
    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): UpdateFileRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateFileRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateFileRequest): UpdateFileRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateFileRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateFileRequest;
    static deserializeBinaryFromReader(message: UpdateFileRequest, reader: jspb.BinaryReader): UpdateFileRequest;
}

export namespace UpdateFileRequest {
    export type AsObject = {
        id: string,
        ownerid: string,
        folderid: string,
        name: string,
        contenttype: string,
        content: Uint8Array | string,
    }
}

export class GetAllFilesRequest extends jspb.Message { 
    getOwnerid(): string;
    setOwnerid(value: string): GetAllFilesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetAllFilesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetAllFilesRequest): GetAllFilesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetAllFilesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetAllFilesRequest;
    static deserializeBinaryFromReader(message: GetAllFilesRequest, reader: jspb.BinaryReader): GetAllFilesRequest;
}

export namespace GetAllFilesRequest {
    export type AsObject = {
        ownerid: string,
    }
}

export class FilesResponse extends jspb.Message { 
    clearFilesList(): void;
    getFilesList(): Array<FileResponse>;
    setFilesList(value: Array<FileResponse>): FilesResponse;
    addFiles(value?: FileResponse, index?: number): FileResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FilesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FilesResponse): FilesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FilesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FilesResponse;
    static deserializeBinaryFromReader(message: FilesResponse, reader: jspb.BinaryReader): FilesResponse;
}

export namespace FilesResponse {
    export type AsObject = {
        filesList: Array<FileResponse.AsObject>,
    }
}

export class FolderCreateRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): FolderCreateRequest;
    getOwnerId(): string;
    setOwnerId(value: string): FolderCreateRequest;
    getParentFolderId(): string;
    setParentFolderId(value: string): FolderCreateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FolderCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FolderCreateRequest): FolderCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FolderCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FolderCreateRequest;
    static deserializeBinaryFromReader(message: FolderCreateRequest, reader: jspb.BinaryReader): FolderCreateRequest;
}

export namespace FolderCreateRequest {
    export type AsObject = {
        name: string,
        ownerId: string,
        parentFolderId: string,
    }
}

export class FolderGetRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): FolderGetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FolderGetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FolderGetRequest): FolderGetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FolderGetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FolderGetRequest;
    static deserializeBinaryFromReader(message: FolderGetRequest, reader: jspb.BinaryReader): FolderGetRequest;
}

export namespace FolderGetRequest {
    export type AsObject = {
        id: string,
    }
}

export class FolderUpdateRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): FolderUpdateRequest;
    getNewname(): string;
    setNewname(value: string): FolderUpdateRequest;
    getParentFolderId(): string;
    setParentFolderId(value: string): FolderUpdateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FolderUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FolderUpdateRequest): FolderUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FolderUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FolderUpdateRequest;
    static deserializeBinaryFromReader(message: FolderUpdateRequest, reader: jspb.BinaryReader): FolderUpdateRequest;
}

export namespace FolderUpdateRequest {
    export type AsObject = {
        id: string,
        newname: string,
        parentFolderId: string,
    }
}

export class FolderDeleteRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): FolderDeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FolderDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FolderDeleteRequest): FolderDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FolderDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FolderDeleteRequest;
    static deserializeBinaryFromReader(message: FolderDeleteRequest, reader: jspb.BinaryReader): FolderDeleteRequest;
}

export namespace FolderDeleteRequest {
    export type AsObject = {
        id: string,
    }
}

export class RootFolderRequest extends jspb.Message { 
    getOwnerid(): string;
    setOwnerid(value: string): RootFolderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RootFolderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RootFolderRequest): RootFolderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RootFolderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RootFolderRequest;
    static deserializeBinaryFromReader(message: RootFolderRequest, reader: jspb.BinaryReader): RootFolderRequest;
}

export namespace RootFolderRequest {
    export type AsObject = {
        ownerid: string,
    }
}

export class FolderResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): FolderResponse;
    getName(): string;
    setName(value: string): FolderResponse;
    clearFileIdsList(): void;
    getFileIdsList(): Array<string>;
    setFileIdsList(value: Array<string>): FolderResponse;
    addFileIds(value: string, index?: number): string;
    clearSubFolderIdsList(): void;
    getSubFolderIdsList(): Array<string>;
    setSubFolderIdsList(value: Array<string>): FolderResponse;
    addSubFolderIds(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FolderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FolderResponse): FolderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FolderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FolderResponse;
    static deserializeBinaryFromReader(message: FolderResponse, reader: jspb.BinaryReader): FolderResponse;
}

export namespace FolderResponse {
    export type AsObject = {
        id: string,
        name: string,
        fileIdsList: Array<string>,
        subFolderIdsList: Array<string>,
    }
}

export class FolderStatus extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): FolderStatus;
    getMessage(): string;
    setMessage(value: string): FolderStatus;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FolderStatus.AsObject;
    static toObject(includeInstance: boolean, msg: FolderStatus): FolderStatus.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FolderStatus, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FolderStatus;
    static deserializeBinaryFromReader(message: FolderStatus, reader: jspb.BinaryReader): FolderStatus;
}

export namespace FolderStatus {
    export type AsObject = {
        success: boolean,
        message: string,
    }
}
