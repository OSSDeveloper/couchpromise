
## @ossdeveloper/couchpromise - As Promised

 #### couchbase SDK for Node.js - with promises


### Prerequisites

 1. Ensure node-gyp is installed globally
 2. node.js version >= 10.13.0

### Installation

 - npm install --save @ossdeveloper/couchpromise

 Above command installs couchbase and 'q' promise library as dependencies.

### Assumptions

 1. Your couchbase cluster username is 'username' and password is 'password'
 2. You have a bucket named 'default' in your couchbase cluster

### List of operations - as promised

** You can use this library like regular couchbase node.js sdk and, use below methods for promises **
 
 1. opening a connection : [openConnections](#1-to-open-connection)
 2. insert : [insertSingle](#2-to-insert-a-single-record)
 3. upsert : [upsertSingle](#3-to-upsert-a-single-record)
 4. replace : [replaceSingle](#4-to-replace-a-single-record)
 5. remove : [removeSingle](#5-to-remove-a-single-record)
 6. get : [getSingle](#6-to-get-a-single-record)
 7. Execute N1QL : [getN1QLResults](#7-to-execute-N1QL-Query-and-receive-results)
 8. getAndTouch : getAndTouchSingle

### Usage

##### Trying to use both async/await and regular promise chaining methods below. You can use the methods directly without wrapping it in async/await

##### Tip : Try to apply your transformations on db record data in the async function block and business logic in promise chaining block. Would keep your code clean and tidy.

 #### 1. To open connection

 ##### Parameters
 
   1. username : String
   2. password : String
   3. aryBuckets : an array of bucket names in your couchbase cluster. each item(bucket name) is a string : array
   4. aryIps : an array of IP addresses of your couchbase cluster. each item(ip) is a string : array

   ##### Example :
   
    let cluster = require('@ossdeveloper/couchpromise').cluster
    let buckets = {};
     let username = 'username';
     let password = 'password';
     let aryBuckets = ['default','bucket2'];
     let aryIPs = ['xxx.xxx.xxx.xxx','xxx.xxx.xxx.xxx','xxx.xxx.xxx.xxx'];
    
    ##### Regular promise chaining
    
     cluster.openConnections(username, password,aryBuckets,aryIPs)
         .then((done) =>{
	         buckets = cluster.getBuckets() // cluster.getBuckets() function returns an object containing all the buckets
             console.log(buckets) 
         })
         .catch((e) => {
             console.error(e);
         });

 #### 2. To insert a single record

       let cluster = require('@ossdeveloper/couchpromise').cluster
       let insertSingle = require('@ossdeveloper/couchpromise').insertSingle
       
        async function insertSingleRecord(strKey, objDocument, objBucket, objOptions){

            let result = await insertSingle(strKey, objDocument, objBucket, objOptions)

            return await result
        }


        cluster.openConnections(username, password,aryBuckets,aryIPs)
            .then((done) =>{
            
            let strKey = 'uniqueKey'
            let objDocument = {"test": "test"}
            let objOptions = {}
            let objBucket = cluster.getBuckets()['default']
            
                insertSingleRecord(strKey, objDocument, objBucket, objOptions){
                    .then(console.log,console.error)

            })
            .catch((e) => {
                console.error(e);
            });

#### 3. To upsert a single record

       let cluster = require('@ossdeveloper/couchpromise').cluster
       let upsertSingle = require('@ossdeveloper/couchpromise').upsertSingle
       
        async function upsertSingleRecord(strKey, objDocument, objBucket, objOptions){
        
            let result = await upsertSingle(strKey, objDocument, objBucket, objOptions)

            return await result
        }


        cluster.openConnections(username, password,aryBuckets,aryIPs)
            .then((done) =>{
            
            let strKey = 'uniqueKey'
            let objDocument = {"test": "test"}
            let objOptions = {}
            let objBucket = cluster.getBuckets()['default']
            
                upsertSingleRecord(strKey, objDocument, objBucket, objOptions){
                    .then(console.log,console.error)

            })
            .catch((e) => {
                console.error(e);
            });

#### 4. To replace a single record

       let cluster = require('@ossdeveloper/couchpromise').cluster
       let replaceSingle = require('@ossdeveloper/couchpromise').replaceSingle
       
        async function replaceSingleRecord(strKey, objDocument, objBucket, objOptions){

            let result = await replaceSingle(strKey, objDocument, objBucket, objOptions)

            return await result
        }


        cluster.openConnections(username, password,aryBuckets,aryIPs)
            .then((done) =>{
            
            let strKey = 'uniqueKey'
            let objDocument = {"test": "test"}
            let objOptions = {}
            let objBucket = cluster.getBuckets()['default']
            
                replaceSingleRecord(strKey, objDocument, objBucket, objOptions){
                    .then(console.log,console.error)

            })
            .catch((e) => {
                console.error(e);
            });

#### 5. To remove a single record

       let cluster = require('@ossdeveloper/couchpromise').cluster
       let removeSingle = require('@ossdeveloper/couchpromise').removeSingle

        async function removeSingleRecord(strKey, objBucket){

            let result = await removeSingle(strKey, objBucket)

            return await result
        }

        cluster.openConnections(username, password,aryBuckets,aryIPs)
            .then((done) =>{
            
            let strKey = 'uniqueKey'
            let objOptions = {}
            let objBucket = cluster.getBuckets()['default']
            
                removeSingleRecord(strKey, objBucket, objOptions){
                    .then(console.log,console.error)

            })
            .catch((e) => {
                console.error(e);
            });


 #### 6. To get a single record

       let cluster = require('@ossdeveloper/couchpromise').cluster
       let getSingle = require('@ossdeveloper/couchpromise').getSingle

        async function getSingleRecord(dbKey, objBucket){

            let record = await getSingle(dbKey, objBucket)

            return await record
        }


        cluster.openConnections(username, password,aryBuckets,aryIPs)
            .then((done) =>{
            
            let strKey = 'uniqueKey'
            let objBucket = cluster.getBuckets()['default']
            
                getSingleRecord(strKey, objBucket)
                    .then(console.log,console.error)

            })
            .catch((e) => {
                console.error(e);
            });



 #### 7. To execute N1QL Query and receive results

        let cluster = require('@ossdeveloper/couchpromise').cluster
        let getN1QLResults = require('@ossdeveloper/couchpromise').getN1QLResults

         async function getN1QLQueryResults(strQuery, objBucket){

             let results = await getN1QLResults(strQuery, objBucket)

             return await results
         }


         cluster.openConnections(username, password,aryBuckets,aryIPs)
             .then((done) =>{

             let strQuery = 'select * from efault limit 10' // To get 10 random records from default bucket
             let objBucket = cluster.getBuckets()['default']

                 getN1QLQueryResults(strQuery, objBucket)
                     .then(console.log,console.error)

             })
             .catch((e) => {
                 console.error(e);
             });

### Happy Coding...
