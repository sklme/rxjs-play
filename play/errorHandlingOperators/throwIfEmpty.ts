// throwIfEmpty: 如果 Observable 完成前没有发出任何值，则抛出错误。

import { Observable, of } from "rxjs";
import { throwIfEmpty } from "rxjs/operators";

of(1, 2, 3, 4)
  .pipe(() => {
    return new Observable((subscriber) => {
      subscriber.complete();
    });
  })
  .pipe(throwIfEmpty(() => new Error("Observable is empty!")))
  .subscribe({
    next: (value) => console.log(value),
    error: (error) => console.error(error),
  });
