import { createServer } from './app';

createServer().then((result) => {
  result.listen(process.env.PORT, () => {
    console.log(`api running on ${process.env.PORT}`);
  });
});
