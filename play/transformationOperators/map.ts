import { map, of } from "rxjs";

const source$ = of(1, 2, 3, 4, 5);

source$.pipe(map((value) => value * 2)).subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("complete"),
});
