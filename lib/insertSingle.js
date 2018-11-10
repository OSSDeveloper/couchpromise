
const Q = require('q')

function insertSingle(key, obj, bucket, options){

	options = options || {}
	
    let deferred = Q.defer()

    bucket.insert(key, obj, options, function(err, result){
        if(err){
            deferred.reject(err)
        }else{
            deferred.resolve(result)
        }
    });

    return deferred.promise
}

exports.insertSingle = insertSingle
