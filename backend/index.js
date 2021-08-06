const express = require('express');
const request = require('request');
const app = express();
const port = 5000;

app.get('/', (req, res) => res.send('Hello world!'));

app.get('/recipes', (req, res) => {
	const query = req.query.q;
	request(
		`https://api.edamam.com/api/recipes/v2?type=public&app_id=45d1e7c4&app_key=30148b2da24f379533121d243a46386f&q=${query}`,
		(error, response, body) => {
			if (!error && response.statusCode == 200) {
				//console.log(body);
				res.send(body);
			}
		}
	);
});

app.listen(5000, () => console.log('Listening on port 5000'));
