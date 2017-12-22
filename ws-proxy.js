const WebSocketClient = require('websocket').client
const WebSocketServer = require('websocket').server
const http = require('http')

const PORT = process.env.PORT || 10000
const HOST = process.env.HOST || 'localhost'
const WEB_SOCKET_SOURCE = process.env.WEB_SOCKET_SOURCE || 'wss://ws.cex.io/ws/'

const httpServer = http.createServer((req, res) => {
  res.end()
})

const wsServer = new WebSocketServer({
  httpServer,
  autoAcceptConnections: true,
})

wsServer.on('connect', (clientConnection) => {

  const ws = new WebSocketClient()
  ws.connect(WEB_SOCKET_SOURCE)
  ws.on('connect', (serverConnection) => {
    serverConnection.on('message', (message) => {
      clientConnection.send(message.utf8Data)
    })
    clientConnection.on('message', (message) => {
      serverConnection.send(message.utf8Data)
    })
  })

})

httpServer.listen({  
  port: PORT,
  host: HOST,
})
