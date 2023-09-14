import mongoose, { Document, Schema } from 'mongoose';

export interface IFolder extends Document {
    name: string;
    parentFolderID?: mongoose.Types.ObjectId;
    ownerID: mongoose.Types.ObjectId;
}

const FolderSchema: Schema = new Schema({
    name: { type: String, required: true },
    parentFolderID: { type: mongoose.Types.ObjectId, ref: 'Folder' },
    ownerID: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
}, {
    timestamps: true
});

export const Folder = mongoose.model<IFolder>('Folder', FolderSchema);
