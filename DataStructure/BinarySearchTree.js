// 二叉搜索树（BST，BinarySearchTree）是二叉树的一种，但是它只允许你在左侧子节点存储（比父节点）小的值；在右侧节点存储（比父节点）大（或等于）的值。
// 使用指针，一个指向左侧子节点，一个指向右侧子节点
// 声明一个Node类来表示树中的每个节点，现在将节点本身不再称作节点或项，而是称其为键
// 键，是数相关的术语中对节点的称呼
// 很多方法会利用到递归
function BinarySearchTree() {
    let Node = function(key) {
        this.key = key
        this.left = null
        this.right = null
    }

    let root = null

    /**
     * 私有的辅助函数
     * 1. 如果树非空，需要找到插入新节点的位置。因此，在此调用insertNode方法时要通过参数传入树的根节点和要插入的节点。
     * 2. 如果新节点的键小于当前节点的键，那么需要检查当前节点的左侧子节点。如果它没有左侧子节点，就在那里插入新的节点。
     * 如果有左侧子节点，需要通过递归调用insertNode方法继续找到树的下一层。
     * 3. 如果节点的键比当前节点的键打，同时当前节点没有右侧子节点，就在那里插入新的节点。
     * 如果有右侧子节点，同样需要递归调用insertNode方法，但是要用来和新节点比较的将会是右侧子节点。
     */
    const insertNode = function(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                insertNode(node.right, newNode)
            }
        }
    }

    const inOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            inOrderTraverseNode(node.left, callback)
            callback(node.key)
            inOrderTraverseNode(node.right, callback)
        }
    }

    const preOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            callback(node.key)
            preOrderTraverseNode(node.left, callback)
            preOrderTraverseNode(node.right, callback)
        }
    }

    const postOrderTraverseNode = function(node, callback) {
        if (node !== null) {
            postOrderTraverseNode(node.left, callback)
            postOrderTraverseNode(node.right, callback)
            callback(node.key)
        }
    }

    const minNode = function(node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left
            }

            return node.key
        }

        return null
    }

    const findMinNode = function(node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left
            }

            return node
        }

        return null
    }

    const maxNode = function(node) {
        if (node) {
            while (node && node.right !== null) {
                node = node.right
            }

            return node.key
        }

        return null
    }

    const searchNode = function(node, key) {
        if (node === null) {
            return false
        }

        if (key < node.key) {
            return searchNode(node.left, key)
        } else if (key > node.key) {
            return searchNode(node.right, key)
        } else {
            return true
        }
    }

    const removeNode = function(node, key) {
        if (node === null) {
            return true
        }

        if (key < node.key) {
            node.left = removeNode(node.left, key)
            return node
        } else if (key > node.key) {
            node.right = removeNode(node.right, key)
            return node
        } else {
            // 键等于node.key
            // 第一种情况---1个叶节点
            if (node.left === null && node.right === null) {
                node = null
                return true
            }

            // 第二种情况---一个只有一个子节点的节点
            if (node.left === null) {
                node = node.right
                return node
            } else if (node.right === null) {
                node = node.left
                return node
            }

            // 第三种情况---一个有两个子节点的节点
            let aux = findMinNode(node.right)
            node.key = aux.key
            node.right = removeNode(node.right, aux.key)
            return node
        }
    }

    // 向树中插入一个新的键
    this.insert = function(key) {
        let newNode = new Node(key)

        if (root === null) {
            root = newNode
        } else {
            insertNode(root, newNode)
        }
    }

    // 在树中查找一个键，如果节点存在，则返回true；如果不存在，则返回false
    this.search = function(key) {
        return searchNode(root, key)
    }

    // 通过中序遍历方式遍历所有节点
    this.inOrderTraverse = function(callback) {
        inOrderTraverseNode(root, callback)
    }

    // 通过先序遍历方式遍历所有节点
    this.preOrderTraverse = function(callback) {
        preOrderTraverseNode(root, callback)
    }

    // 通过后续遍历方式遍历所有节点
    this.postOrderTraverse = function(callback) {
        preOrderTraverseNode(root, callback)
    }

    // 返回树中最小的值/键
    this.min = function() {
        return minNode(root)
    }

    // 返回树中最大的值/键
    this.max = function() {
        return maxNode(root)
    }

    // 从树中移除某个键
    this.remove = function(key) {
        root = removeNode(root, key)
    }
}
