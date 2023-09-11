// import {dataBaseMemory}from "./dataBase-memory.js"
import { fastify } from "fastify"
import { DataBasePostgres } from "./Database-postgres.js"

const server = fastify()

// const dataBase= new dataBaseMemory()
const dataBase = new DataBasePostgres()

// criar videos
server.post("/videos", async (req, res) => {
    const { title, description, duration } = req.body

    await dataBase.create({

        title,
        description,
        duration

    })

    return res.status(201).send()

})

// buscar videos

server.get("/videos", async () => {

    const videos = await dataBase.list()

    return videos
})

// atualizar videos
server.put("/videos/:id", async (req, res) => {
    const { title, description, duration } = req.body
    const videosId =
        await req.params.id
    dataBase.update(videosId, {
        title,
        description,
        duration
    })

    return res.status(204).send()

})


// deletar videos 
server.delete("/videos/:id", async (req, res) => {

    const videoId = await req.params.id
    dataBase.delete(videoId)

    return res.status(204).send()
})


server.listen({
    port: process.env.PORT ?? 3001
})