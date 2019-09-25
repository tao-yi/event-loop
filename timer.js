const fs = require('fs')

function someAsyncOperation (callback) {
  // Assume this takes 95ms to complete
  fs.readFile('./images/event-loop-1.png', callback)
}

const start = process.hrtime()

setTimeout(() => {
  const end = process.hrtime(start)
  console.log(`${end[0] * 1000 + end[1] / 1000000} ms have passed since I was scheduled`)
}, 100)

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  const startCallback = Date.now()

  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
})

/*

whiel(loop is alive){
// 第一次循环，0ms, 没到100ms，跳过
// 第二次循环，95ms，没到100ms，跳过
// 第三次循环，105ms, 超过100ms, 执行回调函数
uv_run_timers()

// 第一次循环没有 pending 回调，跳过
// 第二次循环，执行readFile的回调函数, 花费10秒
uv_runpending()

// 第一次循环，阻塞100毫秒直到nextTimer is due, epoll花费95ms执行I/O操作
// 第二次循环没有I/O操作了，进入下一次循环
uv_io_poll()
}
*/
