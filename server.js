var express= require('express');


//create our app

var app=express();

const PORT = process.env.PORT || 3000;


app.use(function(req, res, next){
	if(req.headers['x-forwarded-proto'] === 'https'){

res.redirect('http://'+req.hostname + req.url);
	}
	else{
			next();
	}
});
//which folder we are going to serve
//express.static is to which folder we are going to expose
app.use(express.static('public'));


app.listen(PORT,function(){
	console.log('Express server is up on port'+ PORT);
});
