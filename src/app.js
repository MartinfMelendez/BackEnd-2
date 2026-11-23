import express from 'express'
import router from './routers/router.js';
import errorHandler from './middlewares/errorHandler.js';
import { notFoundMiddleware } from './middlewares/notFound.middleware.js';

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", router)

app.use(notFoundMiddleware)
app.use(errorHandler)

export default app