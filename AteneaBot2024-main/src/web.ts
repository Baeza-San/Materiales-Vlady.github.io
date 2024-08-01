import HTTP from 'node:http';

const PORT = process.PORT || 5500;
const server = HTTP.createServer((request, response) => {
  response.writeHead(200, {
    "Access-Control-Allow-Origin": "https://replit.com",
    "Access-Control-Allow-Methods": "GET, PING, OPTIONS",
    "Content-Type": "text/html"
  } as const);
  response.end("<h3>Copia la Url al presionar New Tab! @JinMori</h3>");
});



export default (): void => {
  server.listen(PORT, () => console.log("Servidor listo para UptimerRobot!"));
};