var _ = require('lodash')

function quickSort(arr){

	n = arr.length

	if(n < 2) return arr

	var pivot = arr[n -1],
		right = [],
		left = []


	for (var i = 0; i < arr.length; i++) {
		
		if (arr[i] < pivot) {
			left.push(arr[i])
		} else if(arr[i] > pivot){
			right.push(arr[i])
		}
	}


	return quickSort(left).concat(pivot).concat(quickSort(right))
	
}

var randomList = []
for(i of _.range(1,100000)) randomList.push(_.random(1,100000))

console.log( quickSort(randomList) )