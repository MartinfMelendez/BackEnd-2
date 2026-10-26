import { Router } from "express";

const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send("Estos en la pagina de usuarios")
})


export default userRouter