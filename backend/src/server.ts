import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { resolve } from 'node:path';

import { router } from './routes';

const app = express();
const PORT = 8080;

app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use('/uploads', express.static(resolve(__dirname, '..', 'uploads')));
app.use(router);

app.listen(PORT, () => {
  console.log(`🚀server running at http://localhost:${PORT}`);
});
