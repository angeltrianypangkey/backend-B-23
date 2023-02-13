const http = require('http');
const members = require(`./member`);
const users = require('./users');

const server = http.createServer( (req, res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/json");
    const url = req.url
    if(url === '/about'){
        res.write (JSON.stringify({
                'status': 'success',
                'message': 'respon success',
                'Description': 'Exercise #03',
                'Date': new Date().toISOString(),
                'Members': members
            }));
    }
    else if (url == '/users'){
        res.write(JSON.stringify({users}));
    }
    else {
        res.write('This is homepage');
    }
    res.end();
});

const port = 3000;
const hostname = "localhost";
server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}: ${port}`);
});