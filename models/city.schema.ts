import { Schema, model, Document } from 'mongoose';

export interface ICity extends Document {
  id: number;
  name: string;
  slug: string;
  properties: number;
  imageUrl: string;
  imageUrl2: string;
  description: string;
}

const CitySchema = new Schema<ICity>({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  properties: { type: Number, default: 0 },
  imageUrl: { type: String },
  imageUrl2: { type: String },
  description: { type: String }
});

export const City = model<ICity>('City', CitySchema);