If you're considering storing the file in the gateway service and sending only metadata (like filepath, name, content type) to the document microservice, here's a step-by-step guide on how you can achieve that:

### 1. Storing the File in the Gateway Service

Using the Express framework, you can handle file uploads with the `multer` middleware.

1. First, install `multer`:

```bash
npm install multer
```

2. Set up your Express route to handle file uploads:

```typescript
import express from "express";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
  },
});

const upload = multer({ storage: storage });

const app = express();

app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send("No file uploaded.");
  }

  // TODO: Send the file metadata to the document microservice

  res.send("File uploaded.");
});
```

### 2. Sending File Metadata to the Document Microservice

Assuming you've set up a gRPC client in your gateway service, you can send the file metadata to the document microservice:

```typescript
app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send("No file uploaded.");
  }

  const fileMetadata = {
    filepath: path.join(__dirname, "uploads", file.filename),
    name: file.originalname,
    contentType: file.mimetype,
  };

  documentClient.SaveFileMetadata(fileMetadata, (error, response) => {
    if (error) {
      return res.status(500).send(error.message);
    }

    res.send("File metadata saved in document microservice.");
  });
});
```

### 3. Handling File Metadata in the Document Microservice

On the gRPC server side (document microservice), you'd have a method that receives the file metadata and stores it appropriately in the database.

### Advantages:

1. **Decoupling Storage and Metadata**: This approach decouples file storage from file metadata processing. The gateway handles the storage, while the document service handles the metadata.
2. **Reduced Data Transfer**: Since you're not transferring the actual file between services, this can reduce the data transfer overhead, especially for large files.

### Disadvantages:

1. **Single Point of Failure**: The gateway service becomes a single point of failure for file storage.
2. **Complex Retrieval**: If the document service needs to access the actual file for any operation, it will have to request the gateway service, adding an additional step.

### Important:

- Make sure you have proper access controls in place.
- Handle errors gracefully.
- Ensure the gateway has enough storage if you're expecting a large number of files or very large files.
- Consider setting up regular backups for the stored files.

import express from 'express';
import { client } from './path_to_grpc_client'; // Adjust the path to the gRPC client

const router = express.Router();

router.post('/upload', (req, res) => {
const { name, contentType, content } = req.body;
client.UploadFile({ name, contentType, content }, (error, response) => {
if (error) {
res.status(500).json({ error: error.details });
} else {
res.json(response);
}
});
});

router.get('/get/:name', (req, res) => {
const { name } = req.params;
client.GetFile({ name }, (error, response) => {
if (error) {
res.status(500).json({ error: error.details });
} else {
res.json(response);
}
});
});

router.delete('/delete/:name', (req, res) => {
const { name } = req.params;
client.DeleteFile({ name }, (error, response) => {
if (error) {
res.status(500).json({ error: error.details });
} else {
res.json(response);
}
});
});

export default router;

chmod +x compile-protos.sh
