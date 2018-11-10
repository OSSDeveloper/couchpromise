
const Q = require("q")

function getSingle(dbKey, bucket){

    let deferred = Q.defer()

    bucket.get(dbKey, function(err, results){

        if(err){
            deferred.reject(err)
        }else{
            deferred.resolve(results)
        }

    })

    return deferred.promise
}

exports.getSingle = getSingle
