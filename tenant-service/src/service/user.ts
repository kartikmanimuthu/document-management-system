import * as grpc from '@grpc/grpc-js';
import * as crypto from 'crypto';
import { User, IUser } from '../models/user';


// @todo move it to utils.ts
const HASH_ALGORITHM = 'sha256';
const SALT_LENGTH = 16;
const ITERATIONS = 100000;
const KEY_LENGTH = 64;

const generateSalt = (): string => {
    return crypto.randomBytes(SALT_LENGTH).toString('hex');
};

const hashPassword = async (password: string, salt: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        crypto.pbkdf2(password, salt, ITERATIONS, KEY_LENGTH, HASH_ALGORITHM, (err, derivedKey) => {
            if (err) reject(err);
            resolve(derivedKey.toString('hex'));
        });
    });
};

const validatePassword = async (inputPassword: string, storedPasswordHash: string, salt: string): Promise<boolean> => {
    const hashedInputPassword = await hashPassword(inputPassword, salt);
    return hashedInputPassword === storedPasswordHash;
};
// @todo move it to utils.ts




const CreateUser = async (call: any, callback: any) => {
    const { username, password, email } = call.request;
    try {
        const salt = generateSalt();
        const hashedPassword = await hashPassword(password, salt);

        const user = new User({
            username,
            password: hashedPassword,
            salt,
            email
        });

        const savedUser = await user.save();
        callback(null, savedUser);
    } catch (error) {
        callback({
            code: grpc.status.INTERNAL,
            details: "Failed to create user"
        });
    }
}

const GetAllUsers = async (call: any, callback: any) => {
    try {
        const users = await User.find();
        callback(null, { users });
    } catch (error) {
        callback({
            code: grpc.status.INTERNAL,
            details: "Failed to retrieve users"
        });
    }
}


const GetUser = async (call: any, callback: any) => {
    const { id } = call.request;
    try {
        const user = await User.findById(id);
        if (user) {
            callback(null, user);
        } else {
            callback({
                code: grpc.status.NOT_FOUND,
                details: "User not found"
            });
        }
    } catch (error) {
        callback({
            code: grpc.status.INTERNAL,
            details: "Failed to retrieve user"
        });
    }
}

const UpdateUser = async (call: any, callback: any) => {
    const { id, username, password, email } = call.request;
    try {
        const salt = generateSalt();
        const hashedPassword = await hashPassword(password, salt);

        const updatedUser = await User.findByIdAndUpdate(id, {
            username,
            password: hashedPassword,
            salt,
            email
        }, { new: true });

        callback(null, updatedUser);
    } catch (error) {
        callback({
            code: grpc.status.INTERNAL,
            details: "Failed to update user"
        });
    }
}

const DeleteUser = async (call: any, callback: any) => {
    const { id } = call.request;
    try {
        await User.findByIdAndDelete(id);
        callback(null, { success: true });
    } catch (error) {
        callback({
            code: grpc.status.INTERNAL,
            details: "Failed to delete user"
        });
    }
}

export {
    CreateUser, GetUser, UpdateUser, DeleteUser, GetAllUsers
}
