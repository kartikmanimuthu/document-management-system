// package: document
// file: document.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as document_pb from "./document_pb";

interface IFileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    uploadFile: IFileServiceService_IUploadFile;
    getFile: IFileServiceService_IGetFile;
    deleteFile: IFileServiceService_IDeleteFile;
    updateFile: IFileServiceService_IUpdateFile;
    getAllFiles: IFileServiceService_IGetAllFiles;
}

interface IFileServiceService_IUploadFile extends grpc.MethodDefinition<document_pb.FileUploadRequest, document_pb.UploadStatus> {
    path: "/document.FileService/UploadFile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<document_pb.FileUploadRequest>;
    requestDeserialize: grpc.deserialize<document_pb.FileUploadRequest>;
    responseSerialize: grpc.serialize<document_pb.UploadStatus>;
    responseDeserialize: grpc.deserialize<document_pb.UploadStatus>;
}
interface IFileServiceService_IGetFile extends grpc.MethodDefinition<document_pb.GetFileRequest, document_pb.FileResponse> {
    path: "/document.FileService/GetFile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<document_pb.GetFileRequest>;
    requestDeserialize: grpc.deserialize<document_pb.GetFileRequest>;
    responseSerialize: grpc.serialize<document_pb.FileResponse>;
    responseDeserialize: grpc.deserialize<document_pb.FileResponse>;
}
interface IFileServiceService_IDeleteFile extends grpc.MethodDefinition<document_pb.DeleteFileRequest, document_pb.DeleteStatus> {
    path: "/document.FileService/DeleteFile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<document_pb.DeleteFileRequest>;
    requestDeserialize: grpc.deserialize<document_pb.DeleteFileRequest>;
    responseSerialize: grpc.serialize<document_pb.DeleteStatus>;
    responseDeserialize: grpc.deserialize<document_pb.DeleteStatus>;
}
interface IFileServiceService_IUpdateFile extends grpc.MethodDefinition<document_pb.UpdateFileRequest, document_pb.FileResponse> {
    path: "/document.FileService/UpdateFile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<document_pb.UpdateFileRequest>;
    requestDeserialize: grpc.deserialize<document_pb.UpdateFileRequest>;
    responseSerialize: grpc.serialize<document_pb.FileResponse>;
    responseDeserialize: grpc.deserialize<document_pb.FileResponse>;
}
interface IFileServiceService_IGetAllFiles extends grpc.MethodDefinition<document_pb.GetAllFilesRequest, document_pb.FilesResponse> {
    path: "/document.FileService/GetAllFiles";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<document_pb.GetAllFilesRequest>;
    requestDeserialize: grpc.deserialize<document_pb.GetAllFilesRequest>;
    responseSerialize: grpc.serialize<document_pb.FilesResponse>;
    responseDeserialize: grpc.deserialize<document_pb.FilesResponse>;
}

export const FileServiceService: IFileServiceService;

export interface IFileServiceServer {
    uploadFile: grpc.handleUnaryCall<document_pb.FileUploadRequest, document_pb.UploadStatus>;
    getFile: grpc.handleUnaryCall<document_pb.GetFileRequest, document_pb.FileResponse>;
    deleteFile: grpc.handleUnaryCall<document_pb.DeleteFileRequest, document_pb.DeleteStatus>;
    updateFile: grpc.handleUnaryCall<document_pb.UpdateFileRequest, document_pb.FileResponse>;
    getAllFiles: grpc.handleUnaryCall<document_pb.GetAllFilesRequest, document_pb.FilesResponse>;
}

export interface IFileServiceClient {
    uploadFile(request: document_pb.FileUploadRequest, callback: (error: grpc.ServiceError | null, response: document_pb.UploadStatus) => void): grpc.ClientUnaryCall;
    uploadFile(request: document_pb.FileUploadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: document_pb.UploadStatus) => void): grpc.ClientUnaryCall;
    uploadFile(request: document_pb.FileUploadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: document_pb.UploadStatus) => void): grpc.ClientUnaryCall;
    getFile(request: document_pb.GetFileRequest, callback: (error: grpc.ServiceError | null, response: document_pb.FileResponse) => void): grpc.ClientUnaryCall;
    getFile(request: document_pb.GetFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: document_pb.FileResponse) => void): grpc.ClientUnaryCall;
    getFile(request: document_pb.GetFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: document_pb.FileResponse) => void): grpc.ClientUnaryCall;
    deleteFile(request: document_pb.DeleteFileRequest, callback: (error: grpc.ServiceError | null, response: document_pb.DeleteStatus) => void): grpc.ClientUnaryCall;
    deleteFile(request: document_pb.DeleteFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: document_pb.DeleteStatus) => void): grpc.ClientUnaryCall;
    deleteFile(request: document_pb.DeleteFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: document_pb.DeleteStatus) => void): grpc.ClientUnaryCall;
    updateFile(request: document_pb.UpdateFileRequest, callback: (error: grpc.ServiceError | null, response: document_pb.FileResponse) => void): grpc.ClientUnaryCall;
    updateFile(request: document_pb.UpdateFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: document_pb.FileResponse) => void): grpc.ClientUnaryCall;
    updateFile(request: document_pb.UpdateFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: document_pb.FileResponse) => void): grpc.ClientUnaryCall;
    getAllFiles(request: document_pb.GetAllFilesRequest, callback: (error: grpc.ServiceError | null, response: document_pb.FilesResponse) => void): grpc.ClientUnaryCall;
    getAllFiles(request: document_pb.GetAllFilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: document_pb.FilesResponse) => void): grpc.ClientUnaryCall;
    getAllFiles(request: document_pb.GetAllFilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: document_pb.FilesResponse) => void): grpc.ClientUnaryCall;
}

