import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/biblioteca', {
  family: 4
}).then(
  console.log("Connected to MongoDB database")
);

const libroSchema = mongoose.Schema({
  titulo: String,
  autor: String,
}, { collection: 'libros' });

const Libro = mongoose.model('Libro', libroSchema);

export default Libro;