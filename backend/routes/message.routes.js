import express from 'express'

const router = express.Router()

router.post("/send/:id", sendMessage)  //The id of sender


export default router