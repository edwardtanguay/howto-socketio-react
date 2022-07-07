import express from 'express';

const app = express();
const port = 3377;

app.get('/', (req, res) => {
	res.send('<h1>Socket.io backend</h1>')
})

app.listen(port, () => {
	console.log(`listening on port http://localhost:${port}`);
})

