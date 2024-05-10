// BehaviorSubject 是一种特殊类型的 Subject，它需要一个初始值并且总是保持一个当前值的状态。当有新的观察者订阅时，它会立即接收到 BehaviorSubject 的当前值。
// 使用场景：当你需要确保新订阅者总是至少接收到一个最新值时，BehaviorSubject 是一个好的选择。这在需要表示和订阅应用状态（如用户认证状态、主题设置等）时非常有用。

import { BehaviorSubject } from "rxjs";

// 创建一个 BehaviorSubject，需要一个初始值

const behaviorSubject = new BehaviorSubject<number>(0);

// 第一个订阅者, 会接收到初始值
behaviorSubject.subscribe({
  next: (value) => console.log("观察者A", value), // 0
});

// BehaviorSubject 发送值
behaviorSubject.next(1);

// 第二个订阅者, 会接收到最新值
behaviorSubject.subscribe({
  next: (value) => console.log("观察者B", value), // 1
});

// BehaviorSubject 发送值
behaviorSubject.next(2);
