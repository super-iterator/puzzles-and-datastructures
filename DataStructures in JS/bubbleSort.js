var _ = require('lodash')


function bubbleSort(arr){

	for (var i = 0; i < arr.length-1; i++) {
		for (var j = 0; j < arr.length-i-1; j++) {
			if( arr[j] > arr[j+1] ){
				 [ arr[j] , arr[j+1] ] = swap( arr[j] , arr[j+1] )
			}
		}
		
	}

	return arr

}

function swap(a,b){
	var temp = a
	a = b
	b = temp

	return [a,b]
}



var randomList = []
for(i of _.range(1,10)) randomList.push(_.random(1,10))

console.log(randomList)

console.log( bubbleSort(randomList) )