import { randomUUID } from 'node:crypto'
import {Database} from "./database.js";
import {buildRoutePath} from "./utils/build-route-path.js";

const database = new Database()

export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/users'),
        handler: (req, res) => {
            const { search } = req.query
            const users = database.select('users', search ? {
                name: search,
                email: search,
            } : null)
            return res
                .writeHead(200, {"Content-Type": "application/json"})
                .end(JSON.stringify(users))
        }
    },
    {
        method: 'POST',
        path: buildRoutePath('/users'),
        handler: (req, res) => {
            const { name, email } = req.body

            database.insert('users', { id: randomUUID(), name, email})

            return res
                .writeHead(201, {"Content-Type": "application/json"})
                .end()
        }
    },
    {
        method: 'DELETE',
        path: buildRoutePath('/users/:id'),
        handler: (req, res) => {
            const { id } = req.params
            database.delete('users', id)

            return res
                .writeHead(204, {"Content-Type": "application/json"})
                .end()
        }
    },
    {
        method: 'PUT',
        path: buildRoutePath('/users/:id'),
        handler: (req, res) => {
            const { id } = req.params
            const { name, email } = req.body

            database.update('users', id, { name, email })

            return res
                .writeHead(204, {"Content-Type": "application/json"})
                .end()
        }
    }
]