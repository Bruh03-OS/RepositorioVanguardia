const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://jyahirsalgado:xxyH31EmX8IV4fQy@database0.mpqxgap.mongodb.net/?retryWrites=true&w=majority&appName=DataBase0";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function connect() {
  try {
    await client.connect();
    console.log("Conexión a MongoDB establecida correctamente");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    throw error;
  }
}

module.exports = { connect };