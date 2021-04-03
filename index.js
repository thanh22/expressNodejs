var express = require('express');
var bodyParser = require('body-parser');
var userRoute = require('./routes/user');

var port = 3000;

var app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', userRoute);

app.get('/', function(request, response) {
    response.render('index', {
        name: 'Tony Stark'
    });
});



app.listen(port, function () {
    console.log(`server is running on port ${port}`);
})