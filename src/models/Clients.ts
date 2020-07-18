import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  name: String,
  whatsapp: String,
  cep: Number,
  createdAt: Date,
});

export default mongoose.model('clientes', clientSchema);
