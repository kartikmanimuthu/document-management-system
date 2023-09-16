// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var document_pb = require('./document_pb.js');

function serialize_document_DeleteFileRequest(arg) {
  if (!(arg instanceof document_pb.DeleteFileRequest)) {
    throw new Error('Expected argument of type document.DeleteFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_document_DeleteFileRequest(buffer_arg) {
  return document_pb.DeleteFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_document_DeleteStatus(arg) {
  if (!(arg instanceof document_pb.DeleteStatus)) {
    throw new Error('Expected argument of type document.DeleteStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_document_DeleteStatus(buffer_arg) {
  return document_pb.DeleteStatus.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_document_FileResponse(arg) {
  if (!(arg instanceof document_pb.FileResponse)) {
    throw new Error('Expected argument of type document.FileResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_document_FileResponse(buffer_arg) {
  return document_pb.FileResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_document_FileUploadRequest(arg) {
  if (!(arg instanceof document_pb.FileUploadRequest)) {
    throw new Error('Expected argument of type document.FileUploadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_document_FileUploadRequest(buffer_arg) {
  return document_pb.FileUploadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_document_FilesResponse(arg) {
  if (!(arg instanceof document_pb.FilesResponse)) {
    throw new Error('Expected argument of type document.FilesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_document_FilesResponse(buffer_arg) {
  return document_pb.FilesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_document_FolderCreateRequest(arg) {
  if (!(arg instanceof document_pb.FolderCreateRequest)) {
    throw new Error('Expected argument of type document.FolderCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_document_FolderCreateRequest(buffer_arg) {
  return document_pb.FolderCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_document_FolderDeleteRequest(arg) {
  if (!(arg instanceof document_pb.FolderDeleteRequest)) {
    throw new Error('Expected argument of type document.FolderDeleteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_document_FolderDeleteRequest(buffer_arg) {
  return document_pb.FolderDeleteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_document_FolderGetRequest(arg) {
  if (!(arg instanceof document_pb.FolderGetRequest)) {
    throw new Error('Expected argument of type document.FolderGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_document_FolderGetRequest(buffer_arg) {
  return document_pb.FolderGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_document_FolderResponse(arg) {
  if (!(arg instanceof document_pb.FolderResponse)) {
    throw new Error('Expected argument of type document.FolderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_document_FolderResponse(buffer_arg) {
  return document_pb.FolderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_document_FolderStatus(arg) {
  if (!(arg instanceof document_pb.FolderStatus)) {
    throw new Error('Expected argument of type document.FolderStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_document_FolderStatus(buffer_arg) {
  return document_pb.FolderStatus.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_document_FolderUpdateRequest(arg) {
  if (!(arg instanceof document_pb.FolderUpdateRequest)) {
    throw new Error('Expected argument of type document.FolderUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_document_FolderUpdateRequest(buffer_arg) {
  return document_pb.FolderUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_document_GetAllFilesRequest(arg) {
  if (!(arg instanceof document_pb.GetAllFilesRequest)) {
    throw new Error('Expected argument of type document.GetAllFilesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_document_GetAllFilesRequest(buffer_arg) {
  return document_pb.GetAllFilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_document_GetFileRequest(arg) {
  if (!(arg instanceof document_pb.GetFileRequest)) {
    throw new Error('Expected argument of type document.GetFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_document_GetFileRequest(buffer_arg) {
  return document_pb.GetFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_document_RootFolderRequest(arg) {
  if (!(arg instanceof document_pb.RootFolderRequest)) {
    throw new Error('Expected argument of type document.RootFolderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_document_RootFolderRequest(buffer_arg) {
  return document_pb.RootFolderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_document_UpdateFileRequest(arg) {
  if (!(arg instanceof document_pb.UpdateFileRequest)) {
    throw new Error('Expected argument of type document.UpdateFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_document_UpdateFileRequest(buffer_arg) {
  return document_pb.UpdateFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_document_UploadStatus(arg) {
  if (!(arg instanceof document_pb.UploadStatus)) {
    throw new Error('Expected argument of type document.UploadStatus');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_document_UploadStatus(buffer_arg) {
  return document_pb.UploadStatus.deserializeBinary(new Uint8Array(buffer_arg));
}


// File Service
var FileServiceService = exports.FileServiceService = {
  uploadFile: {
    path: '/document.FileService/UploadFile',
    requestStream: false,
    responseStream: false,
    requestType: document_pb.FileUploadRequest,
    responseType: document_pb.UploadStatus,
    requestSerialize: serialize_document_FileUploadRequest,
    requestDeserialize: deserialize_document_FileUploadRequest,
    responseSerialize: serialize_document_UploadStatus,
    responseDeserialize: deserialize_document_UploadStatus,
  },
  getFile: {
    path: '/document.FileService/GetFile',
    requestStream: false,
    responseStream: false,
    requestType: document_pb.GetFileRequest,
    responseType: document_pb.FileResponse,
    requestSerialize: serialize_document_GetFileRequest,
    requestDeserialize: deserialize_document_GetFileRequest,
    responseSerialize: serialize_document_FileResponse,
    responseDeserialize: deserialize_document_FileResponse,
  },
  deleteFile: {
    path: '/document.FileService/DeleteFile',
    requestStream: false,
    responseStream: false,
    requestType: document_pb.DeleteFileRequest,
    responseType: document_pb.DeleteStatus,
    requestSerialize: serialize_document_DeleteFileRequest,
    requestDeserialize: deserialize_document_DeleteFileRequest,
    responseSerialize: serialize_document_DeleteStatus,
    responseDeserialize: deserialize_document_DeleteStatus,
  },
  updateFile: {
    path: '/document.FileService/UpdateFile',
    requestStream: false,
    responseStream: false,
    requestType: document_pb.UpdateFileRequest,
    responseType: document_pb.FileResponse,
    requestSerialize: serialize_document_UpdateFileRequest,
    requestDeserialize: deserialize_document_UpdateFileRequest,
    responseSerialize: serialize_document_FileResponse,
    responseDeserialize: deserialize_document_FileResponse,
  },
  getAllFiles: {
    path: '/document.FileService/GetAllFiles',
    requestStream: false,
    responseStream: false,
    requestType: document_pb.GetAllFilesRequest,
    responseType: document_pb.FilesResponse,
    requestSerialize: serialize_document_GetAllFilesRequest,
    requestDeserialize: deserialize_document_GetAllFilesRequest,
    responseSerialize: serialize_document_FilesResponse,
    responseDeserialize: deserialize_document_FilesResponse,
  },
};

exports.FileServiceClient = grpc.makeGenericClientConstructor(FileServiceService);
// ################################################################################################################################
//
// Service to manage folders
var FolderServiceService = exports.FolderServiceService = {
  createFolder: {
    path: '/document.FolderService/CreateFolder',
    requestStream: false,
    responseStream: false,
    requestType: document_pb.FolderCreateRequest,
    responseType: document_pb.FolderStatus,
    requestSerialize: serialize_document_FolderCreateRequest,
    requestDeserialize: deserialize_document_FolderCreateRequest,
    responseSerialize: serialize_document_FolderStatus,
    responseDeserialize: deserialize_document_FolderStatus,
  },
  getFolder: {
    path: '/document.FolderService/GetFolder',
    requestStream: false,
    responseStream: false,
    requestType: document_pb.FolderGetRequest,
    responseType: document_pb.FolderResponse,
    requestSerialize: serialize_document_FolderGetRequest,
    requestDeserialize: deserialize_document_FolderGetRequest,
    responseSerialize: serialize_document_FolderResponse,
    responseDeserialize: deserialize_document_FolderResponse,
  },
  updateFolder: {
    path: '/document.FolderService/UpdateFolder',
    requestStream: false,
    responseStream: false,
    requestType: document_pb.FolderUpdateRequest,
    responseType: document_pb.FolderStatus,
    requestSerialize: serialize_document_FolderUpdateRequest,
    requestDeserialize: deserialize_document_FolderUpdateRequest,
    responseSerialize: serialize_document_FolderStatus,
    responseDeserialize: deserialize_document_FolderStatus,
  },
  deleteFolder: {
    path: '/document.FolderService/DeleteFolder',
    requestStream: false,
    responseStream: false,
    requestType: document_pb.FolderDeleteRequest,
    responseType: document_pb.FolderStatus,
    requestSerialize: serialize_document_FolderDeleteRequest,
    requestDeserialize: deserialize_document_FolderDeleteRequest,
    responseSerialize: serialize_document_FolderStatus,
    responseDeserialize: deserialize_document_FolderStatus,
  },
  getRootFolder: {
    path: '/document.FolderService/GetRootFolder',
    requestStream: false,
    responseStream: false,
    requestType: document_pb.RootFolderRequest,
    responseType: document_pb.FolderResponse,
    requestSerialize: serialize_document_RootFolderRequest,
    requestDeserialize: deserialize_document_RootFolderRequest,
    responseSerialize: serialize_document_FolderResponse,
    responseDeserialize: deserialize_document_FolderResponse,
  },
  createRootFolder: {
    path: '/document.FolderService/CreateRootFolder',
    requestStream: false,
    responseStream: false,
    requestType: document_pb.RootFolderRequest,
    responseType: document_pb.FolderStatus,
    requestSerialize: serialize_document_RootFolderRequest,
    requestDeserialize: deserialize_document_RootFolderRequest,
    responseSerialize: serialize_document_FolderStatus,
    responseDeserialize: deserialize_document_FolderStatus,
  },
  getFolderContent: {
    path: '/document.FolderService/GetFolderContent',
    requestStream: false,
    responseStream: false,
    requestType: document_pb.FolderGetRequest,
    responseType: document_pb.FolderResponse,
    requestSerialize: serialize_document_FolderGetRequest,
    requestDeserialize: deserialize_document_FolderGetRequest,
    responseSerialize: serialize_document_FolderResponse,
    responseDeserialize: deserialize_document_FolderResponse,
  },
};

exports.FolderServiceClient = grpc.makeGenericClientConstructor(FolderServiceService);
