//DS = [4,3,5,6,7,4,5,4,3,2,3,0,9,8,4,7,97,8,9,6,5,4,3,6]

DS = []

for(var i=0; i<10; i++){
	DS.push( Math.floor( Math.random() * 100 )  )
}

//// Sequnce of Gaps
var sequence = []


////// Dynamically computing the gaps //////////

var N = DS.length
var h = 1

while(h< N/3){
	h = h * 3 + 1
}


while(h >= 1){
	sequence.push( h  )
	console.log('pushed: ',h)
	h = (h-1)/3
}

console.log('sequence: ',sequence)

////////////////////////////////////////////////

//sequence = [46,20,9,4,1]
//sequence = [5,2,1]

function swap(first,second){

	if(second> first){
		return [first,second]
	}

	var temp = first
	first = second
	second = temp

	return [first,second]
}


/*
for( var g=0; g< sequence.length; g++){
	for(var i=sequence[g]; i< DS.length; i++){
		[ DS[i-sequence[g]] , DS[i] ] = swap(DS[i-sequence[g]],DS[i])
	}
}
*/


for( var g=0; g< sequence.length; g++){
	for(var i=sequence[g]; i< DS.length; i++){
		for(var j=i; j >= sequence[g] && DS[j] < DS[j-sequence[g]]; j-=sequence[g]){
			[ DS[i-sequence[g]] , DS[i] ] = swap(DS[i-sequence[g]],DS[i])
		}
	}
}

console.log(DS)
