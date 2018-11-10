const Q = require('q')

async function upsertSingle(key, obj, bucket, options){
	
	options = options || {}
	
	let deferred = Q.defer()
	
	bucket.upsert(key, obj, options, function(err, result){
		if(err){
			deferred.reject(err)
		}else{
			deferred.resolve(result)
		}
	});
	
	return deferred.promise
}

exports.upsertSingle = upsertSingle
