/// Works for sorted arrays only

var _ = require('lodash')

function pair_equal_sum(arr,RS) {
	
	var i= 0,
		j = arr.length -1

	while (i !=j ) {
		if ( arr[i]+arr[j] > RS ) {
			j--
		} else if( arr[i]+arr[j] < RS ){
			i++
		} else {
			console.log('Found Pair: ',arr[i],arr[j])
			return
		}
	}

}

var array = _.range(3,10)
console.log(array)

pair_equal_sum(array,8)