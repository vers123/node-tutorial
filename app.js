const http = require('http');
const util = require('util');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

    const myUrl = new URL(req.url, `http://${req.headers.host}`);

    res.end(util.inspect({
        href: myUrl.href,
        origin: myUrl.origin,
        protocol: myUrl.protocol,
        host: myUrl.host,
        port: myUrl.port,
        pathname: myUrl.pathname,
        search: myUrl.search,
        searchParams: Object.fromEntries(myUrl.searchParams)
    }));
}).listen(3000);

console.log(`Server is running on http://localhost:3000`);

