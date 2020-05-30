function insertionSort() {

	var temp, inner;
	for (var outer = 1; outer <= dataStore.length-1; ++outer) {
		temp = dataStore[outer];
		inner = outer;
		
		while (inner > 0 && (dataStore[inner-1] >= temp)) {
			dataStore[inner] = dataStore[inner-1];
			--inner; 
		}

		dataStore[inner] = temp; 
	}
}


dataStore = [4,3,7,6,5,4,7,8,1,2,4,3,2]

insertionSort()

console.log( dataStore )
