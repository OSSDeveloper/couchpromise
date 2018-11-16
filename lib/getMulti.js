

    let Q = require('q')
	const jsen = require('jsen')
	let validate = jsen(require('../schema/getMulti.js'))


	function getMulti(aryKeys, bucket){

        let deferred = Q.defer()
		
		let params = {
			"aryKeys": aryKeys,
			"bucket": bucket
		}
		
		
		validate(params)
		
		if(validate.errors && validate.errors.length){
			deferred.reject(validate.errors)
		}else{
			bucket.getMulti(aryKeys, function(error, results) {
				
				if(error) {
					deferred.reject(error)
				}else{
					
					for(let key in results) {
						if(results.hasOwnProperty(key)) {
							if(results[key].error) {
								deferred.reject(key + " : " + JSON.stringify(results[key]));
							}
						}
					}
					
					deferred.resolve(results)
					
				}
				
			});
		}

        return deferred.promise
    }

    exports.getMulti = getMulti
