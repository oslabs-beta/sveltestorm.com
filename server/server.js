const PORT = process.env.PORT || 3000; 
const path = require('path');
const express = require('express');

const DIST_PATH = path.join(__dirname, '../dist');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + "./dist/bundle"));

app.use('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../index.html'))
  });

app.listen(PORT, () => {
    console.log(`server is listening on PORT ${PORT}`);
})