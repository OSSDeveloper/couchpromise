
module.exports = {
	"properties": {
		"username": {
			type: 'string',
			minLength: 1,
			invalidMessage: 'Invalid username. Username must be a string with minimum 1 character',
			requiredMessage: 'Username is required.'
		},
		"password": {
			type: 'string',
			minLength: 1,
			invalidMessage: 'Invalid password. Password must be a string with minimum 1 character',
			requiredMessage: 'Password is required'
		},
		"aryBuckets": {
			type: 'array',
			minItems: 1,
			uniqueItems: true,
			items:{
				type: 'string',
				minItems: 1,
				minLength: 1
				
			},
			requiredMessage: 'An array of buckets present in your couchbase cluster is required'
		},
		"aryIps": {
			type: 'array',
			minItems: 1,
			uniqueItems: true,
			items:{
				type: 'string',
				minlength: 1,
				format: 'ipv4'
			},
			requiredMessage: 'An array of valid IP addresses of your couchbase cluster is required'
		}
	},
	"required": ['username','password','aryIps','aryBuckets'],
	"additionalProperties": false
}
