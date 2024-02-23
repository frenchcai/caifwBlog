## 1.创建proxy
vue3中应用reactive创建一个响应式对象，其中核心的函数就是下面的**createReactiveOject**，这个函数传入目标的对象，和响应式的map，这个map用于缓存组件所有的reactive对象。
	第三个参数是对响应式对象具体属性的get和set方法拦截的操作方法。
```javascript
function createReactiveObject(target, proxyMap, baseHandlers) {
  // 核心就是 proxy
  // 目的是可以侦听到用户 get 或者 set 的动作

  // 如果命中的话就直接返回就好了
  // 使用缓存做的优化点
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }

  const proxy = new Proxy(target, baseHandlers);

  // 把创建好的 proxy 给存起来，
  proxyMap.set(target, proxy);
  return proxy;
}
```

## 2.使用Reflect作为中介，拦截对象的属性的get和set
1中参入的**baseHandles**就是mutableHandlers ，这个是一个对象，定义了get和set方法
```javascript
const get = createGetter();
const set = createSetter();
export const mutableHandlers = {
  get,
  set,
};
```
createSetter 函数内部实现如下：通过使用的Reflect.set方法操作对象的属性，并返回操作的结果（true或者false）
```javascript
function createSetter() {
  return function set(target, key, value, receiver) {
    const result = Reflect.set(target, key, value, receiver);
    //返回值为true或者false
    // 在触发 set 的时候进行触发依赖
    trigger(target, "set", key);

    return result;
  };
}
```
下面是get 方法，也是通过Reflect获取目标属性值。
```javascript
 const res = Reflect.get(target, key, receiver);
```
## 3.总结
1.对比vue2 ，vue3没有直接改写原本的对象，而是通过proxy代理机制，结合Reflect，来操纵对象
