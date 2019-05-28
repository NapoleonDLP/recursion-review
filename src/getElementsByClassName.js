// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  // your code here

  //input classname, node
  //output array of elemenets
  var results = [];

  //if node is undefined
  if(node === undefined){
    //then we set node to be the body of the document
    node = document.body;
  }

  if(node.className){
    //create array of classes names from element if exists
    var nodeClasses = node.className.split(' ');
    //check if node had given class name
    if(nodeClasses.includes(className)){
      //if it did then push element to results
      results.push(node);
    }
  }

  //check if the node has any children
  if(node.hasChildNodes()){
    for(var i = 0; i < node.childNodes.length; i++){
      //concat results with recursive call of getElementsByClassName on each child node
      results = results.concat(getElementsByClassName(className, node.childNodes[i]));

    }
  }

  return results;



};
