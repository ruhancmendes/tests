//arquivo responsável pela rota da aplicação

import http, { request } from "node:http"

const products = [
    { id: "1", name: "camiseta", price: 29.99 },
    { id: "2", name: "calça", price: 99.99 },
    { id: "3", name: "tênis", price: 199.99 },
]

const app = http.createServer((request, response) => {
    if (request.method === "GET" && request.url === "/products") {
        response.setHeader("Content-Type", "application/json")
        response.end(JSON.stringify(products))
    }
})

export { app }