# couchpromise - under development
couchbase SDK for Node.js - with promises


# Prerequisites

 1. Ensure node-gyp is installed globally
 2. node.js version >= 10.13.0

# Installation

 npm install --save @ossdeveloper/couchpromise

# To open connection to a couchbase cluster

 ## Parameters

   1. username : String
   2. password : String
   3. aryBuckets : an array of bucket names in your couchbase cluster. each item(bucket name) is a string : array
   4. aryIps : an array of IP addresses of your couchbase cluster. each item(ip) is a string : array

   Example :

     let cluster = require('couchpromise').cluster

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

    ### Async/Await

    async function openConnections(){

        let connectionOperation = await cluster.openConnections(username, password,aryBuckets,aryIPs)

        let buckets = await cluster.getBuckets()
        return await buckets
    }

    let buckets = openConnections() // buckets is an object containing all the buckets

# All the couchbase bucket methods can be executed with above buckets.
