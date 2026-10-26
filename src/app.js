import express from 'express'
import router from './routers/router.js';


const app = express();

app.use(express.json())


app.get("/api/health", (req, res) => {
    try {
        res.send({ "status": "ok", "message": "Servidor activo" })

    } catch (error) {
        console.log(error.message)
    }
})

app.use("/api", router)

export default app