# Knights Travails

<img src="01.png" width=400>

`knightMoves` shows the shortest possible way to get from one square to another by outputting all squares the knight will stop on along the way.

The function implicitly creates a knight’s graph, where each box on a chessboard denotes a vertex. Each vertex corresponds to the position of a knight on a chessboard. Each edge represents a legal move of a knight. Then we use Breadth-First Search (BFS) algorithm to find the shortest path.

Output full path looks:

```
knightMoves([0,0],[1,2]) == [[0,0],[1,2]]
knightMoves([0,0],[3,3]) == [[0,0],[1,2],[3,3]]
knightMoves([3,3],[0,0]) == [[3,3],[1,2],[0,0]]
```

[Shortest path in an unweighted graph](https://www.geeksforgeeks.org/shortest-path-unweighted-graph/)  
[Building the Knight’s Tour Graph](https://runestone.academy/ns/books/published/pythonds/Graphs/BuildingtheKnightsTourGraph.html)  
[How does a Breadth-First Search work when looking for Shortest Path?](https://stackoverflow.com/questions/8379785/how-does-a-breadth-first-search-work-when-looking-for-shortest-path)  
[How to trace the path in a Breadth-First Search?](https://stackoverflow.com/questions/8922060/how-to-trace-the-path-in-a-breadth-first-search)
