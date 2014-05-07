// You can avoid using new keyword if you do not capitalize first letter of the constructor name
var Flight = function () {
	this.data = {
		number: null,
		origin: null,
		destination: null,
		departs: null,
		arrives: null,
		actualDepart: null,
		actualArrive: null
	};
};

Flight.prototype.fill = function (info) {
		for(var prop in this.data) {
			if(this.data[prop] !== 'undefined') {
				this.data[prop] = info[prop];
			}
		}
};

Flight.prototype.triggerDepart = function () {
		this.data.actualDepart = Date.now();
};

Flight.prototype.triggerArrive = function () {
		this.data.actualArrive = Date.now();
};

Flight.prototype.getInformation = function () {
		return this.data;
};

module.exports = function (info) {
	
	// factory pattern for creating objects
	var instance = new Flight();
	instance.fill(info);
	return instance;
};