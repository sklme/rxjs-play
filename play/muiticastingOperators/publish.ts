// !已废弃，使用multicast和connectable代替
// publish: publish操作符在内部使用了Subject来将单播Observable转换为可连接的多播Observable。与share不同，publish需要你手动调用connect方法来启动源Observable的执行。

import { interval } from "rxjs";
import { publish, take } from "rxjs/operators";

const source$ = interval(100).pipe(take(20), publish());

source$.subscribe((value) => console.log(`Subscriber 1: ${value}`));

(source$ as unknown as { connect: () => void }).connect();
