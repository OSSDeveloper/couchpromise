# couchpromise - under development
couchbase SDK for Node.js - with promises


# Prerequisites

 1. Ensure node-gyp is installed globally
 2. node.js version >= 10.13.0

# Installation

 npm install --save @ossdeveloper/couchpromise

 Above command installs couchbase and 'q' promise library as dependencies.

#Useage

## To open connection to a couchbase cluster

 ### Parameters

   1. username : String
   2. password : String
   3. aryBuckets : an array of bucket names in your couchbase cluster. each item(bucket name) is a string : array
   4. aryIps : an array of IP addresses of your couchbase cluster. each item(ip) is a string : array

   Example :

     let cluster = require(''@ossdeveloper/couchpromise').cluster

     let username = 'username';
     let password = 'password';
     let aryBuckets = ['default','bucket2'];
     let aryIPs = ['xxx.xxx.xxx.xxx','xxx.xxx.xxx.xxx','xxx.xxx.xxx.xxx'];

    ### Regular chaining

     cluster.openConnections(username, password,aryBuckets,aryIPs)
         .then((done) =>{
             console.log(cluster.getBuckets()); // cluster.getBuckets() function returns an object containing all the buckets
         })
         .catch((e) => {
             console.error(e);
         });




 ## To get a single record

   ### Trying to use both async/await and regular promise chaining methods below. You can use your preferred way


       let cluster = require(''@ossdeveloper/couchpromise').cluster
       let getSingle = require('@ossdeveloper/couchpromise').getSingle

        async function getSingleRecord(){

            buckets = await cluster.getBuckets();

            let record = await getSingle('someKey', buckets['default'])

            return await record
        }


        cluster.openConnections(username, password,aryBuckets,aryIPs)
            .then((done) =>{

                getSingleRecord()
                    .then(console.log,console.error)

            })
            .catch((e) => {
                console.error(e);
            });


## All the regular couchbase bucket methods provided by couchbase can be executed with above buckets.
## Methods provided by couchpromise are addition to regular couchbase provided methods - with promises
