// Redis configuration
export const serviceConfig = {
  name: "Tenant service",
  basePath: "/tenant/v1",
  port: process.env.TENANT_SERVICE_PORT as unknown as number
}
