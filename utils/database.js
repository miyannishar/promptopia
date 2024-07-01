import mongoose from "mongoose";

let isConnected = false; //track the connection status

export const connectToDB = async () =>{

    if(isConnected){
        console.log("MongoDB is already connected!!")
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true
        })

        console.log("eagsedafwrf")

        isConnected = true;
        console.log("MongoDB connected!!")
    } catch (error) {
        console.log(error)
    }

}