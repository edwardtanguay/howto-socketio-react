const app = require('express');
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
	cors: {
		origins: ['http://localhost:3378']
	}
});

const port = 3377;

app.get('/', (req, res) => {
	res.send('<h1>Socket.io backend</h1>')
})

io.on('connection', (socket) => {
	console.log('a user connected');
	socket.on('disconnect', () => {
		clg('user disconnected');
	})
});

express.listen(port, () => {
	console.log(`listening on port http://localhost:${port}`);
})

