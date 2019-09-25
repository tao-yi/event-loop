const crypto = require('crypto')
for (let i = 0; i < 10; i++) {
  crypto.pbkdf2('secret', 'salt', 10000, 512, 'sha512', () => {
    console.log(`pbkdf2: ${i}`)
  })
  setTimeout(() => console.log('setTimeout' + i), 0)
  setImmediate(() => console.log('setImmediate' + i))
}
