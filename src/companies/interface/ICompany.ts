import { Document } from 'mongoose';

export interface ICompany extends Document {
  name: string;
  description: string;
  email: string;
  phone: string;
  category: string;
  createdAt: Date;
}
