// note: server is needed only to statically serve the files created by webpackconst express = require("express");
const PORT = process.env.PORT || 3000; 
const path = require('path');
const express = require('express');

const DIST_PATH = path.join(__dirname, '../dist');
const app = express();
console.log(DIST_PATH);
app.use(express.static(DIST_PATH));

app.listen(PORT, () => {
    console.log(`server is listening on PORT ${PORT}`);
})