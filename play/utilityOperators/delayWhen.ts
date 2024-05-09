// delayWhen: 操作符允许你为每个发出的值指定一个延迟时间。
// 它接受一个函数作为参数，这个函数对源Observable发出的每个值调用，并返回一个Observable。当这个返回的Observable发出它的第一个值或者完成时，源Observable的值才会被发出。
import { of, timer } from "rxjs";
import { delayWhen } from "rxjs/operators";

const source$ = of(1, 2, 3);

// 往一个timer中传入一个值，这个值会作为延迟的时间
const delayWhen$ = source$.pipe(delayWhen((value) => timer(100 * value)));

const time = Date.now();
delayWhen$.subscribe({
  next: (value) => {
    console.log(value);
    console.log(Date.now() - time);
  },
  complete: () => console.log("complete"),
});
