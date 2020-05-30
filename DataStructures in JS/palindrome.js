function log(line){
	for(var iterable in arguments) console.log(arguments[iterable])
}

function pal(a){

	for(var i=0; i<a.length/2; ++i){
		if(a[i] != a[a.length-1-i] ) return log(false)
		else {
			return log(true)
		}
 	}
}

pal(process.argv[2])
