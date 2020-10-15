# 数组
> 数组（Array）是一种线性表数据结构。它用一组连续的内存空间，来存储一组具有相同类型的数据。

**线性表**
线性表就是数据排成像一条线一样的结构。每个线性表上的数据最多只有前和后两个方向。

**连续的内存空间和相同类型的数据**
正是因为这两个限制🚫，它才有了一个堪称“杀手锏”的特性：“随机访问”。但有利就有弊，这两个限制也让数组操作变得非常低效，比如想在数组中删除、插入一个数据，为了保证连续性，就需要做大量的数据搬移工作。

## 数组的属性
- Array.length length 是 array 的实例属性。返回或设置一个数组中的元素个数。
- Array.prototype[@@unscopables]

## 数组的方法
**Array.from()**
作用：从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
```js
console.log(Array.from('foo'));
// expected output: Array ["f", "o", 'o']

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```
**Array.isArray()**
作用：判断参数是否为 Array
```js
Array.isArray([1, 2, 3]);
// true
```
instanceof 和 isArray
*档检测 Array 实例时，`Array.isArray` 优于 `instanceof`， 因为 Array.isArray 能检测 `iframes`*
Polyfill
```js
if(!Array.isArray) {
    Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) === '[object Array]'
    }
}
```
**Array.of()**
作用：创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或者类型。返回新的 `Array` 实例
`Array.of()` 与 `Array` 构造函数之间的区别在于处理整数参数。
```js
Array.of(7) // [7]
Array.of(1, 2, 3) // [1, 2, 3]

Array(7) // [ , , , , , , ]
Array(1, 2, 3) // [1, 2, 3]
```
### 常规方法
**Array.prototype.concat()**
作用：合并两个或多个数组，并返回一个新数组
**Array.prototype.join()**
**Array.prototype.pop()**
**Array.prototype.push()**
**Array.prototype.shift()**
**Array.prototype.unshift()**
**Array.prototype.slice()**
**Array.prototype.splice()**
**Array.prototype.sort()**
**Array.prototype.reverse()**

### ES6
**Array.prototype.copyWithin()**
**Array.prototype.find()**
**Array.prototype.findIndex()**
**Array.prototype.entrise()**
**Array.prototype.keys()**
**Array.prototype.values()**
**Array.prototype.includes()**
**Array.prototype.flat()**
**Array.prototype.flatMap()**

### 进阶方法
**Array.prototype.forEach()**
作用：对数组的每个元素执行一次给定的函数。*返回值 `undefined`*
**Array.prototype.map(callbackfn, thisArg)**
作用：创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。
**Array.prototype.filter()**
作用：创建一个新数组，其包含通过所提供函数实现的测试的所有元素。
**Array.prototype.every()**
作用：测试一个数组内的所有元素是否都能通过某个指定函数的测试。返回一个 `boolean`。
注意：若当前数组为空数组，此方法始终返回 `true`。
**Array.prototype.some()**
作用：测试一个数组内是不是至少有 1 个元素能通过某个指定函数的测试。返回一个 `boolean`。
注意：若当前数组为空数组，此方法始终返回 `false`。
**Array.prototype.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])**
作用：对数组中的每个元素执行一个由您提供的 *reducer* 函数（升序执行），将其结果汇总为单个返回值。
**Array.prototype.reduceRight()**
作用：与 *reduce* 一致，只是执行顺序由右向左。
