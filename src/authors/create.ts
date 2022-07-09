import { PrismaClient } from '@prisma/client'
async function main() {
  const prisma = new PrismaClient()
  const result = await prisma.authors.create({
    data: {
      name: 'Mayk Brito',
      books: {
        createMany: {
          data: [
            {
              name: 'livro 1',
            },
            {
              name: 'livro 2',
            },
            { name: 'livro 3' },
          ],
        },
      },
    },
  })
}
main()
