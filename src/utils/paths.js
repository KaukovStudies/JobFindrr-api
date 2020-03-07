const path = require('path')

const rootDir = process.mainModule.path

module.exports = {
	rootDir,
	getFilePath: (...args) => path.join(rootDir, ...args)
}
