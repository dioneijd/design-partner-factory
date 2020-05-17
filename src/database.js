function createDatabaseConnection(){

    function start(){
        console.log('> [database] Starting...')
        console.log('> [database] Running Migration...')
        console.log('> [database] Starting done!')
    }

    function stop(){
        console.log('> [database] Stopping...')
        console.log('> [database] Closing Progress Connection...')
        console.log('> [database] Stopping done!')
    }

    return {
        start,
        stop
    }
}

module.exports = createDatabaseConnection