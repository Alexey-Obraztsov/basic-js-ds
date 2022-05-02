const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

class Queue {
  getUnderlyingList() {
    return this.x;
  }
  enx(value) {
    const node = new ListNode(value);
    if (!this.x) {
      this.x = node;
    } else {
      let currentNode = this.x;
      while(currentNode) {
        if (!currentNode.next) {
          currentNode.next = node;
          break;
        }
        currentNode = currentNode.next;
      }
    }
  }
  dex() {
    const value = this.x.value;
    this.x = this.x.next;
    return value;
  }
}

module.exports = {
  Queue
};
