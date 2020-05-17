function createWebServer() {
    function start(){
        console.log('> [webserver] Starting...')
        console.log('> [webserver] Waiting for available port...')
        console.log('> [webserver] Starting Done... Web Server is running!')
    }
    
    function stop(){
        console.log('> [webserver] Stopping...')
        console.log('> [webserver] Waiting to close all clients...')
        console.log('> [webserver] Closing all ports...')    
        console.log('> [webserver] Stopping Done.')
    
    }

    return {
        start,
        stop
    }
}

module.exports = createWebServer