// defaultIfEmpty: 如果源Observable在完成前没有发出任何值，defaultIfEmpty操作符会发出一个默认值。

import { EMPTY } from "rxjs";
import { defaultIfEmpty } from "rxjs/operators";

const source$ = EMPTY.pipe(defaultIfEmpty(42));

source$.subscribe({
  next: (value) => console.log(`宇宙的终极答案是：${value}`),
  complete: () => console.log("complete"),
});
