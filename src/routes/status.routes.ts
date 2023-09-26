import {Router} from "express"

const router = Router()

router.get('/ping', async (request,response) => 
    response.status(200).json("pong")
)

export default router