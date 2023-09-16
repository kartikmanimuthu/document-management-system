import express, { Request, Response } from 'express';

import { folerServiceClient as client } from '../grpc-typesafe-client';
import { RootFolderRequest, FolderGetRequest, FolderCreateRequest, FolderUpdateRequest, FolderDeleteRequest, FolderStatus, FolderResponse } from '../../../protos/generated/document_pb';


const router = express.Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     Folder:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the folder
 *         name:
 *           type: string
 *           description: The name of the folder
 *         ownerId:
 *           type: string
 *           description: The owner ID associated with the folder
 *         parentFolderId:
 *           type: string
 *           description: The parent folder's ID
 *       example:
 *         id: d5fE_asz
 *         name: Root
 *         ownerId: ownerId123
 *         parentFolderId: parentFolderId123
 */


/**
 * @swagger
 * /folder/root:
 *   post:
 *     description: Create a root folder
 *     tags:
 *       - Folders
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ownerId:
 *                 description: Owner ID for the root folder.
 *                 type: string
 *             required:
 *               - ownerId
 *     responses:
 *       200:
 *         description: Root folder created successfully
 *       500:
 *         description: Failed to create root folder
 */
router.post('/folder/root', async (req, res) => {
    global.logger.debug('[folder.ts] [createRootFolder]', req.body);

    const request = new RootFolderRequest();
    request.setOwnerid(req.body.ownerId);

    global.logger.info('[folder.ts] [createRootFolder] Creating a root folder');
    client.createRootFolder(request.toObject() as unknown as RootFolderRequest, (error: any, response: any) => {
        if (error) {
            global.logger.error(`[folder.ts] [createRootFolder] Failed to create root folder: ${error.message}`);
            res.status(500).send(error.details);
        } else {
            global.logger.info('[folder.ts] [createRootFolder] Root folder created successfully.');
            res.json({ success: response.success, message: response.message });
        }

    });
});


/**
 * @swagger
 * /folder/root/{ownerId}:
 *   get:
 *     description: Retrieve the root folder based on ownerId
 *     tags:
 *       - Folders
 *     parameters:
 *       - name: ownerId
 *         in: path
 *         required: true
 *         description: The owner ID associated with the root folder
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved root folder
 *       404:
 *         description: Root folder not found
 *       500:
 *         description: Failed to retrieve root folder
 */
router.get('/folder/root/:ownerId', async (req: Request, res: Response) => {
    const { ownerId } = req.params;

    global.logger.debug('[folder.ts] [getRootFolder] Request parameters:', req.params);

    const request = new RootFolderRequest();
    request.setOwnerid(ownerId);

    global.logger.info('[folder.ts] [getRootFolder] Retrieving root folder for ownerId:', ownerId);

    client.getRootFolder(request.toObject() as any, (error: any, response: any) => {
        if (error) {
            global.logger.error(`[folder.ts] [getRootFolder] Failed to retrieve root folder for ownerId: ${ownerId}. Error: ${error.message}`);
            res.status(500).json({ success: false, message: error.details });
        } else {
            global.logger.info(`[folder.ts] [getRootFolder] Successfully retrieved root folder for ownerId: ${ownerId}.`);
            res.json(response);
        }
    });
});

/**
 * @swagger
 * /folder/{folderId}:
 *   get:
 *     description: Retrieve details of a specific folder based on folderId
 *     tags:
 *       - Folders
 *     parameters:
 *       - name: folderId
 *         in: path
 *         required: true
 *         description: The ID of the folder
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved folder details
 *       404:
 *         description: Folder not found
 *       500:
 *         description: Failed to retrieve folder details
 */
router.get('/folder/:folderId', async (req: Request, res: Response) => {
    const { folderId } = req.params;

    global.logger.debug('[folder.ts] [getFolder] Request parameters:', req.params);

    const request = new FolderGetRequest();
    request.setId(folderId);

    global.logger.info('[folder.ts] [getFolder] Retrieving folder details for folderId:', folderId);

    client.getFolder(request.toObject() as any, (error: any, response: any) => {
        if (error) {
            global.logger.error(`[folder.ts] [getFolder] Failed to retrieve folder details for folderId: ${folderId}. Error: ${error.message}`);
            res.status(500).json({ success: false, message: error.details });
        } else {
            global.logger.info(`[folder.ts] [getFolder] Successfully retrieved folder details for folderId: ${folderId}.`);
            res.json(response);
        }
    });
});


/**
 * @swagger
 * /folder:
 *   post:
 *     description: Create a new folder
 *     tags:
 *       - Folders
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 description: Folder name.
 *                 type: string
 *               ownerId:
 *                 description: Owner ID of the folder.
 *                 type: string
 *               parentFolderId:
 *                 description: Parent folder's ID.
 *                 type: string
 *             required:
 *               - name
 *               - ownerId
 *               - parentFolderId
 *     responses:
 *       200:
 *         description: Folder created successfully
 *       500:
 *         description: Failed to create folder
 */
