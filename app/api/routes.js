var express = require('express'),
	apicontroller = require('./controller');

var router = express.Router();

router.get('/notas/',apicontroller.getAll)

router
	.route('/notas/:id?')
	.all(function(req,res,next){
		console.log(req.method,req.path);
		res.set('Content-Type','application/json');
		next();
	})
	.post(apicontroller.save)
	.get(apicontroller.get)
	.put(apicontroller.update)
	.delete(apicontroller.delete)

module.exports =router;