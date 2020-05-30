var intervals = []

function interval_intersection(arr) {
	
	for (var i = 0; i < arr.length; i++) {
		
		for (var j = i; j < arr.length-1; j++) {

			var item = arr[j+1]
			var previous_item = arr[i]

			if ( item[0] > previous_item[0] && item[0] < previous_item[1] ) {
				intervals.push( [ previous_item[0] , item[1]] )
			} else if( previous_item[0] > item[0] && previous_item[0] < item[1] ){
				intervals.push( [ item[0] , previous_item[1]] )
			}

		}				
	}

	console.log('Intervals: ',intervals)
}

interval_intersection( [ [1,3] ,[2,4] , [5,7] , [6,8] ] )