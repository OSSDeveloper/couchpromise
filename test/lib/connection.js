const should = require('chai').should()
const db = require('./../../lib/connection')

describe('cluster', function(){
	
	it('should be an object that has two methods', function(){
		db.should.be.a('object')
		db.should.have.property('openConnections')
		db.should.have.property('getBuckets')
		db.setupBuckets.should.be.a('function')
		db.getBuckets.should.be.a('function')
	})
	
})
