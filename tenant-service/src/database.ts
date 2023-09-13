import mongoose from 'mongoose';

class Database {
    constructor() {
        // Bind `this` to class methods
        this._connect = this._connect.bind(this);
        this.disconnect = this.disconnect.bind(this);
    }

    /**
     * Connects to MongoDB using provided connection string
     * @param connectionString MongoDB connection string
     */
    async _connect(connectionString: string): Promise<void> {
        try {
            await mongoose.connect(connectionString, {
                autoCreate: true,
                autoIndex: true,
            });
            console.log('MongoDB Connected...');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            throw error; // Re-throwing the error to be handled by caller function
        }
    }

    /**
     * Disconnects from MongoDB
     */
    async disconnect(): Promise<void> {
        try {
            await mongoose.connection.close();
            console.log('MongoDB Disconnected...');
        } catch (error) {
            console.error('Error disconnecting from MongoDB:', error);
            throw error; // Re-throwing the error to be handled by caller function
        }
    }
}

export default new Database(); // Exporting a singleton instance
