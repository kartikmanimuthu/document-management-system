import express, { Request, Response } from 'express';
import { tenantClient as client } from '../grpc-client';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Tenant:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the tenant
 *         name:
 *           type: string
 *           description: The name of the tenant
 *       example:
 *         id: d5fE_asz
 *         name: Tenant1
 */

/**
 * @swagger
 * /tenant:
 *  post:
 *    description: Create a new tenant
 *    tags:
 *      - Tenants
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                description: Tenant name.
 *                type: string
 *            required:
 *              - name
 *    responses:
 *      200:
 *        description: Successfully created
 */
router.post('/tenant', (req: Request, res: Response) => {
    global.logger.debug(req.body);
    global.logger.info('Creating a new tenant...', { ...req.body });
    client.CreateTenant({ ...req.body }, (error: Error, tenant: unknown) => {
        if (error) {
            global.logger.error(`Failed to create tenant: ${error.message}`);
            res.status(500).json({ error: 'Failed to create tenant' });
        } else {
            global.logger.info('Tenant created successfully.');
            res.status(201).json(tenant);
        }
    });
});



/**
 * @swagger
 * /tenant:
 *  get:
 *    description: Retrieve all tenants
 *    tags:
 *      - Tenants
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: A list of tenants.
 *        schema:
 *          type: array
 *          items:
 *            $ref: '#/definitions/Tenant'
 *      404:
 *        description: No tenants found.
 *      500:
 *        description: Server error.
 */
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


/**
 * @swagger
 * /tenant/{id}:
 *  get:
 *    description: Retrieve a tenant
 *    tags:
 *      - Tenants
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: id
 *        description: Tenant's ID.
 *        in: path
 *        required: true
 *        type: string
 *    responses:
 *      200:
 *        description: Successfully retrieved
 */
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


/**
 * @swagger
 * /tenant/{id}:
 *   put:
 *     summary: Update a tenant
 *     tags:
 *       - Tenants
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the tenant to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Tenant's new data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: New name of the tenant
 *     responses:
 *       200:
 *         description: Tenant updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *       500:
 *         description: Failed to update tenant
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.put('/tenant/:id', (req: Request, res: Response) => {
    global.logger.info(`Updating tenant with ID: ${req.params.id}`);
    const updateData = {
        id: req.params.id,
        ...req.body
    };
    global.logger.debug('Updating tenant payload : ', updateData);

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

/**
 * @swagger
 * /tenant/{id}:
 *  delete:
 *    description: Delete a tenant
 *    tags:
 *      - Tenants
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: id
 *        description: Tenant's ID.
 *        in: path
 *        required: true
 *        type: string
 *    responses:
 *      200:
 *        description: Successfully deleted
 */
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
