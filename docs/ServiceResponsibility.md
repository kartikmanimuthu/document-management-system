### Microservice Communication:

1. **TenantService**:

   - **gRPC Methods**:
     - `CreateTenant`: Creates a new tenant.
     - `GetTenant`: Fetches tenant details based on TenantID.
     - `UpdateTenant`: Updates tenant details.
     - `DeleteTenant`: Deletes a tenant.
     - `CreateUser`: Adds a new user for a tenant.
     - `GetUser`: Retrieves user details by ID.
     - `UpdateUser`: Updates user details.
     - `DeleteUser`: Removes a user.

2. **DocumentService**:
   - **gRPC Methods**:
     - `CreateFile`: Adds a new file.
     - `GetFile`: Retrieves file details by ID.
     - `UpdateFile`: Updates file details.
     - `DeleteFile`: Removes a file.
     - `CreateFolder`: Adds a new folder.
     - `GetFolder`: Retrieves folder details.
     - `UpdateFolder`: Updates folder details.
     - `DeleteFolder`: Deletes a folder.

### Documentation:

#### TenantService:

- **Purpose**: Manages tenants and their associated users. Ensures that tenants are logically separated in a pooled multi-tenancy model.

- **Key Operations**:

  - **CreateTenant**:

    - Input: Tenant Name
    - Action: Adds a new tenant to the database.
    - Output: Tenant details including TenantID.

  - **CreateUser**:
    - Input: TenantID, Username, Password, Email
    - Action: Adds a new user associated with the given TenantID.
    - Output: User details including UserID.

#### DocumentService:

- **Purpose**: Manages files and folders for users. Ensures that data is associated with the right user and tenant.

- **Key Operations**:

  - **CreateFile**:

    - Input: OwnerID, Name, Content, (optional) FolderID
    - Action: Adds a new file to the database.
    - Output: File details including FileID.

  - **CreateFolder**:
    - Input: OwnerID, Name, (optional) ParentFolderID
    - Action: Adds a new folder to the database.
    - Output: Folder details including FolderID.
