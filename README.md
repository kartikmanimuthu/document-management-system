# Document Management System

A robust system built for efficient management of documents using state-of-the-art technologies.

## Tech Stack

- **gRPC:** A high-performance, open-source, and universal RPC framework.
- **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
- **MongoDB:** A document-based, distributed database built for modern application developers.
- **Swagger/OpenAPI:** A framework for API specification and a set of tools for auto-generating API documentation.
- **Docker:** A platform used to develop, ship, and run applications inside containers.

## Getting Started

### Prerequisites

- Ensure you have Docker installed on your machine.
- Node.js and npm installed.

### Clone the Repository

```
git clone https://github.com/kartikmanimuthu/document-management-system.git
cd document-management-system
```

### Build and Deploy with Docker

1. Navigate to the project root and build the Docker image:

```bash
docker build -t document-management-system .
```

2. Use Docker Compose to orchestrate the deployment:

```bash
docker-compose up -d
```

### Access the Swagger/OpenAPI Documentation

Once the services are up and running, the API documentation can be accessed at:

```
http://localhost:8000/api-docs
```

### Usage

1. **Creating a Document:** Make a gRPC call to the appropriate endpoint with the document details.
2. **Fetching a Document:** Use the provided document ID to fetch the details.
3. ... (Continue with other system features)

## Contributing

Contributions are welcome! Please read our [contribution guide](LINK_TO_CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License. See [LICENSE.md](LINK_TO_LICENSE.md) for details.

## Acknowledgements

- The team and contributors who have put efforts into building this robust system.
- The open-source community for the tools and libraries.

---

For further questions or feedback, please raise an issue in the repository or contact the maintainers.
