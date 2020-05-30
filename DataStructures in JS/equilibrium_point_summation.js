function equilibrium_point_summation(arr){

	console.log('original array: ',arr)

	var pivot = [1,2,3,4]

	for(var i of pivot){

		var left = arr.slice(0,i)
		var right = arr.slice(i+1)
		
		console.log('left: ',left)
		console.log('right: ',right)
		
		if( sum(left) == sum(right) ){
			console.log('equilibrium point: ' + i)
		}

	}

}

function sum(list){

	if(!list.length){
		return 0
	}

	return list.reduce( (previous, current) =>{
		return previous + current
	} )

}


 console.log( equilibrium_point_summation([ -1,3,-4,5,1,-6,2,1 ]) )
// console.log(sum([ -1,3,-4,5,1,-6,2,1 ]))