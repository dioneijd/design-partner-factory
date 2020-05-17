// import createDatabaseConnection from './database.js'
// import createWebServer from './webserver.js'

const createDatabaseConnection = require('./database.js')
const createWebServer = require('./webserver.js')

function createCore() {
    const database = createDatabaseConnection()
    const webserver = createWebServer()

    function start(){
        console.log('> [core] Starting...')
        database.start()
        webserver.start()
        console.log('> [core] Starting done! System is running!')
    }

    function stop(){
        console.log('> [core] Stopping...')
        webserver.stop()
        database.stop()
        console.log('> [core] Stopping done!')
    }

    return {
        start,
        stop
    }
}

module.exports = createCore