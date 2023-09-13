import express, { Request, Response } from 'express';
import { client } from '../grpc-client';

const router = express.Router();

// Create Tenant
router.post('/tenant', (req: Request, res: Response) => {
    global.logger.info('Creating a new tenant...', { ...req.body });
    client.CreateTenant(req.body, (error: Error, tenant: unknown) => {
        if (error) {
            global.logger.error(`Failed to create tenant: ${error.message}`);
            res.status(500).json({ error: 'Failed to create tenant' });
        } else {
            global.logger.info('Tenant created successfully.');
            res.status(201).json(tenant);
        }
    });
});

// Get All Tenant
router.get('/tenant', (req: Request, res: Response) => {
    global.logger.info(`Fetching all tenant :`);
    client.GetAllTenants({}, (error: Error, tenant: unknown) => {
        if (error) {
            global.logger.error(`Failed to retrieve tenant: ${error.message}`);
            res.status(500).json({ error: 'Failed to retrieve tenant' });
        } else if (!tenant) {
            global.logger.warn('Tenant not found.');
            res.status(404).json({ error: 'Tenant not found' });
        } else {
            global.logger.info('Tenant retrieved successfully.');
            res.json(tenant);
        }
    });
});


// Get Tenant by ID
router.get('/tenant/:id', (req: Request, res: Response) => {
    global.logger.info(`Fetching tenant with ID: ${req.params.id}`);
    client.GetTenantById({ id: req.params.id }, (error: Error, tenant: unknown) => {
        if (error) {
            global.logger.error(`Failed to retrieve tenant: ${error.message}`);
            res.status(500).json({ error: 'Failed to retrieve tenant' });
        } else if (!tenant) {
            global.logger.warn('Tenant not found.');
            res.status(404).json({ error: 'Tenant not found' });
        } else {
            global.logger.info('Tenant retrieved successfully.');
            res.json(tenant);
        }
    });
});

// Update Tenant by ID
router.put('/tenant/:id', (req: Request, res: Response) => {
    global.logger.info(`Updating tenant with ID: ${req.params.id}`);
    const updateData = {
        id: req.params.id,
        ...req.body
    };

    client.UpdateTenant(updateData, (error: Error, response: unknown) => {
        if (error) {
            global.logger.error(`Failed to update tenant: ${error.message}`);
            res.status(500).json({ error: 'Failed to update tenant' });
        } else {
            global.logger.info('Tenant updated successfully.');
            res.json(response);
        }
    });
});

// Delete Tenant by ID
router.delete('/tenant/:id', (req: Request, res: Response) => {
    global.logger.info(`Deleting tenant with ID: ${req.params.id}`);
    client.DeleteTenant({ id: req.params.id }, (error: Error, response: unknown) => {
        if (error) {
            global.logger.error(`Failed to delete tenant: ${error.message}`);
            res.status(500).json({ error: 'Failed to delete tenant' });
        } else {
            global.logger.info('Tenant deleted successfully.');
            res.json(response);
        }
    });
});

export default router;
