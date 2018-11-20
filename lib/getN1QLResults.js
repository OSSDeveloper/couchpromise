

const Q = require("q")
const couchbase = require("couchbase")
const jsen = require('jsen')
let validate = jsen(require('../schema/getMulti.js'))

function getN1QlResults(strN1QLQuery, bucket){
	
	let deferred = Q.defer()
	
	let params = {
		"strN1QLQuery": strN1QLQuery,
		"bucket": bucket
	}
	
	validate(params)
	
	if(validate.errors && validate.errors.length){
		deferred.reject(validate.errors)
	}else{
		let N1qlQuery = couchbase.N1qlQuery
		
		let query = N1qlQuery.fromString(strN1QLQuery)
		
		try{
			bucket.query(query, function(err, rows, meta) {
				
				if(err){
					deferred.reject(err)
				}else{
					deferred.resolve(rows)
				}
			});
		}catch(e){
			deferred.reject(e)
		}
		
		
	}
	
	return deferred.promise
}

exports.getN1QlResults = getN1QlResults
