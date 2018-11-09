
    let db = require('./lib/connection');
    let getSingle = require('./lib/getSingle')
    let getMulti = require('./lib/getMulti')

    exports.cluster = db
    exports.getSingle = getSingle
    exports.getMulti = getMulti

