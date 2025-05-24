import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  full_name: string;
  email: string;
  avatar: string;
  passwordHash: string;
  profile: {
    role: 'user' | 'admin';
  };
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
  full_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  avatar: { type: String},
  passwordHash: { type: String, required: true },
  profile: {
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
  },
  createdAt: { type: Date, default: () => new Date() }
});

export const User = model<IUser>('User', UserSchema);