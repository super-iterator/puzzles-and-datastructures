/// Not working

function swap(a,b){
	var temp = a
	a = b
	b = temp

	return [a,b]
}

// i: start index, n: total number of array
function permutations( arr , i , n  ){


	if( i == n){
		return console.log(arr)
	} else {
		for (var j = 0; j < n; j++) {

			 arr[j] , arr[i]  = swap( arr[j] , arr[i] )	
			permutations( arr, i+1 ,n )			
			 arr[j] , arr[i]  = swap( arr[j] , arr[i] )	// backtrack
			
		}
		
	}

}



permutations( [1,2,3,4] , 0 , 3 )