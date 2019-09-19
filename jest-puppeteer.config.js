module.exports = {
  server: {
    command: 'npm run dev',
    port: 3000
  },
  launch: {
    headless: false, //  || process.env.HEADLESS !== 'false'
  },
  browserContext: 'default'
}
