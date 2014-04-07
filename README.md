Wrapper
=======

Object event Wrapper

Wrapped raw object with a EventEmitter.You can use wrapped object as a raw object.

Install
------
bower

    bower install wrapperjs

npm
    
    npm install wrapperjs

Wrap object
------

```javascript

var wrap = require('../wrapper').Wrap;

var a = wrap({a: 1, b: {c: 3, d: 4}});

console.log(a._sub, a._raw);

```


Listen change event
------

```javascript

a.b.on('change:c', function (v,pv) {
  console.log('change c value: %s previous value: %s',v,pv);
});

a.on('change:b', function (v,pv) {
  console.log('change b value: %s previous value: %s',v,pv);
});

a.b.c = 5;

a.b = 1;

a.b = [1, 2, 3];

console.log(a._sub, a._raw);

```