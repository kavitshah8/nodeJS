// GET home page
var flights = require('../data');

var flight = require('../flight');

for(var key in flights){
	flights[key] = flight(flights[key]);
}

exports.flight = function(req, res){
  var number = req.param('number');
  //console.log(number);
  if (typeof flights[number] === 'undefined') {
  	res.status(404).json({status: 'error'});
  }else{
  	res.json(flights[number].getInformation());
  }
};

exports.arrived = function(req, res){
  var number = req.param('number');
  //console.log(number);
  if (typeof flights[number] === 'undefined') {
  	res.status(404).json({status: 'error'});
  }else{
  	flights[number].triggerArrive();
  	res.json({status:'DONE'});
  }
};

exports.list = function(req,res){
	res.render('list',{title:"All Flights",flights: flights});
};

exports.listjson = function(req, res){
	var flightData = [];

	for (var number in flights){
		flightData.push(flights[number].getInformation());
	}
	
	res.json(flightData);
};