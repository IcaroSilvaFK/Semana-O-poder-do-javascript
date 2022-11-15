import { PrismaClient } from '@prisma/client';

const prismaClient = new PrismaClient({
  log: ['query', 'info', 'warn'],
});

async function main() {
  try {
    await prismaClient.$connect();
  } catch (err) {
    console.log(err);
    throw new Error();
  }
}

main();

export { prismaClient };
