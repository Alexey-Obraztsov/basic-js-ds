const { NotImplementedError } = require('../extensions/index.js');

function removeKFromList(l, k) {
  let x = null;
  let y = l;
  while (y) {
    if (y.value == k) {
      if (x) {
        x.next = y.next;
      } else {
        l = y.next;
      }
    } else {
      x = y;
    }
    y = y.next;
  }
  return l;
}


module.exports = {
  removeKFromList
};
