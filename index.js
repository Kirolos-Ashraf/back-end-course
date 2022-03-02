import express from 'express'
import routes from "./src/routes/coursesRoute";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors'
import { ServerApiVersion } from 'mongodb';
const app = express()
const uri = "mongodb+srv://Kero:1998kero@sammlyproject.h4iqe.mongodb.net/SammlyProject?retryWrites=true&w=majority/Courses";
const localHost = "mongodb://localhost:27017/Coursesdb";
const PORT = 4000;

mongoose.Promise = global.Promise;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1 
});



// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

var corsOptions = {
     origin: 'http://localhost:3000/'
   }

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app)

app.get('/', (req, res)=>{
     res.send()
})

app.listen(PORT, ()=> {
     console.log(`Your server is running on port ${PORT}`);
})