export class FileServiceClient extends grpc.Client implements IFileServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public uploadFile(request: document_pb.FileUploadRequest, callback: (error: grpc.ServiceError | null, response: document_pb.UploadStatus) => void): grpc.ClientUnaryCall;
    public uploadFile(request: document_pb.FileUploadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: document_pb.UploadStatus) => void): grpc.ClientUnaryCall;
    public uploadFile(request: document_pb.FileUploadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: document_pb.UploadStatus) => void): grpc.ClientUnaryCall;
    public getFile(request: document_pb.GetFileRequest, callback: (error: grpc.ServiceError | null, response: document_pb.FileResponse) => void): grpc.ClientUnaryCall;
    public getFile(request: document_pb.GetFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: document_pb.FileResponse) => void): grpc.ClientUnaryCall;
    public getFile(request: document_pb.GetFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: document_pb.FileResponse) => void): grpc.ClientUnaryCall;
    public deleteFile(request: document_pb.DeleteFileRequest, callback: (error: grpc.ServiceError | null, response: document_pb.DeleteStatus) => void): grpc.ClientUnaryCall;
    public deleteFile(request: document_pb.DeleteFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: document_pb.DeleteStatus) => void): grpc.ClientUnaryCall;
    public deleteFile(request: document_pb.DeleteFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: document_pb.DeleteStatus) => void): grpc.ClientUnaryCall;
    public updateFile(request: document_pb.UpdateFileRequest, callback: (error: grpc.ServiceError | null, response: document_pb.FileResponse) => void): grpc.ClientUnaryCall;
    public updateFile(request: document_pb.UpdateFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: document_pb.FileResponse) => void): grpc.ClientUnaryCall;
    public updateFile(request: document_pb.UpdateFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: document_pb.FileResponse) => void): grpc.ClientUnaryCall;
    public getAllFiles(request: document_pb.GetAllFilesRequest, callback: (error: grpc.ServiceError | null, response: document_pb.FilesResponse) => void): grpc.ClientUnaryCall;
    public getAllFiles(request: document_pb.GetAllFilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: document_pb.FilesResponse) => void): grpc.ClientUnaryCall;
    public getAllFiles(request: document_pb.GetAllFilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: document_pb.FilesResponse) => void): grpc.ClientUnaryCall;
}

interface IFolderServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createFolder: IFolderServiceService_ICreateFolder;
    getFolder: IFolderServiceService_IGetFolder;
    updateFolder: IFolderServiceService_IUpdateFolder;
    deleteFolder: IFolderServiceService_IDeleteFolder;
    getRootFolder: IFolderServiceService_IGetRootFolder;
    createRootFolder: IFolderServiceService_ICreateRootFolder;
    getFolderContent: IFolderServiceService_IGetFolderContent;
}

