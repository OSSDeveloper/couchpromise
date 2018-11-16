
const Q = require("q")
const jsen = require('jsen')
let validate = jsen(require('../schema/getSingle'))


function getSingle(dbKey, bucket){

    let deferred = Q.defer()
	
	let params = {
		"dbKey": dbKey,
		"bucket": bucket
	}
	
	
	validate(params)
	
	if(validate.errors && validate.errors.length){
		deferred.reject(validate.errors)
	}else{
		bucket.get(dbKey, function(err, results){
			
			if(err){
				deferred.reject(err)
			}else{
				deferred.resolve(results)
			}
			
		})
	}
	
    return deferred.promise
}

exports.getSingle = getSingle
