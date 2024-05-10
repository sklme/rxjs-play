/**
 * @file 各个种类的调度器
 */

// 无调度器
import {
  observeOn,
  of,
  queueScheduler,
  asapScheduler,
  asyncScheduler,
  // animationFrameScheduler,
} from "rxjs";

// 这将同步输出值
of(1, 2, 3).subscribe((value) => console.log(`无调度器 ${value}`));

// queueScheduler

// queueScheduler 将任务放入事件循环的微任务队列中。这意味着任务将在当前执行栈清空后，但在下一个事件循环之前执行。
console.log("before queueScheduler");
of(1, 2, 3)
  .pipe(observeOn(queueScheduler))
  .subscribe((value) => console.log(`queueScheduler ${value}`));
console.log("after queueScheduler");

// asapScheduler asapScheduler 类似于 setTimeout，但是它会尽可能快地执行任务，通常是在当前事件循环结束后。
console.log("before asapScheduler");
of(1, 2, 3)
  .pipe(observeOn(asapScheduler))
  .subscribe((value) => console.log(`asapScheduler ${value}`));
console.log("after asapScheduler");

// asyncScheduler 类似于 setInterval，它可以用来延迟任务执行或者周期性地执行任务。
console.log("before asyncScheduler");
of(1, 2, 3)
  .pipe(observeOn(asyncScheduler))
  .subscribe((value) => console.log(`asyncScheduler ${value}`));

console.log("after asyncScheduler");

// animationFrameScheduler 用于在浏览器的下一个动画帧执行任务。这对于创建平滑的动画效果很有用。
// console.log("before animationFrameScheduler");
// of(1, 2, 3)
//   .pipe(observeOn(animationFrameScheduler))
//   .subscribe((value) => console.log(`animationFrameScheduler ${value}`));

// console.log("after animationFrameScheduler");
