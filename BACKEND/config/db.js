const connectDb=async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL) {
            console.log("Database connected successfully");
    } catch (error) {
        console.log(error)
    }
}

export default connectDb;