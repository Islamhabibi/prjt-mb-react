const express = require('express')
//const cors = require("cors");
require('dotenv').config()
require ('colors');
const connectDB = require('./db/DB');
const categorieRoute = require('./routes/categorieRoutes');
const teamRoute = require('./routes/teamRoutes');
const port = process.env.PORT || 5000

//init app   
const app = express() 
app.use(express.json())
/*app.use(cors({
    origin: "http://localhost:3001" 
})) */
//connect db
connectDB() 

app.use('/categories',categorieRoute) 
app.use('/team',teamRoute)
app.listen(port,console.log(`server is runing at http://192.168.3.63:${port}`)) 