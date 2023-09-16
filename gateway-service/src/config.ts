import dotenv from "dotenv";
dotenv.config({ path: '../.env' }); // Load environment variables from .env file

// Redis configuration
export const serviceConfig = {
  name: "Gateway service",
  basePath: "/gateway/v1",
  port: process.env.GATEWAY_SERVICE_PORT as unknown as number || 8000
}
