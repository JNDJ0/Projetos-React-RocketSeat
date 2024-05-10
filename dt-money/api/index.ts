import { app } from './config/expressConfig';

const port = 8080;
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});