const _ = require('lodash');

var number_of_operations = 0


function search(array,element) {

    /*
        A better approach rather than dividing the array, is to ajdust the
        indeces, so that we can return the position of the found item

        http://stackoverflow.com/a/19012919/829796
    */


    number_of_operations++

    var mid_pos = Math.floor(array.length/2)
    var N = array.length
    var mid_value = array[Math.floor(array.length/2)]

    if (N == 0) {
        return
    }

    if (element > mid_value) {
        search(array.slice(mid_pos,N) , element)
    }
    else if (element < mid_value) {
        search(array.slice(0,mid_pos) , element)
    } else if (element == mid_value) {
        console.log('element: ',element, ' position: ',mid_pos);
        return element
    } else {
        return 'not found'
    }
}

var long_list = _.range(1,1000)
search( long_list , process.argv[2] )

console.log('NUmber of operations: ',number_of_operations);
