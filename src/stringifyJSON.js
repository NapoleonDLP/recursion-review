// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  //check
  if(obj === undefined){
    return '';
  }
  //if number/boolean/null//undefined;
  if(typeof obj === 'number' || typeof obj === 'boolean' || obj === null){
    //return obj plus empty string
    return obj + '';
  }


  //else if string object is string
  if(typeof obj === 'string'){
    return '"' + obj + '"';

  }


  //if object is an array
  if(Array.isArray(obj)){
    var result = '[';
    //loop for each value in array
    for(var x = 0; x < obj.length; x++){
      // add stringifyJson(obj[x]) + ','
      result = result + stringifyJSON(obj[x]) + ',';
    }
    //replace last character with bracket ']'
    //result = [
    if(result.length > 1){
      result = result.slice(0,result.length-1);
    }
    result = result + ']';
    return result;
  }


  //if obj is an object
  if(typeof obj === 'object'){
    var result = '{';
    //loop through each proprety
    for(var key in obj){
      //check if obj[key] = undefined or if typeof obj[key] is fucntion
      if(obj[key] !== undefined && typeof obj[key] !== 'function'){
        //result + key + ':'+stringifyJSON(obj[key])+','
        result = result + stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      }
    }
     //replace last character with closed cuyrly bracket '}'
    if(result.length > 1){
      result = result.slice(0,result.length-1);
    }
    result = result + '}';
    return result;
  }














};
