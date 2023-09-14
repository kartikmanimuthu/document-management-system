import * as grpc from '@grpc/grpc-js';

import { Tenant, ITenant } from '../models/tenant';

const CreateTenant = async (call: any, callback: any) => {
    const { name } = call.request;
    global.logger.info('[tenant.ts] [CreateTenant] Payload', name);
    try {
        const tenant = new Tenant({ name });
        const docs = await tenant.save();
        global.logger.debug('[tenant.ts] [CreateTenant] docs', docs);
        callback(null, docs);
    } catch (error) {
        global.logger.error('[tenant.ts] [CreateTenant] error :', (error as Error).message);
        callback({
            code: grpc.status.INTERNAL,
            details: "Failed to create tenant"
        });
    }
}

const GetAllTenants = async (call: any, callback: any) => {
    try {
        const tenants = await Tenant.find();
        callback(null, { tenants });
    } catch (error) {
        callback({
            code: grpc.status.INTERNAL,
            details: "Failed to retrieve tenants"
        });
    }
}


const GetTenantById = async (call: any, callback: any) => {
    const { id } = call.request;
    try {
        const tenant = await Tenant.findById(id);
        if (tenant) {
            callback(null, tenant);
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "Tenant not found"
            });
        }
    } catch (error) {
        callback({
            code: grpc.status.INTERNAL,
            details: "Failed to retrieve tenant"
        });
    }
}

const UpdateTenant = async (call: any, callback: any) => {
    const { id, name } = call.request;
    try {
        const updatedTenant = await Tenant.findByIdAndUpdate(id, { name }, { new: true });
        callback(null, updatedTenant);
    } catch (error) {
        callback({
            code: grpc.status.INTERNAL,
            details: "Failed to update tenant"
        });
    }
}

const DeleteTenant = async (call: any, callback: any) => {
    const { id } = call.request;
    try {
        await Tenant.findByIdAndDelete(id);
        callback(null, { success: true });
    } catch (error) {
        callback({
            code: grpc.status.INTERNAL,
            details: "Failed to delete tenant"
        });
    }
}

export {
    CreateTenant, GetAllTenants, UpdateTenant, DeleteTenant, GetTenantById
}
