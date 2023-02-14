const mongoose= require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// mongoose.Promise = global.Promise;

const connectDataBase =()=>{
mongoose.connect(process.env.DB_URI,
{
    useNewUrlParser:true,
    useUnifiedTopology:true/*,useCreateIndex:true*/

})
    .then((data)=>{

    console.log(`MongoDb Connected  with server: ${data.connection.host}`);

})
}
module.exports = connectDataBase;