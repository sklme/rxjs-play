import { Subject } from "rxjs";

const subject = new Subject<number>();

// 第一个订阅者
subject.subscribe({
  next: (value) => console.log("观察者A", value),
});

// 第二个订阅者
subject.subscribe({
  next: (value) => console.log("观察者B", value),
});

// Subject 发送值
subject.next(1);
subject.next(2);

// 第三个订阅者，将会错过前面的值
subject.subscribe({
  next: (v) => console.log(`观察者C`, v),
});

// Subject 发送值
subject.next(3);
