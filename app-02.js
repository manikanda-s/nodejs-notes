const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'})

    if (req.url === '/home'){
        res.end('Home')
    }
    else if (req.url === '/login'){
        res.end('Login')
    }
    else if (req.url === '/sign-up'){
        res.end('Sign Up')
    }
})

server.listen(3000, () => {
    console.log('Server runs on port : 3000')
})