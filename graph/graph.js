//Breadth-First-Search
function bfs(graph, root) {
  let nodesLen = {};

  for (let i = 0; i < graph.lenght; i++) {
    nodesLen[i] = Infinity;
  }
  nodesLen[root] = 0;

  let queue = [root];
  let current;

  while (queue.length !== 0) {
    current = queue.shift();

    let curConnected = graph[current];
    let neighbourIndex = [];
    let index = curConnected.indexOf(1);
    while (index !== -1) {
      neighbourIndex.push(index);
      index = curConnected.indexOf(1, index + 1);
    }

    for (let j = 0; j < neighbourIndex.length; j++) {
      if (nodesLen[neighbourIndex[j]] === Infinity) {
        nodesLen[neighbourIndex[j]] = nodesLen[current] + 1;
        queue.push(neighbourIndex[j]);
      }
    }
  }

  return nodesLen;
}

let BFSGraph = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
];

console.log(bfs(BFSGraph, 1));
