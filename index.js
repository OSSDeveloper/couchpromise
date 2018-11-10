
    let db = require('./lib/connection')
    let getSingle = require('./lib/getSingle').getSingle
    let getMulti = require('./lib/getMulti').getMulti

    exports.cluster = db
    exports.getSingle = getSingle
    exports.getMulti = getMulti