interface IFolderServiceService_ICreateFolder extends grpc.MethodDefinition<document_pb.FolderCreateRequest, document_pb.FolderStatus> {
    path: "/document.FolderService/CreateFolder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<document_pb.FolderCreateRequest>;
    requestDeserialize: grpc.deserialize<document_pb.FolderCreateRequest>;
    responseSerialize: grpc.serialize<document_pb.FolderStatus>;
    responseDeserialize: grpc.deserialize<document_pb.FolderStatus>;
}
interface IFolderServiceService_IGetFolder extends grpc.MethodDefinition<document_pb.FolderGetRequest, document_pb.FolderResponse> {
    path: "/document.FolderService/GetFolder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<document_pb.FolderGetRequest>;
    requestDeserialize: grpc.deserialize<document_pb.FolderGetRequest>;
    responseSerialize: grpc.serialize<document_pb.FolderResponse>;
    responseDeserialize: grpc.deserialize<document_pb.FolderResponse>;
}
interface IFolderServiceService_IUpdateFolder extends grpc.MethodDefinition<document_pb.FolderUpdateRequest, document_pb.FolderStatus> {
    path: "/document.FolderService/UpdateFolder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<document_pb.FolderUpdateRequest>;
    requestDeserialize: grpc.deserialize<document_pb.FolderUpdateRequest>;
    responseSerialize: grpc.serialize<document_pb.FolderStatus>;
    responseDeserialize: grpc.deserialize<document_pb.FolderStatus>;
}
interface IFolderServiceService_IDeleteFolder extends grpc.MethodDefinition<document_pb.FolderDeleteRequest, document_pb.FolderStatus> {
    path: "/document.FolderService/DeleteFolder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<document_pb.FolderDeleteRequest>;
    requestDeserialize: grpc.deserialize<document_pb.FolderDeleteRequest>;
    responseSerialize: grpc.serialize<document_pb.FolderStatus>;
    responseDeserialize: grpc.deserialize<document_pb.FolderStatus>;
}
interface IFolderServiceService_IGetRootFolder extends grpc.MethodDefinition<document_pb.RootFolderRequest, document_pb.FolderResponse> {
    path: "/document.FolderService/GetRootFolder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<document_pb.RootFolderRequest>;
    requestDeserialize: grpc.deserialize<document_pb.RootFolderRequest>;
    responseSerialize: grpc.serialize<document_pb.FolderResponse>;
    responseDeserialize: grpc.deserialize<document_pb.FolderResponse>;
}
interface IFolderServiceService_ICreateRootFolder extends grpc.MethodDefinition<document_pb.RootFolderRequest, document_pb.FolderStatus> {
    path: "/document.FolderService/CreateRootFolder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<document_pb.RootFolderRequest>;
    requestDeserialize: grpc.deserialize<document_pb.RootFolderRequest>;
    responseSerialize: grpc.serialize<document_pb.FolderStatus>;
    responseDeserialize: grpc.deserialize<document_pb.FolderStatus>;
}
interface IFolderServiceService_IGetFolderContent extends grpc.MethodDefinition<document_pb.FolderGetRequest, document_pb.FolderResponse> {
    path: "/document.FolderService/GetFolderContent";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<document_pb.FolderGetRequest>;
    requestDeserialize: grpc.deserialize<document_pb.FolderGetRequest>;
    responseSerialize: grpc.serialize<document_pb.FolderResponse>;
    responseDeserialize: grpc.deserialize<document_pb.FolderResponse>;
}

export const FolderServiceService: IFolderServiceService;

export interface IFolderServiceServer {
    createFolder: grpc.handleUnaryCall<document_pb.FolderCreateRequest, document_pb.FolderStatus>;
    getFolder: grpc.handleUnaryCall<document_pb.FolderGetRequest, document_pb.FolderResponse>;
    updateFolder: grpc.handleUnaryCall<document_pb.FolderUpdateRequest, document_pb.FolderStatus>;
    deleteFolder: grpc.handleUnaryCall<document_pb.FolderDeleteRequest, document_pb.FolderStatus>;
    getRootFolder: grpc.handleUnaryCall<document_pb.RootFolderRequest, document_pb.FolderResponse>;
    createRootFolder: grpc.handleUnaryCall<document_pb.RootFolderRequest, document_pb.FolderStatus>;
    getFolderContent: grpc.handleUnaryCall<document_pb.FolderGetRequest, document_pb.FolderResponse>;
}

