import express from "express";

import { serviceConfig } from './config'
import tenantRoutes from './routes/tenant'
import { router as userRoutes } from './routes/user'
import { initGlobalLogger } from "./logger";

initGlobalLogger();
const app = express();

// Middleware to parse JSON payloads
app.use(express.json());


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



