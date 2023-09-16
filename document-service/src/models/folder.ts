import mongoose, { Document, Schema } from 'mongoose';

export interface IFolder extends Document {
    name: string;
    ownerId: Schema.Types.ObjectId; // Owner of the folder
    parentFolderId?: Schema.Types.ObjectId; // If this is inside another folder, it has a parent folder.
}

const FolderSchema: Schema = new Schema({
    name: { type: String, required: true },
    ownerId: { type: Schema.Types.ObjectId, required: true },
    parentFolderId: { type: Schema.Types.ObjectId, ref: 'Folder' } // ID of parent folder if it exists.
}, {
    timestamps: true
});

export const Folder = mongoose.model<IFolder>('Folder', FolderSchema);
