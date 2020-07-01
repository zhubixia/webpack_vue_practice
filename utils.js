const path = require('path')

function resolve(dir){
  return path.resolve(__dirname, dir)
}

const utils = {
  resolve
}
module.exports = utils
