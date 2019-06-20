function takeANumber(array, name) {
  array.push(name)
  return `Welcome, ${name}. You are number ${array.length} in line.`
}

function nowServing (array) {
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${array.shift()}.` 
      
  }
}

function currentLine(array) {
  var line = [];

function currentLine(line) {
  var currentLineArray
  var i;
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else { for (let i = 0; i < line.length; i++) {
    currentLineArray[i] = `${1 + i}. ${line[i]}`
    return `The line is currently: ${currentLineArray}`
  }
  }