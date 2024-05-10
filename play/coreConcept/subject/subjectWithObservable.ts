import { Observable, Subject } from "rxjs";

// 创建一个每秒发出值的 Observable
const observable = new Observable<number>((subscriber) => {
  let count = 0;
  const intervalId = setInterval(() => {
    subscriber.next(count++);
  }, 100);

  // 清理函数
  return () => clearInterval(intervalId);
});

// 创建一个 Subject
const subject = new Subject<number>();

// 订阅 Observable
const subscription = observable.subscribe(subject);

// 第一个观察者订阅 Subject
subject.subscribe({
  next: (v) => console.log(`观察者A: ${v}`),
});

// 第二个观察者订阅 Subject
subject.subscribe({
  next: (v) => console.log(`观察者B: ${v}`),
});

// 取消订阅
setTimeout(() => {
  console.log("取消订阅");
  subscription.unsubscribe();
}, 2000);
