

    let Q = require('q')

    function getMulti(aryKeys, bucket){

        let deferred = Q.defer()

        bucket.getMulti(aryKeys, function(error, results) {

            if(error) {
                deferred.reject(error)
            }else{

                for(var key in results) {
                    if(results.hasOwnProperty(key)) {
                        if(results[key].error) {
                            deferred.reject("`" + key + "`: " + JSON.stringify(results[key]));
                        }
                    }
                }

                deferred.resolve(results)

            }

        });

        return deferred.promise
    }

    exports.getMulti = getMulti
