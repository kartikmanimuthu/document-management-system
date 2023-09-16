import * as grpc from '@grpc/grpc-js';
import mongoose, { Mongoose } from 'mongoose';


import { File, IFile } from '../models/file';
import { GetFileRequest, FileResponse, DeleteFileRequest, DeleteStatus, UpdateFileRequest, GetAllFilesRequest, FilesResponse } from '../../../protos/generated/document_pb';


export const UploadFile = async (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>): Promise<void> => {

    const { name, content, ownerid, folderid, contenttype } = call.request;

    const file = new File({
        name,
        content,
        contentType: contenttype,
        ownerId: ownerid,
        folderId: folderid
    });

    try {
        const fileUploadRes = await file.save();
        callback(null, {
            success: true,
            message: "File Saved Successfully"
        });
    } catch (error) {
        console.error("Error saving file:", error);
        callback({
            code: grpc.status.INTERNAL,
            details: "Failed to save the file."
        }, null);
    }
}

export const GetFile = async (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>): Promise<void> => {
    const { id } = call.request;

    try {
        const file: IFile | null = await File.findById(id);
        if (file) {

            const fileResponse = {
                id: file.id,
                name: file.name,
                // content: file.content,
                contenttype: file.contentType,
                ownerid: file.ownerId,
                folderid: file.folderId,
            }
            callback(null, fileResponse);
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "File not found."
            }, null);
        }
    } catch (error) {
        console.error("Error fetching file:", error);
        callback({
            code: grpc.status.INTERNAL,
            details: "Failed to retrieve the file."
        }, null);
    }
}

export const DeleteFile = async (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>): Promise<void> => {
    const { id } = call.request;

    try {
        const response = await File.findByIdAndDelete(id);
        callback(null, {
            success: true,
            message: "File Deleted Successfully"
        });
    } catch (error) {
        console.error("Error deleting file:", error);
        callback({
            code: grpc.status.INTERNAL,
            details: "Failed to delete the file."
        }, null);
    }
}

export const UpdateFile = async (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>): Promise<void> => {
    const { id, name, contenttype, content, ownerid, folderid } = call.request;

    const updatedData = {
        name,
        content,
        contentType: contenttype,
        ownerId: ownerid,
        folderId: folderid
    };

    try {
        const file = await File.findByIdAndUpdate(id, updatedData, { new: true });
        if (file) {
            const fileResponse = {
                id: file.id,
                name: file.name,
                // content: file.content,
                contenttype: file.contentType,
                ownerid: file.ownerId,
                folderid: file.folderId,
            }
            callback(null, fileResponse);
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "File not found."
            }, null);
        }
    } catch (error) {
        console.error("Error updating file:", error);
        callback({
            code: grpc.status.INTERNAL,
            details: "Failed to update the file."
        }, null);
    }
}

export const GetAllFiles = async (call: grpc.ServerUnaryCall<any, any>, callback: grpc.sendUnaryData<any>): Promise<void> => {
    const { ownerId } = call.request;
    const ownerIdObj = new mongoose.Types.ObjectId(ownerId);

    try {
        const files: IFile[] = await File.find({ ownerId: ownerIdObj });

        const fileResponse = files.map((file) => {
            return {
                id: file.id,
                name: file.name,
                // content: file.content,
                contenttype: file.contentType,
                ownerid: file.ownerId,
                folderid: file.folderId,
            }
        })

        const response = {
            files: fileResponse
        };

        callback(null, response);

    } catch (error) {
        console.error("Error fetching files:", error);
        callback({
            code: grpc.status.INTERNAL,
            details: "Failed to retrieve files."
        }, null);
    }
}