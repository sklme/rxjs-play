/**
 
takeUntil 是 RxJS 中的一个过滤操作符，它允许你监听源 Observable 的值，直到另一个通知 Observable 发出值或者完成。一旦通知 Observable 发出了一个值或者完成，takeUntil 会立即完成源 Observable 的订阅。这个操作符通常用于在某个条件发生时取消订阅，例如用户的交互行为或者其他信号。

takeUntil 操作符的工作原理如下：

1. 源 Observable 开始发出值。
2. takeUntil 同时监听源 Observable 和提供的通知 Observable。
3. 当通知 Observable 发出第一个值或者完成时，takeUntil 会立即停止监听源 Observable，并且源 Observable 的订阅被取消。
4. 源 Observable 的观察者不会再收到任何新的值，源 Observable 被认为已经完成。
 */

import { interval, timer } from "rxjs";
import { takeUntil } from "rxjs/operators";

const source$ = interval(100).pipe(takeUntil(timer(500)));

source$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("complete"),
});
