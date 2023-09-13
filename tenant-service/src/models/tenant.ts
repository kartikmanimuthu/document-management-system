import mongoose, { Document, Schema } from 'mongoose';

export interface ITenant extends Document {
    name: string;
}

const TenantSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },

}, {
    timestamps: true
});

export const Tenant = mongoose.model<ITenant>('Tenant', TenantSchema);
