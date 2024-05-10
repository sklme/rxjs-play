// ReplaySubject 是一种 Subject，它可以记录并多播新订阅者最近接收到的一些值。你可以指定它应该缓存多少个值或者缓存多长时间内的值。
// 使用场景：当你希望新订阅者也能接收到之前发出的值时，ReplaySubject 是合适的。这在需要保留历史数据，如聊天应用中的消息历史或股票价格的历史变化时很有用。

import { ReplaySubject } from "rxjs";

const replaySubject = new ReplaySubject<number>(
  2 /* 缓存的值个数 */,
  1000 /* 缓存的时间 */
);

// 发送几个值
replaySubject.next(1);
replaySubject.next(2);
replaySubject.next(3);

// 第一个观察者订阅 ReplaySubject，接收到最后两个值
replaySubject.subscribe({
  next: (v) => console.log(`观察者A: ${v}`),
});

setTimeout(() => {
  // 收不到值，因为只缓存1000ms
  replaySubject.subscribe({
    next: (v) => console.log(`观察者B: ${v}`),
  });
}, 1100);
