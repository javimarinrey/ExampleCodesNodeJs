import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
//const port = 3000;
app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!');
});
app.listen(process.env.PORT, async () => {
  console.log(`server is listening on ${process.env.PORT}`);
});