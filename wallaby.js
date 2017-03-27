module.exports = function (wallaby) {
    return {
        "files": [
            {pattern: 'node_modules/babel-polyfill/dist/polyfill.js', instrument: false},
            "src/**/*.js"
        ],
        "tests": [
            "wallaby-hack.js"
        ],
        "compilers": {
            'src/**/*.js': wallaby.compilers.babel()
        }
    }
};