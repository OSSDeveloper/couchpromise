
module.exports = {
	properties: {
		"dbKey": {
			type: 'string',
			minLength: 1,
			invalidMessage: 'Invalid key. It must be a string with minimum 1 character',
			requiredMessage: 'Key is required'
		},
		"obj": {
			type: 'object',
			requiredMessage: 'You must supply a valid json object to save'
		},
		"options": {
			type: 'object'
		},
		"bucket": {
			type: 'object',
			requiredMessage: 'You must supply a valid couchbase bucket'
		}
	},
	"required": ['dbKey','obj','bucket'],
	"additionalProperties": false
}
