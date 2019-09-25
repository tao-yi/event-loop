console.log('script start')

setTimeout(() => {
  console.log('setTimeout 1')
  Promise.resolve().then(() => console.log('promise 1 1'))
  Promise.resolve().then(() => console.log('promise 1 2'))
  process.nextTick(() => console.log('nextTick 1 1'))
  process.nextTick(() => console.log('nextTick 1 2'))
}, 1000)

setTimeout(() => {
  console.log('setTimeout 2')
  Promise.resolve().then(() => console.log('promise 2 1'))
  Promise.resolve().then(() => console.log('promise 2 2'))
  process.nextTick(() => console.log('nextTick 2 1'))
  process.nextTick(() => console.log('nextTick 2 2'))
}, 1000)

console.log('script end')
