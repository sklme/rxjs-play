import { of } from "rxjs";
import { endWith } from "rxjs/operators";

of(1, 2, 3)
  .pipe(endWith(4))
  .subscribe({
    next: (value) => console.log(value),
    complete: () => console.log("complete"),
  });
// 输出: 1 2 3 4 complete
