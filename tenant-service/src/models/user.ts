import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
    tenantID: mongoose.Types.ObjectId;
    username: string;
    password: string;
    email: string;
}

const UserSchema: Schema = new Schema({
    tenantID: { type: mongoose.Types.ObjectId, ref: 'Tenant', required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
}, {
    timestamps: true
});

export const User = mongoose.model<IUser>('User', UserSchema);
