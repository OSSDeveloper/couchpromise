
const Q = require("q")

function getAndTouchSingle(dbKey, bucket){
	
	let deferred = Q.defer()
	
	bucket.getAndTouch(dbKey, function(err, results){
		
		if(err){
			deferred.reject(err)
		}else{
			deferred.resolve(results)
		}
		
	})
	
	return deferred.promise
}

exports.getAndTouchSingle = getAndTouchSingle
