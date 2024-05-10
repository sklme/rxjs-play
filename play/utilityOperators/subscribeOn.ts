// TODO 需要先了解调度起作用的原理

// subscribeOn 操作符用于指定 Observable 在哪个调度器（Scheduler）上执行订阅逻辑。这可以让你控制 Observable 的执行上下文，例如在不同的线程或任务队列上执行。

/*
subscribeOn 用于指定 Observable 的源头（source）在哪个调度器上执行。这影响的是 Observable 开始工作的时间点和上下文，通常用于指定在哪个线程或执行上下文中开始执行 Observable 的工作。
*/
import { asyncScheduler, of } from "rxjs";
import { subscribeOn } from "rxjs/operators";

// 创建一个 Observable
const observable = of(1, 2, 3).pipe(subscribeOn(asyncScheduler));

// 订阅 Observable
observable.subscribe({
  next: (value) => console.log(`Next: ${value}`),
  error: (err) => console.error(`Error: ${err}`),
  complete: () => console.log("Completed"),
});

console.log("Just after subscribe");
