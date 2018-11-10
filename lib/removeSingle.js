
const Q = require("q")

function removeSingle(dbKey, bucket, objOptions){
	
	objOptions = objOptions || {}
	
	var deferred = Q.defer()
	
	bucket.remove(dbKey, objOptions, function(err, results){
		
		if(err){
			deferred.reject(err)
		}else{
			deferred.resolve(results)
		}
		
	})
	
	return deferred.promise
}

exports.removeSingle = removeSingle
