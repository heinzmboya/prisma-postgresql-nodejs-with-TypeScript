import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
    // await prisma.user.create({
    //     data: {
    //         name: 'Alice',
    //         email: 'alice@prisma.io',
    //         posts: {
    //             create: { title: 'Hello World' },
    //         },
    //         profile: {
    //             create: { bio: 'I like turtles' },
    //         },
    //     },
    // })

    const post = await prisma.post.update({
        where: { id: 1 },
        data: { published: true },
    })
    console.log(post)

    const allUsers = await prisma.user.findMany({
        include: {
            posts: true,
            profile: true,
        },
    })

    console.dir(allUsers, { depth: null }) //displays even nested objects
    // console.log(allUsers);


}

main()
    .catch((e) => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })