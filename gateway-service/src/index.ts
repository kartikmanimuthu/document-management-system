import express from "express";
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import swaggerSpec from './swaggerDef';

import { serviceConfig } from './config'
import tenantRoutes from './routes/tenant'
import userRoutes from './routes/user'
import { initGlobalLogger } from "./logger";

initGlobalLogger();
const app = express();
app.use(express.json()); // Middleware to parse JSON payloads

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));


app.use(`${serviceConfig.basePath}`, tenantRoutes);
app.use(`${serviceConfig.basePath}`, userRoutes);

app.use('/', (req: any, res: any, next: any) => {
  res.send(`🚀 ${serviceConfig.name} is running on port http://localhost:${serviceConfig.port}${serviceConfig.basePath}`);
});

app.listen(serviceConfig.port, () =>
  global.logger.info(
    `🚀 ${serviceConfig.name} is running on port http://localhost:${serviceConfig.port}${serviceConfig.basePath}`
  )
);



