// note: server is needed only to statically serve the files created by webpackconst express = require("express");
const PORT = process.env.PORT || 3000; 
const path = require('path');

const DIST_PATH = path.join(__dirname, '../dist');
const app = express();

app.use(express.static(DIST_PATH));

app.listen(PORT, () => {
    console.log(`server is listening on PORT ${PORT}`);
})