var {reverseGrimm, grimm} = require('./index.js')


var reverseResult = reverseGrimm("father")
if (reverseResult != "pater") {
  console.log("FAIL")
}

var result = grimm("pater")
if (result != "father") {
  console.log("FAIL")
}
