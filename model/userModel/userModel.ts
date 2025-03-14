import mongoose, { Schema, Document, Model } from "mongoose";

interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    walletAddress: string;
    refer: string;
    createdAt?: Date;
}

// Step 2: Create a Mongoose Schema
const UserSchema: Schema<IUser> = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

// Step 3: Create and export the Mongoose Model
const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default User;