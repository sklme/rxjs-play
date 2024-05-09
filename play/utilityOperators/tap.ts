// 操作符用于执行副作用，例如打印日志、调试或执行一些不影响 Observable 流的操作。它接收一个 Observer 对象或者一个回调函数，并在源 Observable 发出值时执行，但不改变流中的值。

import { of } from "rxjs";
import { map, tap } from "rxjs/operators";

const source$ = of(1, 2, 3);

const example$ = source$.pipe(
  tap((value) => console.log("Before map:", value)),
  map((value) => value * 10),
  tap((value) => console.log("After map:", value))
);

example$.subscribe((value) => console.log("Output:", value));
