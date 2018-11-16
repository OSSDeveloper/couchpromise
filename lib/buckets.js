

const couchbase = require("couchbase")
const jsen = require('jsen')
let validate = jsen(require('../schema/db'))
let buckets = {}

async function setupBuckets(username, password, aryBuckets, aryIps) {
	
	if(aryBuckets && aryBuckets.length) aryBuckets = aryBuckets.map(i => i.trim())
	if(aryIps && aryIps.length) aryIps = aryIps.map(i => i.trim())
	
	
	let params = {
		"username": username,
		"password": password,
		"aryBuckets": aryBuckets,
		"aryIps": aryIps
	}
	
	validate(params)
	
	if(validate.errors && validate.errors.length){
		return validate.errors
	}else{
		
		aryIps = aryIps.map((ip) => 'couchbase://' + ip)
		
		let cluster = new couchbase.Cluster(... aryIps)
		
		cluster.authenticate(username, password)
		
		const iterator = aryBuckets[Symbol.iterator]()
		
		let item = iterator.next()
		
		while(!item.done){
			try{
				buckets[item.value] = await cluster.openBucket(item.value)
			}catch(e){
				return e
			}
			
			item = iterator.next()
		}
		
		if(item.done){
			return await true
		}
		
	}
	
}

function getBuckets(){
    return buckets;
}

exports.setupBuckets = setupBuckets
exports.getBuckets = getBuckets

