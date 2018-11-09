

const couchbase = require("couchbase")
let buckets = {}

async function openConnections(username, password, aryBuckets, aryIps) {

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

    if(item.done){return await true}
}

function getBuckets(){
    return buckets;
}

exports.openConnections = openConnections
exports.getBuckets = getBuckets

