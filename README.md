
## @ossdeveloper/couchpromise - As Promised : *Under active development*

 #### couchbase SDK for Node.js - with promises


### Prerequisites

 1. Ensure node-gyp is installed globally(npm install -g node-gyp)
 2. node.js version >= 10.13.0

### Installation

 - npm install --save @ossdeveloper/couchpromise

 Above command installs couchbase and 'q' promise library as dependencies.

### Assumptions

 1. Your couchbase cluster username is 'username' and password is 'password'
 2. You have a bucket named 'default' in your couchbase cluster

### List of operations - as promised

** You can use this library like regular couchbase node.js sdk and, use below methods for promises **
 
 1. Settingup buckets(DB connection) : [setupBuckets](#1-to-setup-buckets)
 2. insert : [insertSingle](#2-to-insert-a-single-record)
 3. upsert : [upsertSingle](#3-to-upsert-a-single-record)
 4. replace : [replaceSingle](#4-to-replace-a-single-record)
 5. remove : [removeSingle](#5-to-remove-a-single-record)
 6. get : [getSingle](#6-to-get-a-single-record)
 7. Execute N1QL : [getN1QLResults](#7-to-execute-N1QL-Query-and-receive-results)
 8. getAndTouch : getAndTouchSingle

### Usage

 #### 1. To setup Buckets

 ##### Parameters
 
   1. username : String
   
   2. password : String
   
   3. aryBuckets : array -> an array of bucket names in your couchbase cluster. each item(bucket name) is a string
   
   4. aryIps : array ->  an array of IP addresses of your couchbase cluster. each item(ip) is a string 

   ##### Example :
   
    let db = require('@ossdeveloper/couchpromise').buckets
    let buckets = {};
     
     let username = 'username';
     let password = 'password';
     let aryBuckets = ['default','bucket2'];
     let aryIPs = ['xxx.xxx.xxx.xxx','xxx.xxx.xxx.xxx','xxx.xxx.xxx.xxx'];
     
     db.setupBuckets(username, password,aryBuckets,aryIPs)
        .then((result) =>{
            
            if(result === true){
                
                buckets = db.getBuckets()
                
                console.log(buckets)
                
            }else{
                console.error(result)
            }
            
        })
        .catch((e) => {
            console.error(e)
        })
     

 #### 2. To insert a single record

    let cluster = require('@ossdeveloper/couchpromise').cluster
    let insertSingle = require('@ossdeveloper/couchpromise').insertSingle

    cluster.openConnections(username, password,aryBuckets,aryIPs)
        .then((result) =>{
        
            if(result === true){
                            
                buckets = db.getBuckets()
                
                let strKey = 'uniqueKey'
                let objDocument = {"test": "test"}
                let objOptions = {}
                let objBucket = cluster.getBuckets()['default']
        
                insertSingle(strKey, objDocument, objBucket, objOptions)
                
                    .then((result) => console.log(result))
                    
                    .catch((e) => console.log(e))
                
            }else{
                console.error(result)
            }
           
        
        })
        
        .catch((e) => console.error(e));

#### 3. To upsert a single record

    let cluster = require('@ossdeveloper/couchpromise').cluster
    let upsertSingle = require('@ossdeveloper/couchpromise').upsertSingle

          

    cluster.openConnections(username, password,aryBuckets,aryIPs)
        .then((result) =>{
        
            if(result === true){
                                        
                buckets = db.getBuckets()
                
                let strKey = 'uniqueKey'
                let objDocument = {"test": "test"}
                let objOptions = {}
                let objBucket = cluster.getBuckets()['default']
        
                upsertSingle(strKey, objDocument, objBucket, objOptions)
                
                    .then((result) => console.log(result))
                    
                    .catch((e) => console.log(e))
                
            }else{
                console.error(result)
            }
        
        .catch((e) => {
            console.error(e);
        });

#### 4. To replace a single record

    let cluster = require('@ossdeveloper/couchpromise').cluster
    let replaceSingle = require('@ossdeveloper/couchpromise').replaceSingle
    
    cluster.openConnections(username, password,aryBuckets,aryIPs)
    
        .then((result) =>{
        
            if(result === true){
                                                
                buckets = db.getBuckets()
                
                let strKey = 'uniqueKey'
                let objDocument = {"test": "test"}
                let objOptions = {}
                let objBucket = cluster.getBuckets()['default']
        
                replaceSingle(strKey, objDocument, objBucket, objOptions)
                    .then((result) => console.log(result))
                    .catch((e) => console.error(e))
                
            }else{
                console.error(result)
            }
        

        })
        
        .catch((e) => console.error(e))

#### 5. To remove a single record

    let cluster = require('@ossdeveloper/couchpromise').cluster
    let removeSingle = require('@ossdeveloper/couchpromise').removeSingle

    

    cluster.openConnections(username, password,aryBuckets,aryIPs)
        
        .then((result) =>{
        
            if(result === true){
                                                        
                buckets = db.getBuckets()
                
                let strKey = 'uniqueKey'
                let objDocument = {"test": "test"}
                let objOptions = {}
                let objBucket = cluster.getBuckets()['default']
        
                removeSingle(strKey, objBucket)
                        
                    .then((result) => console.log(result))
                    
                    .catch((e) => console.error(e))
                
            }else{
                console.error(result)
            }

        })
        
        .catch((e) => console.error(e))


 #### 6. To get a single record

    let cluster = require('@ossdeveloper/couchpromise').cluster
    let getSingle = require('@ossdeveloper/couchpromise').getSingle

    

    cluster.openConnections(username, password,aryBuckets,aryIPs)
        
        .then((result) =>{
        
            if(result === true){
                                                                    
                buckets = db.getBuckets()
                
                let strKey = 'uniqueKey'
                let objDocument = {"test": "test"}
                let objOptions = {}
                let objBucket = cluster.getBuckets()['default']
        
                getSingle(dbKey, objBucket)
                
                    .then((result) => console.log(result))
                    
                    .catch((e) => console.error(e))
                
            }else{
                console.error(result)
            }
        
        })
        
        .catch((e) => {
            console.error(e);
        });



 #### 7. To execute N1QL Query and receive results

    let cluster = require('@ossdeveloper/couchpromise').cluster
    let getN1QLResults = require('@ossdeveloper/couchpromise').getN1QLResults

    cluster.openConnections(username, password,aryBuckets,aryIPs)
     .then((result) =>{

        if(result === true){
        
            let strQuery = 'select * from default limit 10' // To get 10 records from default bucket
                 
            let objBucket = cluster.getBuckets()['default']
                
            getN1QLResults(strQuery, objBucket)
                 
                .then((result) => console.log(result))
                    
                .catch((e) => console.error(e))        
        }else{
            
        }

    
    })
     .catch((e) => {
         console.error(e);
     });



## Multiple operations

#### 8. To get Multiple records

    let db = require('./index').buckets
    let getSingle = require('@ossdeveloper/couchpromise').getSingle

    

    cluster.openConnections(username, password,aryBuckets,aryIPs)
        
        .then((result) =>{
        
            if(result === true){
                
            }else{
                let strKey = ['key1','key2']
                let objBucket = cluster.getBuckets()['default']
                
                getMulti(strKey,objBucket)
                    .then((result) => {
                        console.log(result)
                    })
                    .catch((e) => {
                        console.error(e)
                    })
            }
        
        .catch((e) => {
            console.error(e);
        });


### Happy Coding...
