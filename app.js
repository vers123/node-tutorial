const http = require('http');

http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk;
        });
        
        req.on('end', () => {
            console.log('Received POST data:', body);

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('POST data received successfully!');
        });
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Only POST requests are supported.');
    }
}).listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});

