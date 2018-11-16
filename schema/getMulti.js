
module.exports = {
	"properties": {
		"aryKeys": {
			type: 'array',
			minItems: 1,
			uniqueItems: true,
			items: {
				type: 'string',
				minItems: 1,
				minLength: 1
				
			},
			"bucket": {
				type: 'object'
			}
		},
		"required": ['aryKeys', 'bucket'],
		"additionalProperties": false
	}
}
