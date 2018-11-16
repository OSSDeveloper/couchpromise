
module.exports = {
	properties: {
		"dbKey": {
			type: 'string',
			minLength: 1,
			invalidMessage: 'Invalid key. It must be a string with minimum 1 character',
			requiredMessage: 'Key is required'
		},
		"bucket": {
			type: 'object',
			requiredMessage: 'You must supply a valid couchbase bucket'
		}
	},
	"required": ['dbKey','bucket'],
	"additionalProperties": false
}
