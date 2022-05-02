const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    this.tree = addDataTree(this.tree, data);

    function addDataTree(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (node.data > data) {
        node.left = addDataTree(node.left, data);
      } else {
        node.right = addDataTree(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return checkAvailability(this.tree, data);
    function checkAvailability(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (node.data > data) {
        return checkAvailability(node.left, data);
      } else {
        return checkAvailability(node.right, data);
      }
    }
  }

  find(data) {
    if (this.has(data)) {
      return searchAvailability(this.tree, data); 
    } else {
      return null;
    }

    function searchAvailability(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (node.data > data) {
        node = searchAvailability(node.left, data);
        return node;
      } else {
        node = searchAvailability(node.right, data);
        return node;
      }
    }
  }

  remove(data) {
    this.tree = removeDataTree(this.tree, data);

    function removeDataTree(node, data) {
    if (!node) {
      return null;
    }
    if (data < node.data) {
      node.left = removeDataTree(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = removeDataTree(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        node = node.right;
        return node;
      }
      if (!node.right) {
        node = node.left;
        return node;
      }
      let rightMin = node.right;
      while (rightMin.left) {
        rightMin = rightMin.left;
      }
      node.data = rightMin.data;
      node.right = removeDataTree(node.right, rightMin.data);
      return node;
      }
    }
  }

  min(node = this.tree) {
    if (node.left === null) {
      return node.data;
    } else {
      return this.min(node.left);
    }
  }

  max(node = this.tree) {
    if (node.right === null) {
      return node.data;
    } else {
      return this.max(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};