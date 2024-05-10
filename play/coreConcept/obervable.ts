/**
 * @file 自己创建一个可观察对象，然后订阅，可取消订阅
 */

import { Observable } from "rxjs";

const observable = new Observable<number>((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);

  const timeId = setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 300);

  return {
    unsubscribe() {
      clearTimeout(timeId);
      console.log("停止订阅了");
    },
  };
});

const subscription = observable.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("complete"),
});

console.log("是否关闭", subscription.closed);

// 停止订阅
subscription.unsubscribe();

console.log("是否关闭", subscription.closed);
