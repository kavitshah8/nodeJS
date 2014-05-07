var app = require('./helper/app');

var should = require('should'),
	supertest = require('supertest');

describe('flights',function () {
	
	it('it should pass', function (done) {
		supertest(app)
		.get('/flight/18')
		.expect(200)
		.end(function (err, res) {
			res.status.should.equal(200);
			done();
		});
	});

	it('it should not pass', function (done) {
		supertest(app)
		.get('/flight/9999999')
		.expect(404)
		.end(function (err, res){
			res.status.should.equal(404);
			done();
		})
	});
});