export interface IFolderServiceClient {
    createFolder(request: document_pb.FolderCreateRequest, callback: (error: grpc.ServiceError | null, response: document_pb.FolderStatus) => void): grpc.ClientUnaryCall;
    createFolder(request: document_pb.FolderCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: document_pb.FolderStatus) => void): grpc.ClientUnaryCall;
    createFolder(request: document_pb.FolderCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: document_pb.FolderStatus) => void): grpc.ClientUnaryCall;
    getFolder(request: document_pb.FolderGetRequest, callback: (error: grpc.ServiceError | null, response: document_pb.FolderResponse) => void): grpc.ClientUnaryCall;
    getFolder(request: document_pb.FolderGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: document_pb.FolderResponse) => void): grpc.ClientUnaryCall;
    getFolder(request: document_pb.FolderGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: document_pb.FolderResponse) => void): grpc.ClientUnaryCall;
    updateFolder(request: document_pb.FolderUpdateRequest, callback: (error: grpc.ServiceError | null, response: document_pb.FolderStatus) => void): grpc.ClientUnaryCall;
    updateFolder(request: document_pb.FolderUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: document_pb.FolderStatus) => void): grpc.ClientUnaryCall;
    updateFolder(request: document_pb.FolderUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: document_pb.FolderStatus) => void): grpc.ClientUnaryCall;
    deleteFolder(request: document_pb.FolderDeleteRequest, callback: (error: grpc.ServiceError | null, response: document_pb.FolderStatus) => void): grpc.ClientUnaryCall;
    deleteFolder(request: document_pb.FolderDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: document_pb.FolderStatus) => void): grpc.ClientUnaryCall;
    deleteFolder(request: document_pb.FolderDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: document_pb.FolderStatus) => void): grpc.ClientUnaryCall;
    getRootFolder(request: document_pb.RootFolderRequest, callback: (error: grpc.ServiceError | null, response: document_pb.FolderResponse) => void): grpc.ClientUnaryCall;
    getRootFolder(request: document_pb.RootFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: document_pb.FolderResponse) => void): grpc.ClientUnaryCall;
    getRootFolder(request: document_pb.RootFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: document_pb.FolderResponse) => void): grpc.ClientUnaryCall;
    createRootFolder(request: document_pb.RootFolderRequest, callback: (error: grpc.ServiceError | null, response: document_pb.FolderStatus) => void): grpc.ClientUnaryCall;
    createRootFolder(request: document_pb.RootFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: document_pb.FolderStatus) => void): grpc.ClientUnaryCall;
    createRootFolder(request: document_pb.RootFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: document_pb.FolderStatus) => void): grpc.ClientUnaryCall;
    getFolderContent(request: document_pb.FolderGetRequest, callback: (error: grpc.ServiceError | null, response: document_pb.FolderResponse) => void): grpc.ClientUnaryCall;
    getFolderContent(request: document_pb.FolderGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: document_pb.FolderResponse) => void): grpc.ClientUnaryCall;
    getFolderContent(request: document_pb.FolderGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: document_pb.FolderResponse) => void): grpc.ClientUnaryCall;
}

export class FolderServiceClient extends grpc.Client implements IFolderServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public createFolder(request: document_pb.FolderCreateRequest, callback: (error: grpc.ServiceError | null, response: document_pb.FolderStatus) => void): grpc.ClientUnaryCall;
    public createFolder(request: document_pb.FolderCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: document_pb.FolderStatus) => void): grpc.ClientUnaryCall;
    public createFolder(request: document_pb.FolderCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: document_pb.FolderStatus) => void): grpc.ClientUnaryCall;
    public getFolder(request: document_pb.FolderGetRequest, callback: (error: grpc.ServiceError | null, response: document_pb.FolderResponse) => void): grpc.ClientUnaryCall;
    public getFolder(request: document_pb.FolderGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: document_pb.FolderResponse) => void): grpc.ClientUnaryCall;
    public getFolder(request: document_pb.FolderGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: document_pb.FolderResponse) => void): grpc.ClientUnaryCall;
    public updateFolder(request: document_pb.FolderUpdateRequest, callback: (error: grpc.ServiceError | null, response: document_pb.FolderStatus) => void): grpc.ClientUnaryCall;
    public updateFolder(request: document_pb.FolderUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: document_pb.FolderStatus) => void): grpc.ClientUnaryCall;
    public updateFolder(request: document_pb.FolderUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: document_pb.FolderStatus) => void): grpc.ClientUnaryCall;
    public deleteFolder(request: document_pb.FolderDeleteRequest, callback: (error: grpc.ServiceError | null, response: document_pb.FolderStatus) => void): grpc.ClientUnaryCall;
    public deleteFolder(request: document_pb.FolderDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: document_pb.FolderStatus) => void): grpc.ClientUnaryCall;
    public deleteFolder(request: document_pb.FolderDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: document_pb.FolderStatus) => void): grpc.ClientUnaryCall;
    public getRootFolder(request: document_pb.RootFolderRequest, callback: (error: grpc.ServiceError | null, response: document_pb.FolderResponse) => void): grpc.ClientUnaryCall;
    public getRootFolder(request: document_pb.RootFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: document_pb.FolderResponse) => void): grpc.ClientUnaryCall;
    public getRootFolder(request: document_pb.RootFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: document_pb.FolderResponse) => void): grpc.ClientUnaryCall;
    public createRootFolder(request: document_pb.RootFolderRequest, callback: (error: grpc.ServiceError | null, response: document_pb.FolderStatus) => void): grpc.ClientUnaryCall;
    public createRootFolder(request: document_pb.RootFolderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: document_pb.FolderStatus) => void): grpc.ClientUnaryCall;
    public createRootFolder(request: document_pb.RootFolderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: document_pb.FolderStatus) => void): grpc.ClientUnaryCall;
    public getFolderContent(request: document_pb.FolderGetRequest, callback: (error: grpc.ServiceError | null, response: document_pb.FolderResponse) => void): grpc.ClientUnaryCall;
    public getFolderContent(request: document_pb.FolderGetRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: document_pb.FolderResponse) => void): grpc.ClientUnaryCall;
    public getFolderContent(request: document_pb.FolderGetRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: document_pb.FolderResponse) => void): grpc.ClientUnaryCall;
}
