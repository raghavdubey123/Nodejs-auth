
// external imports
const mongoose = require("mongoose");
// require('.env').config()


DB_URL = 'mongodb+srv://raghav:nodejs123@cluster0.dnznqyf.mongodb.net/?retryWrites=true&w=majority'

async function dbConnect() {
// use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
mongoose
.connect(
   DB_URL,
  {
    //   these are options to ensure that the connection is done properly
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  }
).then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch((error) => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
  });
}

module.exports = dbConnect;