import fastify from 'fastify'

const app = fastify()

app.listen({ port: 3333 }).then((port) => {
  console.log(`🚀 Server started on ${port}`)
})
