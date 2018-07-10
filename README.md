

### array-combination
自由组合数组所有的可能
All the possibilities of a free combinatorial array


<a href="https://www.npmjs.com/package/array-combination"><img src="https://img.shields.io/npm/v/array-combination.svg?style=flat-square"></a>
<a href="https://www.npmjs.com/package/array-combination"><img src="https://img.shields.io/npm/dm/array-combination.svg?style=flat-square"></a>


### install

```bash
npm install --save array-combination
```

### use

```js
const arrayCombination = require('array-combination');

let optionList = {
  '姓名': [
    {name: '张三'},
    {name: '李四'},
  ],
  '年龄': [
    {age: '10-20'},
    {age: '20-30'},
  ],
  '其他': [
    {other: '是'},
    {other: '否'},
    {other: '1'},
  ],
};

let res = cartesianProductOf(optionList['姓名'], optionList['年龄'], optionList['其他']);
console.log(res);

// 输出 =>
[ [ { name: '张三' }, { age: '10-20' }, { other: '是' } ],
  [ { name: '张三' }, { age: '10-20' }, { other: '否' } ],
  [ { name: '张三' }, { age: '10-20' }, { other: '1' } ],
  [ { name: '张三' }, { age: '20-30' }, { other: '是' } ],
  [ { name: '张三' }, { age: '20-30' }, { other: '否' } ],
  [ { name: '张三' }, { age: '20-30' }, { other: '1' } ],
  [ { name: '李四' }, { age: '10-20' }, { other: '是' } ],
  [ { name: '李四' }, { age: '10-20' }, { other: '否' } ],
  [ { name: '李四' }, { age: '10-20' }, { other: '1' } ],
  [ { name: '李四' }, { age: '20-30' }, { other: '是' } ],
  [ { name: '李四' }, { age: '20-30' }, { other: '否' } ],
  [ { name: '李四' }, { age: '20-30' }, { other: '1' } ] ]
```


