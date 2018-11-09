
const Q = require("q")

function getSingle(dbKey, bucket){

    var deferred = Q.defer()

    bucket.get(dbKey, function(err, results){

        if(err){
            deferred.reject({
                "msg": "Key doesnot exist in database",
                "err": err
            })
        }else{
            deferred.resolve(results)
        }

    })

    return deferred.promise
}

exports.getSingle = getSingle
