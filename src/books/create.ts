import { PrismaClient } from '@prisma/client'
async function main() {
  const prisma = new PrismaClient()
  const result = await prisma.books.create({
    data: {
      name: 'Arquitetura limpa',
      author_id: '25611227-84cf-4556-a4a3-7a6e6e988b98',
    },
  })
}
main()
