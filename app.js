const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

    const myUrl = new URL(req.url, `http://${req.headers.host}`);

    const name = myUrl.searchParams.get("name");
    const siteUrl = myUrl.searchParams.get("url");

    res.write("网络名：" + (name || "未提供"));
    res.write("\n");
    res.write("网站 URL：" + (siteUrl || "未提供"));
    res.end();

}).listen(3000);

console.log(`Server is running on http://localhost:3000`);

