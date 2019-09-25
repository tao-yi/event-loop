// https://github.com/nodejs/node/issues/22257
for (let i = 0; i < 2; i++) {
  // macrotask
  setTimeout(() => {
    console.log('Timeout', i)
    // microtask
    Promise.resolve()
      .then(() => console.log('Promise 1', i))
      .then(() => console.log('Promise 2', i))
  }, 0)
}
