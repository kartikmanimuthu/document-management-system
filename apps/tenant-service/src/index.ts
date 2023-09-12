import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file
import express, { Router } from "express";

import { serviceConfig } from './config'


const app = express();
const router = Router();


router.get('/', (req: any, res: any, next: any) => {
  res.send('Hello, TypeScript with Express!');
});


// Middleware to parse JSON payloads
app.use(express.json());

app.use(`${serviceConfig.basePath}`, router);

app.listen(serviceConfig.port, () =>
  console.log(
    `🚀 ${serviceConfig.name} is running on port http://localhost:${serviceConfig.port}${serviceConfig.basePath}`
  )
);



