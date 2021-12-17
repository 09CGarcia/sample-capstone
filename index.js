const express = require('express');

const PORT = process.env.PORT || 4001;

let app = express();

let delivery = '';

app.use(express.json());

app.get('/', (req, res) => {
	console.log(delivery)
	res.status(200).send(delivery)
});

app.post('/result', (req, res) => {
	delivery = req.body
	//console.log(delivery)
	res.send(delivery)
});

app.listen(PORT, () => console.log(`Server running at ${PORT}`))

