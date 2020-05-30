var _ = require('lodash')


function swap(a,b){
	var temp = a
	a = b
	b = temp

	return [a,b]
}

function selectionSort(arr) {
	
	// shift your index forward
	for (var i = 0; i < arr.length; i++) {
		
		// find the smallest element
		for(var j=i+1; j<arr.length-1 ; j++){
			if (arr[j] < arr[i]) {
				[ arr[i] , arr[j] ] = swap(arr[i] , arr[j])
			}

		}
		
	}

	return arr

}



var randomList = []
for(i of _.range(1,10)) randomList.push(_.random(1,10))

console.log(randomList)

console.log( selectionSort(randomList) )