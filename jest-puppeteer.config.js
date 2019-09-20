module.exports = {
  server: {
    command: 'npm run dev',
    port: 3000
  },
  launch: {
    headless: process.env.RUN_HEADLESS || true
  },
  browserContext: 'default'
}
