const mongoose = require("mongoose");//for connection b/w db and app

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Db connection has established"))
    .catch((error) => {
        console.log("Issue in db connection");
        console.error(error.message);
        process.exit(1);//to exit with a failure we have written 1 in exit function
    });
}

module.exports = dbConnect;