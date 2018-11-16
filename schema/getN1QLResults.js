
module.exports = {
	properties: {
		"strN1QLQuery": {
			type: 'string',
			minLength: 4,
			invalidMessage: 'Invalid N1QL statement',
			requiredMessage: 'N1QL statement is required'
		},
		"bucket": {
			type: 'object',
			requiredMessage: 'You must supply a valid couchbase bucket'
		}
	},
	"required": ['strN1QLQuery','bucket'],
	"additionalProperties": false
}
