var {reverseGrimm, grimm} = require('./index.js')

var result = grimm("pater")
if (result != "father") {
  console.log("FAIL", result)
}

var reverseResult = reverseGrimm("father")
if (reverseResult != "pater") {
  console.log("FAIL", reverseResult)
}
