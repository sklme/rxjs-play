// 当然可以。connect操作符是RxJS中的一个高阶操作符，它用于将一个冷的Observable转换为热的Observable，并且允许你在多个订阅者之间共享源Observable的执行。

import { Observable, interval, take } from "rxjs";
import { connect } from "rxjs/operators";

const source$ = interval(100)
  .pipe(take(20))
  .pipe(
    connect((share$) => {
      return new Observable<number>((subscriber) => {
        share$.subscribe(subscriber);
      });
    })
  );

source$.subscribe((value) => console.log(`Subscriber 1: ${value}`));
