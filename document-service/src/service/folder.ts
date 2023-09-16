import * as grpc from '@grpc/grpc-js';
import { IFolder, Folder } from '../models/folder';
import {
    FolderStatus, FolderDeleteRequest, FolderUpdateRequest, RootFolderRequest
} from '../../../protos/generated/document_pb';


export const CreateRootFolder = async (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>): Promise<void> => {
    const { ownerid } = call.request;
    try {
        const rootFolder = new Folder({
            name: 'Root',
            ownerId: ownerid,
            parentFolderId: null
        });
        const rootany = await rootFolder.save();
        callback(null, rootany);
    } catch (error) {
        callback({
            code: grpc.status.INTERNAL,
            details: "Failed to create root folder"
        }, null);
    }
}

export const GetRootFolder = async (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>): Promise<void> => {
    const { ownerid } = call.request as any;
    try {
        const rootFolder = await Folder.findOne({ ownerId: ownerid, parentFolderId: null });
        if (rootFolder) {
            callback(null, rootFolder);
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Root folder not found"
            }, null);
        }
    } catch (error) {
        callback({
            code: grpc.status.INTERNAL,
            details: "Failed to fetch root folder"
        }, null);
    }
}


export const GetFolderContent = async (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>): Promise<void> => {
    const folderId = (call.request as any).id;
    try {
        const folder = await Folder.findById(folderId).populate('files').populate('folders');
        if (folder) {
            callback(null, folder);
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Folder not found"
            }, null);
        }
    } catch (error) {
        callback({
            code: grpc.status.INTERNAL,
            details: "Failed to fetch folder content"
        }, null);
    }
}

export const CreateFolder = async (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>): Promise<void> => {
    try {
        const folder = new Folder({
            name: call.request.name,
            ownerId: call.request.ownerId,
            parentFolderId: call.request.parentFolderId
        });
        const folderResponse = await folder.save();
        callback(null, folderResponse);
    } catch (error) {
        callback({
            code: grpc.status.INTERNAL,
            details: "Failed to create folder"
        }, null);
    }
}

export const GetFolder = async (call: grpc.ServerUnaryCall<any | any, any>, callback: grpc.sendUnaryData<any>): Promise<void> => {
    const folderId = call.request.id;
    try {
        const folderRes = await Folder.findById(folderId);
        if (folderRes) {
            callback(null, folderRes);
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Folder not found"
            }, null);
        }
    } catch (error) {
        callback({
            code: grpc.status.INTERNAL,
            details: "Failed to retrieve folder"
        }, null);
    }
}

export const UpdateFolder = async (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>): Promise<void> => {
    const folderId = call.request.id;
    const name = call.request.newName;
    try {
        const folderRes = await Folder.findByIdAndUpdate(folderId, { name });
        callback(null, folderRes);
    } catch (error) {
        callback({
            code: grpc.status.INTERNAL,
            details: "Failed to update folder"
        }, null);
    }
}

export const DeleteFolder = async (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>): Promise<void> => {
    const folderId = call.request.id;
    try {
        const folderRes = await Folder.findByIdAndDelete(folderId);
        callback(null, folderRes);
    } catch (error) {
        callback({
            code: grpc.status.INTERNAL,
            details: "Failed to delete folder"
        }, null);
    }
}