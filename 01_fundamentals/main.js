//Javascript the fundamentals

// is a comment

/*
  big comment
  multiline
*/

// Basic MATH
// ==========

var a = 1
var b = 2
var c = a + b   // c = 1 + 2
console.log("1 + 2 = " + c)  // 3 to screen

/* 
  + - * /

  102 % 10 // 2

  Math.random()
  Math.sqrt(16)
*/

var total = 0;

for (var count = 0; count < 10; count = count + 1) 
  {
    total += count;    
    console.log("Counter is at " + count);
  }

console.log("Total is " + total);

// Basic STRINGS
// =============
var text = "This is some text "
var somemore = "and some more"
console.log(text + somemore);
console.log(text[0] + text[1] + text[2] + text[3]); //This

// Data Array/list

var list = []   //array
list.push("and add")
list.push("more")
var anotherlist = [0, 1, 2, "you", "can", "mix", { sub: "and nest" }, 3 ]
console.log(anotherlist[6].sub)
anotherlist.push(list.pop()); //pops off last in list and pushes it onto another
console.log(anotherlist[anotherlist.length-1]) //show last item, start at 0

// Data object

var myobject = {}
var nyan = {
  type: "cat",
  name: "nyan",
  colors: ["pink", "green", "blue", "orange", "purple"]
}

console.log(nyan.type);

for (var col in nyan.colors) 
  { 
    console.log(nyan.colors[col]);    
  }

// Functions

var blah = 0;

var blahdo = function() {
  blah = blah + 1;  
}

console.log(blah);

//pass data into functions

var blahanother = function(a, b, c) {
  return blah + a * b / c;
}

console.log(blahanother(2, 5, 2.1));

//
//   Data to string
//    so you can transfer complex data structures over normal text means

console.log(nyan)
console.log(JSON.stringify(nyan));

// String to data
var nyantext = JSON.stringify(nyan)
var newnyan = JSON.parse(nyantext);
console.log(newnyan.type)



