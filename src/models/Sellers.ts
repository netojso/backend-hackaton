import mongoose from 'mongoose';

const sellerSchema = new mongoose.Schema({
  name: String,
  cep: Number,
  whatsapp: Number,
  category: Object,
  createdAt: String,
});

export default mongoose.model('sellers', sellerSchema);
