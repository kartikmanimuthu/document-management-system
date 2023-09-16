import express, { Request, Response } from 'express';
import multer from 'multer';


import { fileServiceClient as client } from '../grpc-typesafe-client';
import { GetFileRequest, FileResponse, DeleteFileRequest, DeleteStatus, UpdateFileRequest, GetAllFilesRequest, FilesResponse, FileUploadRequest } from '../../../protos/generated/document_pb';

const router = express.Router();
const storage = multer.memoryStorage(); // Using memory storage to convert uploaded files into buffers
const upload = multer({ storage: storage });



/**
 * @swagger
 * components:
 *   schemas:
 *     File:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the file.
 *         contentType:
 *           type: string
 *           description: The MIME type of the file.
 *         content:
 *           type: string
 *           format: byte
 *           description: The file content in binary format.
 *         ownerId:
 *           type: string
 *           description: The owner's unique identifier.
 *         folderId:
 *           type: string
 *           description: The folder's unique identifier where the file is stored.
 *       required:
 *         - name
 *         - contentType
 *         - content
 *         - ownerId
 *         - folderId
 *       example:
 *         name: sample.txt
 *         contentType: text/plain
 *         content: dGVzdCBjb250ZW50
 *         ownerId: user123
 *         folderId: folder456
 */



/**
 * @swagger
 * /file:
 *   post:
 *     summary: Upload a file
 *     tags:
 *       - Files
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: The file to be uploaded.
 *               ownerId:
 *                 type: string
 *                 description: The owner's ID.
 *               folderId:
 *                 type: string
 *                 description: The folder's ID.
 *             required:
 *               - file
 *               - ownerId
 *               - folderId
 *     responses:
 *       200:
 *         description: File uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/File'
 *       500:
 *         description: Failed to upload the file
 */
router.post('/file', upload.single('file'), (req: Request, res: Response) => {
    const { originalname: name, mimetype: contentType, buffer: content } = req.file as Express.Multer.File;
    const { ownerId, folderId } = req.body;

    const fileUploadRequest: any = {
        name, contenttype: contentType, content, ownerid: ownerId, folderid: folderId
    }


    client.uploadFile(fileUploadRequest as FileUploadRequest, (error: any, file: any) => {
        if (error) {
            return res.status(500).json({ error: error.details });
        } else {
            res.status(200).json(file);
        }
    });
});



/**
 * @swagger
 * /file/{id}:
 *   get:
 *     summary: Get a file by ID
 *     tags:
 *       - Files
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Unique file ID
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/File'
 *       500:
 *         description: Failed to retrieve the file
 */
router.get('/file/:id', (req: Request, res: Response) => {

    const { id } = req.params;
    client.getFile({ id } as any, (error: any, file: any) => {
        if (error) {
            return res.status(500).json({ error: error.details });
        }
        else {
            res.status(200).json(file);
        }
    });
});


/**
 * @swagger
 * /file/{id}:
 *   delete:
 *     summary: Delete a file by ID
 *     tags:
 *       - Files
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Unique file ID
 *     responses:
 *       200:
 *         description: File deleted successfully
 *       500:
 *         description: Failed to delete the file
 */
router.delete('/file/:id', (req: Request, res: Response) => {

    const { id } = req.params;

    client.deleteFile({ id } as any, (error: any, status: any) => {
        if (error) {
            return res.status(500).json({ error: error.details });
        }
        res.json(status);
    });
});


/**
 * @swagger
 * /file/{id}:
 *   put:
 *     summary: Update a file by ID
 *     tags:
 *       - Files
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Unique file ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/File'
 *     responses:
 *       200:
 *         description: File updated successfully
 *       500:
 *         description: Failed to update the file
 */
router.put('/file/:id', upload.single('file'), (req: Request, res: Response) => {
    const { originalname: name, mimetype: contentType, buffer: content } = req.file as Express.Multer.File;
    const { ownerId, folderId } = req.body;
    const { id } = req.params;

    const updateFileRequest: any = {
        name, contentType, content, ownerId, folderId, id
    }

    client.updateFile(updateFileRequest as UpdateFileRequest, (error: any, file: any) => {
        if (error) {
            return res.status(500).json({ error: error.details });
        } else {
            res.status(200).json(file);
        }
    });
});



/**
 * @swagger
 * /file:
 *   get:
 *     summary: Get all files
 *     tags:
 *       - Files
 *     parameters:
 *       - in: query
 *         name: ownerId
 *         schema:
 *           type: string
 *         required: true
 *         description: Owner's unique identifier
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/File'
 *       500:
 *         description: Failed to retrieve files
 */
router.get('/file', (req: Request, res: Response) => {

    const ownerId = req.query.ownerId;

    client.getAllFiles({ ownerId } as any, (error: any, files: unknown) => {
        if (error) {
            global.logger.error(' [file.ts][getAllFiles] error :', error);
            return res.status(500).json({ error: error.details });
        }
        else {
            res.status(200).json(files);
        }
    });
});

export default router;
