var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var array = [1];
var element = 'foo';
 
function addElementToBeginningOfArray(array, element){
 var addElement = [element];
 addElement = addElement.concat(array);
 return (addElement);
}
 
function destructivelyAddElementToBeginningOfArray(array, element){
 array.unshift(element);
 return (array);
}

function addElementToEndOfArray(array, element){
  var addElementEnd = [element];
  addElementEnd = array.concat(addElementEnd);
  return (addElementEnd);
}
 
function destructivelyAddElementToEndOfArray(array, element){
 array.push(element);
 return (array);
}

function accessElementInArray(array, index){
  return array[2];
}

function removeElementFromBeginningOfArray(array, element) {
  var arraySlice = array.slice(1);
  return (arraySlice);
}

function destructivelyRemoveElementFromBeginningOfArray(array, element) {
  array.shift();
  return (array);
}

function removeElementFromEndOfArray(array, element) {
  sliceArray = array.slice(2);
  return (array);
}

function destructivelyRemoveElementFromEndOfArray(array, element){
  array.pop();
  return (array);
}
