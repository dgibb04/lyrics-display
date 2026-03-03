const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Handle root path
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
        return;
    }

    // Handle CSS and JS files
    if (req.url === '/style.css' || req.url === '/script.js' || req.url === '/lyrics.txt') {
        const filePath = path.join(__dirname, req.url);
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
                return;
            }

            let contentType = 'text/plain';
            if (req.url.endsWith('.css')) contentType = 'text/css';
            if (req.url.endsWith('.js')) contentType = 'application/javascript';

            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        });
        return;
    }

    // 404 for other paths
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
});

server.listen(PORT, () => {
    console.log(`\n✓ Server running at http://localhost:${PORT}`);
    console.log(`\nOpen your browser and navigate to http://localhost:${PORT}`);
    console.log(`Press Ctrl+C to stop the server\n`);
});
