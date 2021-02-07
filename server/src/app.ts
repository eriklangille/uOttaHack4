import express from 'express';
import cors from 'cors';
import path from 'path';
import users from './users'
import LoadImages from './images'

const app = express();
const port = 5000;
const static_dir = path.join(__dirname, '../assets')

console.log(static_dir)

app.use(cors())
app.use('/assets', express.static(static_dir))

LoadImages("./users", "./assets")
app.use("/users", users)

app.get('/', (req, res) => {
  res.send('Result!')
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`)
});