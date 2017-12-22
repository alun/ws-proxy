# Precursors

NodeJS, NPM

# Executing

This will run websocket server on `ws://localhost:10000` with a proxying to `wss://ws.cex.io/ws`

```
npm i
node ws-proxy
```

# Customization

```
HOST=127.0.0.1 PORT=7777 WEB_SOCKET_SOURCE=ws://example.com/ws
```
