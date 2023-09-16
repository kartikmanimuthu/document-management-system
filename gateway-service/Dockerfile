# Base image
FROM node:20

# Create workspace directory
WORKDIR /workspace

# Copy both directories into the workspace
COPY ./gateway-service ./gateway-service
COPY ./protos ./protos

# Install dependencies for protos and run the generate command
WORKDIR /workspace/protos
RUN echo "$PWD"
RUN ${ls}
RUN npm install
RUN chmod +x compile-protos.sh
RUN sh ./compile-protos.sh

# Install dependencies for gateway-service and start it
WORKDIR /workspace/gateway-service
RUN npm install
CMD [ "npm", "run", "dev" ]
