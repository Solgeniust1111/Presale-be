import mongoose, { Schema, Document, Model } from "mongoose";

interface IUser extends Document {
    walletAddress: string;
    refer: string;
}

// Step 2: Create a Mongoose Schema
const UserSchema: Schema<IUser> = new Schema({

    walletAddress: { type: String, required: true },
    refer: { type: String, required: true }
});

// Step 3: Create and export the Mongoose Model
const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default User;