RxJS (Reactive Extensions for JavaScript) 是一个使用可观察序列来编写异步和基于事件的程序的库。它提供了一种使用观察者模式和迭代器模式以及函数式编程的方法来处理事件流。以下是 RxJS 的一些核心概念：

1. **Observable**: Observable 是 RxJS 的基础概念，它表示一个可调用的未来值或事件的集合。Observable 可以发出三种类型的值：一个正常的值、一个错误或一个完成信号。Observable 本身不会执行任何操作，直到它被订阅（subscribe）。

2. **Observer**: Observer 是一个对象，包含三个方法：`next`、`error` 和 `complete`。当 Observable 发出值时，`next` 方法被调用；当 Observable 发出错误时，`error` 方法被调用；当 Observable 完成时，`complete` 方法被调用。

3. **Subscription**: 当一个 Observer 订阅 Observable 时，会返回一个 Subscription 对象。这个对象代表了 Observable 的执行，主要用于取消 Observable 的执行。

4. **Operators**: Operators 是纯函数，允许以声明式的方式处理集合。在 RxJS 中，操作符用于处理、转换、组合和订阅 Observable。例如，`map`、`filter`、`merge`、`concat` 等。

5. **Subject**: Subject 是一种特殊类型的 Observable，它允许将值多播给多个 Observer。普通的 Observable 是单播的（每个订阅者都有自己的 Observable 执行），而 Subject 允许共享一个 Observable 执行。

6. **Schedulers**: Schedulers 控制着计算何时发生。它们可以用来协调并发操作中的计算，例如，指定 Observable 应该在哪个线程或任务队列上执行。

7. **Marble Diagrams**: Marble Diagrams 是一种图形化的方式来表示 Observable 和操作符的行为。在 Marble Diagrams 中，时间从左到右流动，每个圆圈或者形状代表 Observable 发出的值，箭头代表完成信号，而 X 代表错误。