router.post('/folder', (req: Request, res: Response) => {
    const { name, ownerId, parentFolderId } = req.body;

    global.logger.debug('[folder.ts] [createFolder] Request body:', req.body);

    const request = new FolderCreateRequest();
    request.setName(name);
    request.setOwnerId(ownerId);
    request.setParentFolderId(parentFolderId);

    global.logger.info('[folder.ts] [createFolder] Attempting to create a folder with the provided details.');

    client.createFolder(request.toObject() as any, (error: any, response: any) => {
        if (error) {
            global.logger.error(`[folder.ts] [createFolder] Failed to create a folder. Error: ${error.message}`);
            res.status(500).json({ success: false, message: error.details });
        } else {
            global.logger.info('[folder.ts] [createFolder] Folder created successfully.');
            res.json(response);
        }
    });
});


/**
 * @swagger
 * /folder/{folderId}:
 *   put:
 *     description: Update a specific folder
 *     tags:
 *       - Folders
 *     parameters:
 *       - name: folderId
 *         in: path
 *         required: true
 *         description: The ID of the folder to update
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               newName:
 *                 description: New name for the folder.
 *                 type: string
 *     responses:
 *       200:
 *         description: Folder updated successfully
 *       500:
 *         description: Failed to update folder
 */
router.put('/folder/:folderId', (req: Request, res: Response) => {
    const { folderId } = req.params;
    const { newName } = req.body;

    global.logger.debug('[folder.ts] [updateFolder] Request parameters and body:', { params: req.params, body: req.body });

    const request = new FolderUpdateRequest();
    request.setId(folderId);
    request.setNewname(newName);

    global.logger.info(`[folder.ts] [updateFolder] Attempting to update folder with ID: ${folderId}.`);

    client.updateFolder(request.toObject() as any, (error: any, response: any) => {
        if (error) {
            global.logger.error(`[folder.ts] [updateFolder] Failed to update folder with ID: ${folderId}. Error: ${error.message}`);
            res.status(500).json({ success: false, message: error.details });
        } else {
            global.logger.info(`[folder.ts] [updateFolder] Successfully updated folder with ID: ${folderId}.`);
            res.json(response);
        }
    });
});


/**
 * @swagger
 * /folder/{folderId}:
 *   delete:
 *     description: Delete a specific folder
 *     tags:
 *       - Folders
 *     parameters:
 *       - name: folderId
 *         in: path
 *         required: true
 *         description: The ID of the folder to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Folder deleted successfully
 *       500:
 *         description: Failed to delete folder
 */
router.delete('/folder/:folderId', (req: Request, res: Response) => {
    const { folderId } = req.params;

    global.logger.debug('[folder.ts] [deleteFolder] Request parameters:', req.params);

    const request = new FolderDeleteRequest();
    request.setId(folderId);

    global.logger.info(`[folder.ts] [deleteFolder] Attempting to delete folder with ID: ${folderId}.`);

    client.deleteFolder(request.toObject() as any, (error: any, response: any) => {
        if (error) {
            global.logger.error(`[folder.ts] [deleteFolder] Failed to delete folder with ID: ${folderId}. Error: ${error.message}`);
            res.status(500).json({ success: false, message: error.details });
        } else {
            global.logger.info(`[folder.ts] [deleteFolder] Successfully deleted folder with ID: ${folderId}.`);
            res.json(response);
        }
    });
});

/**
 * @swagger
 * /folder/content/{folderId}:
 *   get:
 *     description: Fetch the content of a specific folder
 *     tags:
 *       - Folders
 *     parameters:
 *       - name: folderId
 *         in: path
 *         required: true
 *         description: The ID of the folder whose content is to be fetched
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully fetched folder content
 *       404:
 *         description: Folder not found
 *       500:
 *         description: Failed to fetch folder content
 */
router.get('/folder/content/:folderId', (req: Request, res: Response) => {
    const { folderId } = req.params;

    global.logger.debug('[folder.ts] [getFolderContent] Request parameters:', req.params);

    const request = new FolderGetRequest();
    request.setId(folderId);

    global.logger.info(`[folder.ts] [getFolderContent] Fetching content for folder with ID: ${folderId}.`);

    client.getFolderContent(request.toObject() as any, (error: any, response: any) => {
        if (error) {
            global.logger.error(`[folder.ts] [getFolderContent] Failed to fetch folder content for folder ID: ${folderId}. Error: ${error.message}`);
            res.status(500).json({ success: false, message: error.details });
        } else {
            global.logger.info(`[folder.ts] [getFolderContent] Successfully fetched folder content for folder ID: ${folderId}.`);
            res.json(response);
        }
    });
});


export default router;
