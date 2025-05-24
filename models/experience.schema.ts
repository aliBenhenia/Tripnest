import { Schema, model, Document } from 'mongoose';

export interface IExperience extends Document {
  id: number;
  title: string;
  category: string;
  price: number;
  rating: number;
  imageUrl: string;
}

const ExperienceSchema = new Schema<IExperience>({
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true, min: 0, max: 5 },
  imageUrl: { type: String }
});

export const Experience = model<IExperience>('Experience', ExperienceSchema);