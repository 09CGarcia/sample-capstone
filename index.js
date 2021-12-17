const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 4001;

let app = express();

let delivery = '';
let deliverycache = [];
app.use(express.json());

app.get('/', (req, res) => {
	//console.log(deliverycache)
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.status(200).send(deliverycache)
});

app.post('/result', (req, res) => {
	delivery = req.body
	deliverycache.push(delivery)
	console.log(deliverycache)
	res.send(delivery)
});

app.listen(PORT, () => console.log(`Server running at ${PORT}`))

