
const Q = require("q")
const jsen = require('jsen')
let validate = jsen(require('../schema/removeSingle'))

function removeSingle(dbKey, bucket, objOptions){
	
	objOptions = objOptions || {}
	
	let deferred = Q.defer()
	
	let params = {
		"dbKey": dbKey,
		"options": objOptions,
		"bucket": bucket
	}
	
	
	validate(params)
	
	if(validate.errors && validate.errors.length){
		deferred.reject(validate.errors)
	}else{
		bucket.remove(dbKey, objOptions, function(err, results){
			
			if(err){
				deferred.reject(err)
			}else{
				deferred.resolve(results)
			}
			
		})
	}
	
	return deferred.promise
}

exports.removeSingle = removeSingle
