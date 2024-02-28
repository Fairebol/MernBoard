require('dotenv').config();

const config = {
    appConfig: {
        port: process.env.PORT,
        LOCALHOST: process.env.LOCALHOST
    },
    database: {
        MongoDB_DB_PASSWORD: process.env.DB_PASSWORD,
        MongoDB_DB_HOSTNAME: process.env.DB_HOSTNAME
    }
}

module.exports = config
