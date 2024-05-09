import { of } from "rxjs";
import { last, scan } from "rxjs/operators";

// 相当于累加器，和Array.prototype.reduce()类似，但是它会发出每一步的累加值

const source$ = of(1, 2, 3, 4, 5);

const dest$ = source$.pipe(scan((acc, value) => acc + value, 0));

dest$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("complete"),
});

dest$.pipe(last()).subscribe({
  next: (value) => console.log("last value: ", value),
  complete: () => console.log("last complete"),
  error: (err) => console.log("last error: ", err),
});
