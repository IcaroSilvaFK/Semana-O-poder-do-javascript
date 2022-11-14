import { Router } from 'express';

const router = Router();

router.get('/', (req, reply) => {
  reply.send({
    message: 'Hello world',
  });
});

export { router };
