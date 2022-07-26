// eslint-disable-next-line @typescript-eslint/no-var-requires
const { env } = require('./server/env')

function getConfig(config) {
  return config
}

module.exports = getConfig({
  publicRuntimeConfig: {
    NODE_ENV: env.NODE_ENV,
  },
})
