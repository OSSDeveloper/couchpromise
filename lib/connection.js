

const couchbase = require("couchbase")
const jsen = require('jsen')
let validate = jsen(require('./../schema/connection'))
let buckets = {}

async function openConnections(username, password, aryBuckets, aryIps) {
	
	let params = {
		"username": username,
		"password": password,
		"aryBuckets": aryBuckets,
		"aryIps": aryIps
	}
	
	validate(params)
	
	let output = {}
	output['errors'] = validate.errors
	output['buckets'] = {};
	
	if(validate.errors.length){
		return output
	}else{
		
		aryIps = aryIps.map((ip) => 'couchbase://' + ip)
		
		let cluster = new couchbase.Cluster(... aryIps)
		
		cluster.authenticate(username, password)
		
		const iterator = aryBuckets[Symbol.iterator]()
		
		let item = iterator.next()
		
		while(!item.done){
			let tempBucket = await cluster.openBucket(item.value)
			buckets[item.value] = tempBucket
			item = iterator.next()
		}
		
		if(item.done){
			output['buckets'] = await buckets
			return await output
		}
		
	}
	
}

function getBuckets(){
    return buckets;
}

exports.openConnections = openConnections
exports.getBuckets = getBuckets

