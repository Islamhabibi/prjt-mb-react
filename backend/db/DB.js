const mongoose = require("mongoose")
const connectDB = async () => {
    try {
        
       // await mongoose.connect(process.env.MONGO_URI, { family: 4 });
      await mongoose.connect('mongodb+srv://Islem:Tunis2019@cluster0.ei6o3hf.mongodb.net/' )
        console.log(`MongoDB Connected: ${mongoose.connection.host}`.cyan.underline);
    } catch (error) {
        console.log(`Could not connect to MongoDB: ${error.message}`.red);
    }
}

module.exports = connectDB;
 