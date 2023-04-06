const app = require('./app');

require('dotenv').config();

const port = 5000;

const connectDatabase = require('./db');

connectDatabase();

app.listen(port, () =>{

    console.log(`Server is running on port ${port}`);
    
});