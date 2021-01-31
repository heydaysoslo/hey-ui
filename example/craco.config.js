const path = require('path')
module.exports = {
  webpack: {
    alias: {
      'styled-components': path.resolve(
        __dirname,
        '../node_modules/styled-components'
      )
    }
  }
}
