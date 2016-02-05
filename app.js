'use strict';

// Parse request headers to display user agent data.

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;



app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});