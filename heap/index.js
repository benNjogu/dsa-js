/**
 * @Heap
 * a partially ordered binary tree and which satisfies the heap property.
 *
 * @maxHeap
 * all parent nodes are equal or greater than the child nodes.
 *
 * @minHeap
 * all the child nodes are greater than or equal to the parent nodes.
 *
 * NB: Binary heaps are complete binary trees - all levels of the tree are fully filled and a partially
 *                                               filled level is filled from left to right.
 *
 * left-child: i * 2
 * right-child: i * 2 + 1
 * parent: i / 2 //If decimal take the floor.
 *
 * NB: When implementing a heap, leave index 0 as null to make the math work.
 */
