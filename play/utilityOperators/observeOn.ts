/**
 * 
observeOn
observeOn 用于指定在 Observable 的管道中，next、error 和 complete 通知应该在哪个调度器（Scheduler）上执行。这意味着你可以控制这些通知是在哪个任务队列中被分发的。通常用于控制事件的分发，比如在特定的线程或执行上下文中处理事件。
 */

// observeOn 操作符用于指定在哪个调度器上通知给观察者。这允许你改变通知的上下文，例如将它们调度到主线程或 UI 线程。

import { of, asyncScheduler } from "rxjs";
import { observeOn } from "rxjs/operators";

// 创建一个 Observable
const observable = of(1, 2, 3);

// 使用 observeOn 操作符来指定 asyncScheduler 调度器
const finalObservable = observable.pipe(observeOn(asyncScheduler));

// 订阅 Observable
finalObservable.subscribe({
  next: (value) => console.log(`Next: ${value}`),
  error: (err) => console.error(`Error: ${err}`),
  complete: () => console.log("Completed"),
});

console.log("Just after subscribe");
