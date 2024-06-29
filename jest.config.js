/** @type {import('ts-jest').JestConfigWithTsJest} */
const {pathsToModuleNameMapper} = require('ts-jest')
const {compilerOptions} = require('./tsconfig')
module.exports = {
    roots: ['<rootDir>'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>'}),
    modulePaths: [compilerOptions.baseUrl],
    preset: 'ts-jest',
    verbose: true,
    testEnvironment: 'node',
    testRegex: "(tests\/.*)\\.ts$"
};