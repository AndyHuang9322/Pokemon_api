const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));


app.listen(8000, function () {
    console.log('listening on port 8000');
});