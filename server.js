const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
app.use('/:propertyId', express.static(__dirname));

app.listen(3100);