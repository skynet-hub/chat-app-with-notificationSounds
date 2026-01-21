import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        const response = await mongoose.connect(process.env.MONGO_DB_URI)
        console.log(`Connected to DB, DB name: ${response.connection.name}`)
    } catch (error) {
        console.log("Error connecting to db")
    }
}

export default connectToDB