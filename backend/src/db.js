const { Prisma } = require('prisma-binding');
//this file connects to the remote prisma DB and gives us the ability to query it with JS
const db = new Prisma({
   typeDefs: 'src/generated/prisma.graphql',
   endpoint: process.env.PRISMA_ENDPOINT,
   secret: process.env.PRISMA_SECRET,
   debug: true
});

module.exports = db;