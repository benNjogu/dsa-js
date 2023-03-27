/**
 * @Tree
 * all data points in a tree are called nodes.
 * the top of the tree is called the root node.
 * the node with branches leading to other nodes is reffered to as the parent node.
 * leaf-nodes are nodes at the end of the tree that have no branches.
 *
 * @binary_tree
 * can only have two branches at single node.
 * are ordered: each subtree is less or greater than the parent node.
 * each right subtree is greater than or equal to the parent node.
 *
 * faster than searching an array but slower than searching a hashtable.
 * 
 * @treversal_and_height
 * height in a tree rep. the distance from the root node to any given leaf node.
 * the minHeight is the distance from the root node to the first leaf node without two children.
 * the maxHeight is the distance from the root node to the last node.
 * balanced tree - values between the minHeight and the maxHeight will have at most a difference of 1.
 * 
 * traversal methods
 * inOrder traversal - begin the search at the left most node and end at the right most node.
 * preOrder traversal - begin the search at the root node first and then the leaf nodes. 
 * postOrder traversal - begin the search at the leaf nodes first then the root. 
 * levelOrder traversal(breath first search) - explores nodes in a given level within a tree b4 continuing on to the next level. 
 */
