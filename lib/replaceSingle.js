
const Q = require('q')

function replaceSingle(key, obj, bucket, options){
	
	options = options || {}
	
	let deferred = Q.defer()
	
	bucket.replace(key, obj, options, function(err, result){
		if(err){
			deferred.reject(err)
		}else{
			deferred.resolve(result)
		}
	});
	
	return deferred.promise
}

exports.replaceSingle = replaceSingle
