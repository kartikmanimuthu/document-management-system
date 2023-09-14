import swaggerJsDoc from 'swagger-jsdoc';

const swaggerOptions: swaggerJsDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Gateway Service API',
            version: '1.0.0',
            description: 'API Documentation for the Gateway Service',
        },
        servers: [
            {
                url: 'http://localhost:8000/gateway/v1',
            },
        ],
    },
    apis: ['./src/routes/*.ts'], // Point to the file where you've defined your API routes
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

export default swaggerSpec;
