import express from 'express';
const app = express();

const port = 3000;

import librosRouter from './routes/libros.js';
import errorHandler from './middleware/errorHandler.js';

// Middlewares
app.use(express.json());
app.use('/libros', librosRouter);
app.use(errorHandler);

app.listen(port, ()=>{
  console.log(`Server listen on port ${port}`);
});
