'use strict';

// Parse request headers to display user agent data.

const express = require('express');
const app = express();
// Handles IPv4, IPv6 addresses
const ipaddr = require('ipaddr.js');
const port = process.env.PORT || 3000;

const apiRouter = express.Router();

app.enable('trust proxy');

apiRouter.get('/whoami', (req, res) => {
	// Extract some OS info
	let software = req.headers['user-agent']
										.match(/\((.*?)\)/)[0]
										.replace(/([\(\)])/g, '');

	res.json({
		ip: ipaddr.process(req.ip).toString(),
		language: req.acceptsLanguages()[0] || 'unknown',
		software: software || 'unknown',
		ips: [req.ip, req.ips]
	});
});

app.use('/api', apiRouter);

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});