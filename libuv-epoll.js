const https = require('https')

const NUM_REQUESTS = 20
let start = process.hrtime()
for (let i = 0; i < NUM_REQUESTS; i++) {
  https
    .request('https://nebri.us/static/me.jpg', res => {
      res.on('data', () => {})
      res.on('end', () => {
        let end = process.hrtime(start)
        console.log(`iteration: ${i} finished in ${end[0] * 1000 + end[1] / 1000000}`)
      })
    })
    .end()
}
