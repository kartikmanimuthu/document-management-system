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
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));


app.use(`${serviceConfig.basePath}`, tenantRoutes);
app.use(`${serviceConfig.basePath}`, userRoutes);

app.use((err: any, req: any, res: any, next: any) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('Bad JSON');
    res.status(400).send({ message: 'Bad JSON' }); // Or however you want to handle this
  } else {
    next();
  }
});


app.use('/', (req: any, res: any, next: any) => {
  res.send(`🚀 ${serviceConfig.name} is running on port http://localhost:${serviceConfig.port}${serviceConfig.basePath}`);
});

app.listen(serviceConfig.port, () =>
  global.logger.info(
    `🚀 ${serviceConfig.name} is running on port http://localhost:${serviceConfig.port}${serviceConfig.basePath}`
  )
);



