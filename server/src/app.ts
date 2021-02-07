import express from 'express';
import cors from 'cors';
import path from 'path';
import users from './users'

const app = express();
const port = 5000;
const static_dir = path.join(__dirname, 'assets')

app.use(cors())
app.use(express.static(static_dir))

app.use("/users", users)

app.get('/', (req, res) => {
  res.send('Result!')
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
});