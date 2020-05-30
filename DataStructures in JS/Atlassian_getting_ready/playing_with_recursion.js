console.log("Direcotry Name",__dirname);
console.log("File Name",__filename);

function Node(data) {
	this.data = data;
	this.left = null;
	this.right = null;
}

// create nodes
var root = new Node('A');
var n1 = new Node('B');
var n2 = new Node('C');
var n3 = new Node('D');
var n4 = new Node('E');

// setup children
root.left = n1;
root.right = n2;
n1.left = n3;
n1.right = n4;


function pre_order(root, nodes) {
    nodes.push(root.data);
    if (root && root.left) {
        pre_order(root.left, nodes);   
    }
    if (root && root.right) {
        pre_order(root.right, nodes);  
    }
    return nodes;
}

console.log( pre_order(root, [])); // => [ A, B, D, E, C ]

x = 0
while (true) {
    x++;
    console.log(x);
    if(x > 0 && x <5){
        console.log("Bigger than zero");

        continue
    }

    break

}