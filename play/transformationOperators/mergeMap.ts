import { of } from "rxjs";
import { mergeMap } from "rxjs/operators";

const source$ = of(1, 2, 3, 4, 5);

// defer
const defer = (data: number) => {
  return of(data * 2);
};

source$.pipe(mergeMap((data) => defer(data))).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("complete"),
});
