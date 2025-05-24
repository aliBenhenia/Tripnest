import { Schema, model, Document } from 'mongoose';

export interface IActivity extends Document {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
  cityId: number;
}

const ActivitySchema = new Schema<IActivity>({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  imageUrl: { type: String },
  cityId: { type: Number, required: true }
});

ActivitySchema.index({ cityId: 1, type: 1 });

export const Activity = model<IActivity>('Activity', ActivitySchema);