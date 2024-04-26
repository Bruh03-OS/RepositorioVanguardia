const app = require('./app');
const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Servidor Node.js en funcionamiento en http://localhost:${port}/`);
});
