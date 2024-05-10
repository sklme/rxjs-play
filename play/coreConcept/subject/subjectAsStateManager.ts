// 状态管理：在某些情况下，Subject 可以用于在应用中管理和广播状态的变化
import { Subject } from "rxjs";

interface State {
  count: number;
}

// 状态保存的对象
const state: State = {
  count: 0,
};

// 创建一个subject，作为状态储存
const counterSubject = new Subject<State>();

// 函数用于更新状态并通过 Subject 广播新状态
const increment = () => {
  state.count++;
  counterSubject.next({ ...state });
};

// 函数用于更新状态并通过 Subject 广播新状态
const decrement = () => {
  state.count--;
  counterSubject.next({ ...state });
};

// 组件A 订阅状态
counterSubject.subscribe({
  next: (value) => console.log("组件A", value.count),
});

// 组件B 订阅状态
counterSubject.subscribe({
  next: (value) => console.log("组件B", value.count),
});

// 更新状态
increment();
increment();
decrement();

setTimeout(() => {
  // 组件C 订阅状态
  counterSubject.subscribe({
    next: (value) => console.log("组件C", value.count),
  });

  increment();
  increment();
});
