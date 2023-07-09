// size of chessboard
const SIZE = 8;

// all eight possible movements for a knight
const MOVES = [
  [-2, -1],
  [-1, -2],
  [1, -2],
  [2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
];

/** Checks if (x) lies inside board */
const isLegal = (x) => {
  return x >= 0 && x < SIZE;
};

/** Creates a list of legal moves for (x, y) position on the board. */
const getLegalMoves = (x, y) => {
  const newMoves = [];

  for (const [dx, dy] of MOVES) {
    const newX = x + dx;
    const newY = y + dy;

    if (isLegal(newX) && isLegal(newY)) {
      newMoves.push([newX, newY]);
    }
  }

  return newMoves;
};

const backtrace = (parent, end) => {
  const path = [end];
  let curr = end;
  while (parent[curr] != -1) {
    path.push(parent[curr]);
    curr = parent[curr];
  }
  return path.reverse();
};

/** Finds the shortest possible way to get from one square (start) to another (end).
 * Uses BFS algorithm.
 * @typedef {[number, number]} Tuple - [x, y] coordinates on board
 * @param {Tuple} start - Tuple
 * @param {Tuple} end - Tuple
 * @returns {Array<Tuple>}
 */
const knightMoves = (start, end) => {
  // check for invalid inputs
  [...start, ...end].forEach((x) => {
    if (!isLegal(x)) {
      throw Error('Invalid input');
    }
  });

  const [endX, endY] = end;
  // create a queue and enqueue the first node
  const queue = [start];

  // set to check if the matrix cell is visited before or not
  const visited = {};
  visited[start] = true;

  // map for each node to the parent
  const parent = {};
  parent[start] = -1;

  // loop till queue is empty
  while (queue.length) {
    const curr = queue.shift();
    const [x, y] = curr;

    // check if the current position of the knight is end position
    if (x === endX && y === endY) {
      return backtrace(parent, end);
    }

    // check for all eight possible movements for a knight
    const newMoves = getLegalMoves(x, y);

    // enqueue each valid movement
    for (const move of newMoves) {
      // skip if the location is visited before
      if (visited[move]) continue;

      // mark the current node as visited
      visited[move] = true;
      parent[move] = curr;
      queue.push(move);
    }
  }
};

const logPath = (path) => {
  let log = `You made it in ${path.length - 1} moves!  Here's your path: \n`;
  log += path.map((move) => `[${move}]`).join(', ');
  console.log(log);
};

// source
const knight = [0, 0];
// destination
const target = [7, 7];

const path = knightMoves(knight, target);

logPath(path);
