

const Q = require("q")
const couchbase = require("couchbase")

function getN1QlResults(strN1QLQuery, bucket){
	
	let deferred = Q.defer()
	
	let N1qlQuery = couchbase.N1qlQuery
	
	let query = N1qlQuery.fromString(strN1QLQuery)
	
	bucket.query(query, function(err, rows, meta) {
		
		if(err){
			deferred.reject(err)
		}else{
			deferred.resolve(rows)
		}
	});
	
	return deferred.promise
}

exports.getN1QlResults = getN1QlResults
