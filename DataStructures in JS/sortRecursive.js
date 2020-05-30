function sort(array, start, end, counter, index){

	// start = 1, counter=1, index=1	

	if(counter >= index){

		if( array[counter] > array[counter-1]){
			var temp = array[counter]
			array[counter] = array[counter-1]
			array[counter-1] = temp

			sort(array, start, end, counter--, index)

		}

	}

	if(++index <= end){
		counter = index
		sort(array, start, end, counter, index)	
	}else{
		return array
	}


}



sort( [3,2,4,6,4,1,3,2] , 1 , 7 , 1 , 1 )
