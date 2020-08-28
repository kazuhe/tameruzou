module.exports = {
    plugins: [
        // 'stylelint'
        'stylelint-scss',
        'stylelint-order'
    ],
    extends: [
        'stylelint-config-standard',
        'stylelint-config-prettier'
    ],
    ignoreFiles: [
        '**/node_modules/**',
    ],
    rules: {
        'indentation': 2,
        'string-quotes': 'single',
        'order/properties-alphabetical-order': true,
        "color-no-invalid-hex": [true],
        "color-named": "never",
        "color-hex-case": ["lower"],
        'order/order': [
            'less-mixins',
            'dollar-variables',
            'custom-properties',
            'declarations',
            'rules'
        ]
    }
};