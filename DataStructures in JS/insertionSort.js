var _ = require('lodash')


function swap(a,b){
	var temp = a
	a = b
	b = temp

	return [a,b]
}

function insertionSort(arr) {
	
	// shift your index forward
	for (var i = 1; i < arr.length; i++) {
		
		// keep swapping the elements if smaller down to the beggening of the arry
		for(var j=i; j>0 ; j--){
			if (arr[j-1] > arr[j]) {
				[ arr[j] , arr[j-1] ] = swap(arr[j] , arr[j-1])
			}

		}
		
	}

	return arr

}



var randomList = []
for(i of _.range(1,10)) randomList.push(_.random(1,10))

console.log(randomList)

console.log( insertionSort(randomList) )