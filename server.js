//express
const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, './Client/build')))


//Set the port and listen 
PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started at port ${PORT}`));