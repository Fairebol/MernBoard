const { default: mongoose } = require('mongoose');

// mongoose.connection.on(() => {console.log('Database Init')})

async function MongoDB_connect(MONGODB_DB_PASSWORD, MONGODB_DB_HOSTNAME)
{
    const uri = `mongodb+srv://${MONGODB_DB_HOSTNAME}:${MONGODB_DB_PASSWORD}@cluster0.u6mbtu4.mongodb.net/?retryWrites=true&w=majority`;
    await mongoose.connect(uri)
    .then(() => console.log('Conexión a MongoDB Cloud exitosa'))
    .catch((err) => console.error('Error de conexión a MongoDB Cloud', err));
}

module.exports = MongoDB_connect
