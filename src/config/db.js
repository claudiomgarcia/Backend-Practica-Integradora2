import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to database")
    } catch (error) {
        console.error("Failed to connect to database", error)
        throw error
    }
}

export default connectDB