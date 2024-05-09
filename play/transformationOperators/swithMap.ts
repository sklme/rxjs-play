import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

// 源Observable
const source$ = new Observable<number>((subscriber) => {
  let count = 0;
  setInterval(() => {
    ++count;

    if (count === 5) {
      subscriber.complete();
    }

    subscriber.next(count);
  }, 1000);
});

// defer
const defer = (data: number) => {
  return new Observable<number>((subscriber) => {
    setTimeout(() => {
      subscriber.next(data * 2);
      subscriber.complete();
    }, 1200);
  });
};

// 测试switchMap
source$.pipe(switchMap((data) => defer(data))).subscribe({
  // 因为1200ms后内部的Observable才会发出值，而源Observable每隔1000ms发出一个值，所以前面的值都不会被计算到，只有最后一个值会被计算
  next: (value) => console.log(value), // 10
  complete: () => console.log("complete"),
});
