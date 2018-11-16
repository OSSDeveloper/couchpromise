
const Q = require("q")
const jsen = require('jsen')
let validate = jsen(require('../schema/getAndTouchSingle'))

function getAndTouchSingle(dbKey,expiry, bucket){
	
	let deferred = Q.defer()
	
	let params = {
		"dbKey": dbKey,
		"expiry": expiry,
		"bucket": bucket
	}
	
	validate(params)
	
	if(validate.errors && validate.errors.length){
		deferred.reject(validate.errors)
	}else{
		bucket.getAndTouch(dbKey, expiry, function(err, results){
			
			if(err){
				deferred.reject(err)
			}else{
				deferred.resolve(results)
			}
			
		})
	}
	
	return deferred.promise
}

exports.getAndTouchSingle = getAndTouchSingle
