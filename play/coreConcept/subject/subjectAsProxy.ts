// 代理或中介：Subject 可以作为中介来收集来自多个源的数据，并将这些数据统一转发给多个观察者。

import { Observable, Subject } from "rxjs";

// 创建第一个数据源 Observable
const observable1 = new Observable<string>((subscriber) => {
  setTimeout(() => {
    subscriber.next("Observable1 的第一个值");
    subscriber.complete();
  }, 1000);
});

// 创建第二个数据源 Observable
const observable2 = new Observable<string>((subscriber) => {
  setTimeout(() => {
    subscriber.next("Observable2 的第一个值");
    subscriber.complete();
  }, 1500);
});

// 创建一个 Subject 作为中介
const subject = new Subject<string>();

// 订阅 Subject 的观察者
subject.subscribe({
  next: (v) => console.log(`观察者A: ${v}`),
});
subject.subscribe({
  next: (v) => console.log(`观察者B: ${v}`),
});

setTimeout(() => {
  subject.subscribe({
    next: (v) => console.log(`观察者C: ${v}`),
  });
}, 1100);

// 订阅数据源
// 将两个 Observable 的数据通过 Subject 转发
observable1.subscribe((value) => subject.next(value));
observable2.subscribe((value) => subject.next(value));
