
const Q = require('q')
const jsen = require('jsen')
let validate = jsen(require('../schema/replaceSingle'))

function replaceSingle(dbKey, obj, bucket, options){
	
	options = options || {}
	
	let deferred = Q.defer()
	
	let params = {
		"dbKey": dbKey,
		"obj": obj,
		"options": options,
		"bucket": bucket
	}
	
	
	validate(params)
	
	if(validate.errors && validate.errors.length){
		deferred.reject(validate.errors)
	}else{
		bucket.replace(dbKey, obj, options, function(err, result){
			if(err){
				deferred.reject(err)
			}else{
				deferred.resolve(result)
			}
		});
	}
	
	return deferred.promise
}

exports.replaceSingle = replaceSingle
