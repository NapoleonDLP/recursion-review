// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here




  //check first character
  //if first char is {
  //result = {}
  //json = json - firstchar and -lastchard// '["one", "two"]'.slice(1, json.length-1) --> '"one", "two"'.split(', ') --> ['"one":value', '"two":value']
  //loop through each value in array and then slit at (':') ---> ['"one"', 'value']
  //result[parseJSON(array[x][0])] = parseJSON(array[x][1])


  //else if first char is [
  //result = []
  //json = json - firstchar and -lastchard// '["one", "two"]'.slice(1, json.length-1) --> '"one", "two"'.split(', ') --> ["one", "two"]

  //else if first char is "
  //return json.slice(1, json.length -1)

  //else if Number(json) !== NaN to check if number
  //return Number(json)

  //else if json === "true" or "false"
  //return !0 or !!0;
















};
