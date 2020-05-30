function bfs(start,end){

	var Q = []
	var vertix

	Q.push(start)

	while (Q.length) {
		// pop an element from the Queue
		vertix = Q.shift()

		if( vertix === destination ){
			console.log('Just found the element')
			break;
		}

		for (var child of vertix.edges) { // or for child of this.edges[vertix] 
			if ( this.marked[child] == false ) {  // or child.visited == false
				
				Q.push(child)
				this.marked[child] = true

				// assign a parent to each node
				this.parents[child] = vertix  /// or, child.parent = vertix
			}	
		} 
	}


	/// Now extract all the elements up to the destination, and find the shortest path thorugh parents
	var node = destination
	var shortest_path = []


	// extracts them in inverse order
	while (node.parent != null) {
		shortest_path.push(node)
		node = node.parent
	}

}