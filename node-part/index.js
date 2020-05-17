const app = require("express")()
const server = require("http").createServer(app)
const io = require("socket.io")(server)
io.on("connection", (socket) => {
  // emit an event to the socket
  //   io.emit("broadcast" /* … */) // emit an event to all connected sockets

  socket.on("data-sent", (data) => {
    console.log("received")
    console.log(data)
    io.emit("new-data", data)
  }) // listen to the event
})
server.listen(4000)
console.log("server running")
