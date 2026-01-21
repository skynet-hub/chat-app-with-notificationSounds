import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import connectToDB from './db/connectToDB.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    connectToDB()
    console.log(`Server Running on port ${PORT}`)
})