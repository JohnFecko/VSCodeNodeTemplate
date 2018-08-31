module.exports = {
	"env": {
		"node": true,
		"es6": true
	},
	"rules": {
		"array-bracket-spacing": [2, "never"],
		"block-scoped-var": 2,
		"brace-style": [2, "1tbs"],
		"camelcase": 1,
		"computed-property-spacing": [2, "never"],
		"curly": 2,
		"eol-last": 2,
		"eqeqeq": [1, "smart"],
		"max-depth": [1, 3],
		"max-len": [1, 140],
		"max-statements": [1, 15],
		"new-cap": 1,
		"no-extend-native": 2,
		"no-mixed-spaces-and-tabs": 2,
		"no-trailing-spaces": 2,
		"no-unused-vars": 1,
		"no-use-before-define": [2, "nofunc"],
		"object-curly-spacing": [2, "never"],
		"parserOptions": {
			"ecmaVersion": 6,
			"ecmaFeatures": {
				"experimentalObjectRestSpread": true
			}
		},
		"quotes": [2, "single", "avoid-escape"],
		"semi": [2, "always"],
		"keyword-spacing": [2, {
			"before": true,
			"after": true,
			"overrides": {
				"if": {
					"after": false
				},
				"for": {
					"after": false
				},
				"while": {
					"after": false
				}
			}
		}],
		"space-unary-ops": 2
	}
}
