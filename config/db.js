const mongoose = require('mongoose')
const colors = require('colors')
const { path } = require('express/lib/application')

//Funcion para conexion a bd
const connectDB = async() =>{
    //crear el objeto de conexion 
   const conn = await mongoose.connect(process.env.MONGO_URL)
   console.log(`mongodb conectado en el host: ${ conn.connection.host}`.bgMagenta.green)
}

module.exports = connectDB

