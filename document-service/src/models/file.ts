import mongoose, { Document, Schema } from 'mongoose';

export interface IFile extends Document {
    name: string;
    contentType: string;
    content: Buffer;
    ownerId: string;
    folderId?: string; // This will be null or undefined for files in the root directory
}

const FileSchema: Schema = new Schema({
    name: { type: String, required: true },
    contentType: { type: String, required: true },
    content: { type: Buffer, required: true },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    folderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Folder', default: null }
}, {
    timestamps: true
});

export const File = mongoose.model<IFile>('File', FileSchema);
