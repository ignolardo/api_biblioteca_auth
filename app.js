import express from "express";
import { auth } from "express-oauth2-jwt-bearer";
const app = express();

const authentication = auth({
  audience: "http://localhost:3000/api/productos",
  issuerBaseURL: "https://dev-utn-frc-iaew.auth0.com/",
  tokenSigningAlg: "RS256",
});

const port = 3000;

import librosRouter from "./routes/libros.js";
import errorHandler from "./middleware/errorHandler.js";

// Middlewares
app.use(express.json());
app.use("/libros", authentication, librosRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});
