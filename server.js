var express=require('express');
var app=express();
var path = require('path');

app.use(express.static(__dirname + '/public'));


app.get('/',function(req,res){
	res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.get('*',function (req, res) {
        res.redirect('/');
        
    });
//Server is running on port 3000
app.listen(3000,function(){
	console.log('Server is running on port 3000');
})