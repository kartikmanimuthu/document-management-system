// Redis configuration
export const serviceConfig = {
  name: "Document service",
  basePath: "/document/v1",
  port: process.env.DOCUMENT_SERVICE_PORT as unknown as number
}
