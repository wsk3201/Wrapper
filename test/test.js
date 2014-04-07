/**
 * Created by mercury on 14-4-5.
 */

var _ = require('lodash');
var wrap = require('../wrapper').Wrap;
var a = wrap({a: 1, b: {c: 3, d: 4}});
console.log(a._sub, a._raw);

a.b.on('change:c', function (v,pv) {
  console.log('change can value: %s previous value: %s',v,pv);
});

a.on('change:b', function (v,pv) {
  console.log('change b value: %s previous value: %s',v,pv);
});

a.b.c = 5;

a.b = 1;

a.b = [1, 2, 3];

console.log(a._sub, a._raw);
