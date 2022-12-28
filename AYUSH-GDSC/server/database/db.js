
import mongoose from 'mongoose';


const Connection = async(username,password) =>{

    const URL=`mongodb://${username}:${password}@ac-cgiy8sw-shard-00-00.8vkm1wg.mongodb.net:27017,ac-cgiy8sw-shard-00-01.8vkm1wg.mongodb.net:27017,ac-cgiy8sw-shard-00-02.8vkm1wg.mongodb.net:27017/?ssl=true&replicaSet=atlas-liw2o8-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
       console.log("Database connected successfully")
    }catch(error)
    {
        console.log('Error while connecting the database',error);
    }
}

export default Connection;