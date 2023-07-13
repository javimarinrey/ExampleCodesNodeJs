import express from 'express';
import * as dotenv from 'dotenv';
import MongoDB from "./config/MongoDB";
dotenv.config();

const app = express();
app.get('/', (req, res) => {

  /* mongodb */
  main().catch((error) => console.error(error));


  res.send('Hello NodeJS');
});
app.listen(process.env.PORT, async () => {
  console.log(`server is listening on ${process.env.PORT}`);
});


async function main() {
  const mongoDB = new MongoDB();
  await mongoDB.connect();

  const db = mongoDB.getDatabase();
  const collection = db.collection('nombre_de_la_coleccion'); // Cambia por el nombre de tu colección

  // Ejemplo de consulta
  const result = await collection.find({}).toArray();
  console.log(result);

  // ...

  await mongoDB.disconnect();
}