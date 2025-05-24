import { Schema, model, Document } from 'mongoose';

export interface ICategory extends Document {
  id: number;
  name: string;
  icon: string;
}

const CategorySchema = new Schema<ICategory>({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  icon: { type: String }
});

export const Category = model<ICategory>('Category', CategorySchema);