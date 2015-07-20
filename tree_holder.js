/*1. Create a constructor function called Tree. It should take 4 arguments that correspond to attributes on the objects it creates. 
Two attributes should be 'name' and 'leaf shape'. Pick the other two. 

2. Create 4 tree objects using your Tree function.

3. Put those objects into an array called tree_array. 

4. for each tree in tree_array, add a block element to the tree-holder div that displays the tree's attributes*/

var Tree = function (name, leafShape, zone, maxHeight) {
	this.name = name;
	this.leafShape = leafShape;
	this.zone = zone;
	this.maxHeight = maxHeight;
}
console.log(Tree);

var arborvitae = new Tree ("Arborvitae", "scale-like", "eastern", "60ft");
var crape_myrtle = new Tree ("Crape Myrtle", "flowers", "everywhere", "25ft");
var alberta_spruce = new Tree ("Dwarf Alberta Spruce", "green needles", "eastern", "12ft");
var crab_apple = new Tree ("Crab Apple", "purplish-red", "everywhere", "25ft");



var tree_array = [];
tree_array.push(arborvitae,crape_myrtle,alberta_spruce,crab_apple);

console.log(tree_array);




var treeHolder = document.getElementById("tree-holder");

	for (i=1;i<tree_array.length;i++){
		treeHolder.innerHTML +=
		"<div><table>" +
		"<tr><th>Name:</th><td>" + tree_array[i].name + "</td></tr>" +
		"<tr><th>Leaf Shape:</th><td>" + tree_array[i].leafShape + "</td></tr>" +
		"<tr><th>Zone:</th><td>" + tree_array[i].zone + "</td></tr>" +
		"<tr><th>Max Height:</th><td>" + tree_array[i].maxHeight + "</td></tr>" +
		 "</table></div>"

		}




// treeHolder.innerHTML = JSON.stringify(tree_array);




