'use strict';

// Parse request headers to display user agent data.

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const apiRouter = express.Router();

apiRouter.get('/whoami', (req, res) => {
	res.json({
		ip: req.ip,
		language: req.acceptsLanguages()[0] || 'unknown',
		software: req.headers['user-agent'].match(/\((.*?)\)/)[0] || 'unknown'
	});
});

app.use('/api', apiRouter);

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});