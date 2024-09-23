const express = require('express');
const conectarBD = require('./config/db');
const cors = require('cors');

const app = express(); //crear el servidor

conectarBD(); //estableciendo conexion con la base de datos

app.use( express.static('public')); // directorios publicos

app.use(express.json());
app.use(cors());
app.use('/api/comments', require('./routes/comment'));

app.listen(process.env.PORT, () => {
    console.log('🚀🚀🚀 The server is running on port ' + process.env.PORT)
})