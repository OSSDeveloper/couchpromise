
	exports.buckets = require('./lib/buckets')
	exports.getSingle = require('./lib/getSingle').getSingle
	exports.getMulti = require('./lib/getMulti').getMulti
	exports.insertSingle = require('./lib/insertSingle').insertSingle
	exports.removeSingle = require('./lib/removeSingle').removeSingle
	exports.replaceSingle = require('./lib/replaceSingle').replaceSingle
	exports.upsertSingle = require('./lib/upsertSingle').upsertSingle
	exports.getAndTouchSingle = require('./lib/getAndTouchSingle').getAndTouchSingle
	exports.getN1QLResults = require('./lib/getN1QLResults').getN1QlResults
	
	let db = require('./lib/buckets')
	let buckets = {};
	let getN1QLResults = require('./lib/getN1QLResults').getN1QlResults
	
	let username = 'vijay';
	let password = 'bachi8';
	let aryBuckets = ['logs'];
	let aryIPs = ['195.201.127.0'];
	
	db.setupBuckets(username, password,aryBuckets,aryIPs)
		.then((result) =>{
			
			if(result === true){
				
				buckets = db.getBuckets()
				
				let strQuery = 'select * from logs limit 10' // To get 10 records from default bucket
				
				let objBucket = db.getBuckets()['logs']
				
				getN1QLResults(strQuery, objBucket)
					
					.then((result) => console.log(result))
					
					.catch((e) => console.error(e))
				
			}else{
				console.error(result)
			}
			
		})
		.catch((e) => {
			console.error(e)
		})

