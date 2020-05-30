var _ = require('lodash')

// largest contiguous sub array
function largest_sum(arr) {
	

	var maxIndex = 0
	var size = 0
	var maxSize = 0
	var maxSum = 0
	
	var sum 

	for (var i = 0; i < arr.length; i++) {
		
		sum = 0
		for (var j = i; j < arr.length; j++) {
			
			var prevSum = sum

			sum+= arr[j]

			// check if the current sum increaes
			if (sum > prevSum) {
				size = j-i+1

				// register the highest sum
				if( maxSum < sum ){
					maxSum = sum
					maxIndex = i

					// console.log(maxIndex,size , maxSum)
				}

				
			}
		}
	}

	console.log(maxIndex,size , maxSum)
	console.log("Max Contiguous Sum: ", maxSum)

}

var array = [-2,-3,4,-1,-2,1,5,-3]

var array = []
var range = 100

for(i in _.range(range)){
	array[i] = _.random(-100,range)
}

largest_sum(array)