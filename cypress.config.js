const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: true,
  e2e: {
  supportFile: false,
    baseUrl: 'http://localhost:5000',
  },
})