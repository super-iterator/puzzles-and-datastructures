function treeInsert(array,element) {
    var length = array.length
    var mid = Math.floor(array.length / 2) -1

    while (length == array.length) {
        if ( array[mid-1] <= element && element <= array[mid]  ) { /// between 2 elements
            array.splice(mid,0,element)
            break;
        }
        else if (element <= array[mid] && mid === 0 ) {           /// smaller than the first element
            array.splice(mid,0,element)
        }
        else if (element > array[mid]) {
            mid++
        }
        else if (element < array[mid]) {
            mid--
        }
        else {                                                    /// larger than the last element
            array.push(element)
        }
    }

    console.log(array);

}

var initial_list = [5,8]
var random_list = []


for(var i=0; i <10; i++){
    random_list.push( Math.floor(Math.random()*100) )
}

console.log(random_list);

for(var i in random_list){
    treeInsert(initial_list , random_list[i])
}
