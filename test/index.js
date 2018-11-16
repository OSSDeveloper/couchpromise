const should = require('chai').should()
const couchpromise = require('./../index.js')

const cluster = require('./../lib/connection')
const getAndTouchSingle = require('./../lib/getAndTouchSingle').getAndTouchSingle
const getMulti = require('./../lib/getMulti').getMulti
const getN1QLResults = require('./../lib/getN1QLResults').getN1QlResults
const getSingle = require('./../lib/getSingle').getSingle
const insertSingle = require('./../lib/insertSingle').insertSingle
const removeSingle = require('./../lib/removeSingle').removeSingle
const replaceSingle = require('./../lib/replaceSingle').replaceSingle
const upsertSingle = require('./../lib/upsertSingle').upsertSingle

describe('CouchPromise', function(){
	
	it('Should export object cluster', function(){
		couchpromise.cluster.should.be.a('object')
		couchpromise.cluster.should.be.equal(cluster)
	})
	
	it('Should return function getAndTouchSingle', function(){
		couchpromise.getAndTouchSingle.should.be.a('function')
		couchpromise.getAndTouchSingle.should.be.equal(getAndTouchSingle)
	})
	
	it('Should return function getMulti', function(){
		couchpromise.getMulti.should.be.a('function')
		couchpromise.getMulti.should.be.equal(getMulti)
	})
	
	it('Should return function getN1QLResults', function(){
		couchpromise.getN1QLResults.should.be.a('function')
		couchpromise.getN1QLResults.should.be.equal(getN1QLResults)
	})
	
	it('Should return function getSingle', function(){
		couchpromise.getSingle.should.be.a('function')
		couchpromise.getSingle.should.be.equal(getSingle)
	})
	
	it('Should return function insertSingle', function(){
		couchpromise.insertSingle.should.be.a('function')
		couchpromise.insertSingle.should.be.equal(insertSingle)
	})
	
	it('Should return function removeSingle', function(){
		couchpromise.removeSingle.should.be.a('function')
		couchpromise.removeSingle.should.be.equal(removeSingle)
	})
	
	it('Should return function replaceSingle', function(){
		couchpromise.replaceSingle.should.be.a('function')
		couchpromise.replaceSingle.should.be.equal(replaceSingle)
	})
	
	it('Should return function upsertSingle', function(){
		couchpromise.upsertSingle.should.be.a('function')
		couchpromise.upsertSingle.should.be.equal(upsertSingle)
	})
	
})
