function checkIfBalanced (str){

	var opening = [ '(' , '[' ]
	var closing = [ ')' , ']' ]
	var stack = []

	for(var i in str){

			
		if(opening.indexOf(str[i]) > -1){
			console.log('pushing: ',str[i])
			stack.push(str[i])
		} else if(closing.indexOf(str[i]) > -1){
			console.log("popping: ", stack.pop() )
		}
	}

	console.log(stack)

	if( stack.length !=0 ){ 
		return console.log("unbalance")
	}else{
		 return console.log("balanced")
	}

}

checkIfBalanced(process.argv[2])

//checkIfBalanced("1+[3*4]-(3-6")
