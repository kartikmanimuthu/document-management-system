### Multi-tenant Document Management System with Pool Model:

In the pooled multi-tenancy model, all tenants share the same database, but their data is logically separated, ensuring that one tenant cannot access another tenant's data.

### 1. Entity-Relationship Diagram:

Entities:

1. **Tenant**:

   - TenantID (Primary Key)
   - Name

2. **User**:

   - UserID (Primary Key)
   - TenantID (Foreign Key -> Tenant)
   - Username
   - Password
   - Email

3. **File**:

   - FileID (Primary Key)
   - Name
   - Content
   - OwnerID (Foreign Key -> User)
   - FolderID (Foreign Key -> Folder, nullable)

4. **Folder**:
   - FolderID (Primary Key)
   - Name
   - ParentFolderID (Foreign Key -> Folder, nullable)
   - OwnerID (Foreign Key -> User)

Relationships:

1. A Tenant has multiple Users (One-to-Many)
2. A User has multiple Files (One-to-Many)
3. A User has multiple Folders (One-to-Many)
4. A Folder can contain multiple Files (One-to-Many)
5. A Folder can contain multiple nested Folders (One-to-Many)
