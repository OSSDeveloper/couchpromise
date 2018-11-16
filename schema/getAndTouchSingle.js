
module.exports = {
	properties: {
		"dbKey": {
			type: 'string',
			minLength: 1,
			invalidMessage: 'Invalid key. It must be a string with minimum 1 character',
			requiredMessage: 'Key is required'
		},
		"expiry": {
			type: 'number',
			minimum: 0,
			invalidMessage: 'Invalid expiry. It must be a number with minimum value of 0',
			requiredMessage: 'Expiry is required'
		},
		"bucket": {
			type: 'object',
			requiredMessage: 'You must supply a valid couchbase bucket'
		}
	},
	"required": ['dbKey','expiry','bucket'],
	"additionalProperties": false
}
