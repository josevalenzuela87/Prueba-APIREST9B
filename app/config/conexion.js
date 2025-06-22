const mongoose = require('mongoose');
const config = require('./configuracion');

module.exports =  {
    connecction : null,
    connect : () => {
        if(this.connecction) return this.connecction
        return mongoose.connect(config.DB,)
        .then(conn =>{
            this.connecction = conn
            console.log('La conexión a la base de datos se ha realizado correctamente');
    
        })
        .catch(e =>{console.log('Error al conectar a la base de datos', e);})
        
}

}

