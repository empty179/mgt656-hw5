var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-660!');
});

app.get('/empty179', function(request, response){
    response.send('exuberant-rhinoceros');
});



app.listen(process.env.PORT || 4000);