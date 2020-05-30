var string = "abcde"
var searchTerm = "ce"

var result = []

var array = string.split('')

array.filter( (item)=> {

        if( !(searchTerm.indexOf(item) > -1) ){
                result.push(item)
        }
    }


)


var final = result.join(',')

console.log(final);

//
// for (var i = 0; i < string.length; i++) {
//     string[i]
// }
