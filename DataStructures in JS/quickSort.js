const _ = require('lodash');

function swap(left,right) {

    [left,right] = [right,left]

    return [left,right]
}


function order_around_pivot(array) {

    var pivot = Math.floor(array.length/2)
    var left = []
    var right = []

    for(var i=0; i<array.length && i != pivot; i++){
        if (array[i]<=pivot) {
            left.push(array[i])
        } else {
            right.push( array[i] )
        }
    }

    console.log(left,pivot,right);
}

function partition(array , left , right, pivot){

    var pivot = Math.floor(array.length/2)

    // left , right indexes and pivot
    typeof left  == undefined  ? 0                         : left
    typeof right == undefined ? array.length               : right
    typeof pivot == undefined ? Math.floor(array.length/2) : pivot

    while( left<right ){

        while ( array[left] < array[pivot] ){
            left++
        }

        while ( array[right] > array[pivot] ){
            right--
        }

        [ array[left],array[right] ]= swap(array[left],array[right])
    }

    return [left,array]

}


function sort(array,left,right) {
    // while(left.length < )

    if (left>=right) {
        return
    }

    var pivot = Math.floor( (left+right)/2 )

    var [index , arr]= partition(array , left , right , pivot )

    // console.log('pivot: ',pivot);
    console.log('left: ',left);
    console.log('right: ',right);
    console.log('arr: ',arr, 'pivot: ',pivot , ' index: ', index);




    sort(arr,left,index-1)
    sort(arr,index,right)

}


var random_list = []
for (var i = 0; i < 10; i++) {
    random_list.push(Math.floor(Math.random()*100))
}

console.log('original: ',random_list);


//order_around_pivot(random_list)
// partition(random_list)

var left = 0
var right = random_list.length - 1


sort(random_list, left, right)
