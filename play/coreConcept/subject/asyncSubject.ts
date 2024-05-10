// AsyncSubject 是一种 Subject，它只有在 Observable 执行 complete 方法后，观察者才会接收到最后一个值。如果 Observable 没有发出任何值，则观察者不会接收到任何值。
// 使用场景：AsyncSubject 适用于那些你只关心最终结果而不是中间过程的场景，例如长时间运行的任务结果或者加载资源的最终状态。
import { AsyncSubject } from "rxjs";

const asyncSubject = new AsyncSubject<number>();

asyncSubject.subscribe({
  next: (v) => console.log(`观察者A: ${v}`),
});

// 发送几个值， 不会被观察者接收
asyncSubject.next(1);
asyncSubject.next(2);
asyncSubject.next(3);

// 发送完成信号，观察者接收到最后一个值
setTimeout(() => {
  asyncSubject.next(4);
  asyncSubject.complete();
}, 1000);
