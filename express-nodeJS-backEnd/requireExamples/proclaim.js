var y =function (argument) {
	// body...
	console.log('Bob:'+argument);
};

//OR module.exports.bob = y ;
exports.bob = y;

// OR module.exports.alice = function(){};
exports.alice = function(argument){
	console.log('Alice: '+argument);
};