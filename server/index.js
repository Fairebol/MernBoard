const app = require('./app');
const { appConfig, database } = require('./config/config.js');
const MongoDB_connect = require('./config/database');

require('dotenv').config();

async function appInit(appConfig, dbConfig) 
{
    try
    {
        await MongoDB_connect(dbConfig.MongoDB_DB_PASSWORD, dbConfig.MongoDB_DB_HOSTNAME);
        app.listen(appConfig.port, () => {
            console.log("Server/Database started for port: " + appConfig.port)
        });
    }
    catch(err)
    {
        console.error(err);
        process.exit(0);
    }

}

appInit(appConfig, database)

// View routes
// app.set('title', 'MERN-Board');
// app.get("/", (req, res) => res.render("dashboard"));
