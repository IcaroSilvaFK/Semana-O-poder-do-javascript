import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import { router } from './routes';

const app = express();
const PORT = 8080;

app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log(`🚀server running at http://localhost:${PORT}`);
});
