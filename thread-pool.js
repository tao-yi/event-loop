// UV_THREADPOOL_SIZE=4
const crypto = require('crypto')

const NUM_REQUESTS = 20
let start = process.hrtime()
for (let i = 0; i < NUM_REQUESTS; i++) {
  crypto.pbkdf2('secret', 'salt', 10000, 512, 'sha512', () => {
    let end = process.hrtime(start)
    console.log(`iteration: ${i} finished in ${end[0] * 1000 + end[1] / 1000000}`)
  })
}
