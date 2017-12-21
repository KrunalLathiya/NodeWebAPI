import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
  firstname: {
    type: String,
    required: 'Enter first name'
  },
  lastname: {
    type: String,
    required: 'Enter last name'
  },
  email: {
    type: String,
    required: 'Enter email'
  },
  company: {
    type: String,
    required: 'Enter first company'
  },
  phone: {
    type: Number
  },
  created_at: {
    type: Date,
    default: Date.now()
  }
});