import express, { Request, Response } from 'express';
import { userClient as client } from '../grpc-client';
import grpc from '@grpc/grpc-js';

const router = express.Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - tenantId
 *         - username
 *         - password
 *         - email
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: Full name of the user
 *         tenantId:
 *           type: string
 *           description: Identifier for the associated tenant
 *         username:
 *           type: string
 *           description: Username used for logging in
 *         password:
 *           type: string
 *           description: Encrypted password
 *         email:
 *           type: string
 *           description: Email address of the user
 *       example:
 *         id: d6gH_ert
 *         name: John Doe
 *         tenantId: d5fE_asz
 *         username: johndoe
 *         password: encryptedPassword123
 *         email: johndoe@example.com
 */



/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create a user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               tenantID:
 *                 type: string
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: User created successfully
 *       500:
 *         description: Failed to create user
 */
router.post('/user', async (req: Request, res: Response) => {
    global.logger.info("[user.ts] [CreateUser] : ", req.body);

    client.CreateUser({ ...req.body }, (error: grpc.ServiceError, response: unknown) => {
        if (error) {
            global.logger.error(`Error creating user: ${error.details}`);
            return res.status(500).json({ error: error.details });
        }
        else {
            global.logger.debug(`User Created Succssfully:`, response);
            res.json(response);
        }
    });
});


/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: User retrieved successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Failed to retrieve user
 */
router.get('/user/:id', (req: Request, res: Response) => {
    const { id } = req.params;

    client.GetUser({ id }, (error: grpc.ServiceError, response: unknown) => {
        if (error) {
            global.logger.error(`Error retrieving user: ${error.details}`);
            return res.status(500).json({ error: error.details });
        }
        res.json(response);
    });
});

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Retrieve all users
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: List of all users
 *       500:
 *         description: Failed to retrieve users
 */
router.get('/user', (req: Request, res: Response) => {
    global.logger.info('Fetching all users');

    client.GetAllUsers({}, (error: grpc.ServiceError, response: { users: unknown[] }) => {
        if (error) {
            global.logger.error(`Error retrieving all users: ${error.details}`);
            return res.status(500).json({ error: error.details });
        }
        else {
            global.logger.info('Users retrieved successfully.');
            res.json(response.users);
        }
    });
});

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Update a user by ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               tenantID:
 *                 type: string
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Failed to update user
 */
router.put('/user/:id', (req: Request, res: Response) => {
    global.logger.info(`Updating user: ${req.params.id}`);
    const { id } = req.params;
    const { username, password, email, tenantID } = req.body;

    const updateUserRequest = {
        id,
        username,
        password,
        email,
        tenantID
    };


    global.logger.info("[user.ts] [UpdateUser] Payload: ", updateUserRequest);

    client.UpdateUser(updateUserRequest, (error: grpc.ServiceError, response: unknown) => {
        if (error) {
            global.logger.error(`Error updating user: ${error.details}`);
            return res.status(500).json({ error: error.details });
        }
        else {
            global.logger.info('User updated successfully.');
            res.json(response);
        }
    });
});

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user to delete
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Failed to delete user
 */
router.delete('/user/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    global.logger.info(`Deleting user: ${req.params.id}`);

    client.DeleteUser({ id }, (error: grpc.ServiceError, response: { success: boolean }) => {
        if (error) {
            global.logger.error(`Error deleting user: ${error.details}`);
            return res.status(500).json({ error: error.details });
        }
        else {
            global.logger.info('User deleted successfully.');
            res.json(response);
        }
    });
});

export default router;
