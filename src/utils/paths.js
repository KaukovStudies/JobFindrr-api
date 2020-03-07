const path = require('path')

const rootDir = process.mainModule.path

const getFilePath = (...args) => path.join(rootDir, ...args)

module.exports = {
	rootDir,
	getFilePath
}
