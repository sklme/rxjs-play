import { of, timer } from "rxjs";
import { concatMap, map, take } from "rxjs/operators";

const source$ = of(1, 2, 3, 4, 5);

const doubleWith123 = (data: number) => {
  return timer(200, 200)
    .pipe(take(3))
    .pipe(
      map((value) => {
        return value * data;
      })
    );
};

// concatMap会等待前一个Observable完成后再订阅下一个Observable
source$.pipe(concatMap((data) => doubleWith123(data))).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("complete"),
});
