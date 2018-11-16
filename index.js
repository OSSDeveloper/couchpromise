

	exports.buckets = require('./lib/buckets')
    exports.getSingle = require('./lib/getSingle').getSingle
    exports.getMulti = require('./lib/getMulti').getMulti
	exports.insertSingle = require('./lib/insertSingle').insertSingle
	exports.removeSingle = require('./lib/removeSingle').removeSingle
	exports.replaceSingle = require('./lib/replaceSingle').replaceSingle
	exports.upsertSingle = require('./lib/upsertSingle').upsertSingle
	exports.getAndTouchSingle = require('./lib/getAndTouchSingle').getAndTouchSingle
	exports.getN1QLResults = require('./lib/getN1QLResults').getN1QlResults
	
	
	
	
	
	const ip1 = "195.201.127.0"
	const ip2 = "195.201.101.46"
	const ip3 = "195.201.133.200"
	
	let db = require('./index').buckets
	let getSingle = require('./lib/getSingle').getSingle
	let getMulti = require('./lib/getMulti').getMulti
	let insertSingle = require('./lib/insertSingle').insertSingle
	let removeSingle = require('./lib/removeSingle').removeSingle
	let replaceSingle = require('./lib/replaceSingle').replaceSingle
	let upsertSingle = require('./lib/upsertSingle').upsertSingle
	let getAndTouchSingle = require('./lib/getAndTouchSingle').getAndTouchSingle
	let getN1QLResults = require('./lib/getN1QLResults').getN1QlResults
	
	let buckets = {};
	
	let username = 'vijay';
	let password = 'bachi8';
	let aryBuckets = ['logs'];
	let aryIPs = [ip1,ip2,ip3];
	
	db.setupBuckets(username, password,aryBuckets,aryIPs)
		.then((result) =>{
			
			if(result === true){
				
				console.log("Buckets setup")
				buckets = db.getBuckets()
				
				insertSingle('12',{}, buckets.logs)
					.then((result) => {
						console.log(result)
					})
					.catch((e) => {
						console.error('1', e)
					})
				
			}else{
				console.error(result)
			}
			
		})
		.catch((e) => {
			console.error(e)
		})
