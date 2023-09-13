import mongoose, { Document, Schema } from 'mongoose';

export interface IFile extends Document {
    name: string;
    content: string;
    ownerID: mongoose.Types.ObjectId;
    folderID?: mongoose.Types.ObjectId;
}

const FileSchema: Schema = new Schema({
    name: { type: String, required: true },
    content: { type: String, required: true },
    ownerID: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    folderID: { type: mongoose.Types.ObjectId, ref: 'Folder' },
}, {
    timestamps: true
});

export const File = mongoose.model<IFile>('File', FileSchema);
