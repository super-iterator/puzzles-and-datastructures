var _ = require('lodash')

var arr = [ 2, 5, 3, 7, 11, 8, 10, 13, 6 ]

var arr = []
for(i in _.range(100)){
	arr[i] = _.random(100)
}

var LIS = [0]
LIS_LENGTH++


var finaLIST = []
for(i in _.range(arr.length)) finaLIST[i] = -1

// LIS[0] = arr[0]
// LIS[0] = 0

var LIS_LENGTH = 0

function b_search_and_replace(LIS,i) {
	
	var start = 0
	var end = LIS.length-1
	// var mid = 1 + Math.floor( (start + end)/2 )  // used to truncate floats

	var mid = 1

	while (end-start > 1) {
		
		mid = 1 + Math.floor( (start + end)/2 )

		if( arr[i] < arr[LIS[mid]] ){
			end = mid -1
		} else {
			start = mid 
		}
	}

	LIS[mid] = i

	// we replace the ceil element of the LIS array, so the current ceil element points to the previous LIS element
	// finaLIST[mid] = LIS[mid-1]
	finaLIST[i] = LIS[mid-1]
}

for (var i = 1; i < arr.length; i++) {


	// if smaller than the list of increasing sequnce array, add it as a first element
	// if( arr[i] < LIS[0] ){
	if( arr[i] < arr[0] ){
		
		// LIS[0] = arr[i]
		LIS[0] = i
	  
	  // if higher than the last and highest element in the LIS array, append it 	
	} else if( arr[i] > arr[ LIS[LIS.length-1] ] ){
		
		// append. The last element index of LIS is length-1, so, adding index of length, means appending
		// LIS[LIS.length] = arr[i]	
		LIS[LIS.length] = i	


		// each element refers to the one before
		// finaLIST[ LIS[LIS.length-1] ] = i
		// finaLIST[i+1] = i
		// finaLIST[i] = LIS[ i-1 ]
		finaLIST[i] = LIS[LIS.length-2]


		// increase the length of LIS by one
		LIS_LENGTH++

		

	} else{
		// binary search and replace, if within range
		b_search_and_replace(LIS,i)
	}

	// console.log(LIS)
	// console.log(LIS_LENGTH)
	// console.log('finaLIST: ',finaLIST)

	

}

/// Extracting the actual LIS elements
var index = LIS[LIS.length-1]
var outputArray = []

while(index >= 0){
	outputArray.push(arr[index])
	
	index = finaLIST[index]
}


// console.log('Original List: ', arr)
console.log('List of Increasing List Elements: ',outputArray.reverse())