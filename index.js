var reverseSwitches = require('./reverseSwitches.json')
var switches = require('./switches.json')
var word = "father ship"

// console.log(reverseGrimm(word))
// console.log(grimm("pater"))

function reverseGrimm (word) {
  if (word.length === 0) return ""

  for (var candidate in reverseSwitches) {
    if (candidate === word.slice(0, candidate.length)) {
      return reverseSwitches[candidate] + reverseGrimm(word.slice(candidate.length))
    }
  }
  return word.slice(0,1) + reverseGrimm(word.slice(1))
}

function grimm (word) {
  if (word.length === 0) return ""

  for (var candidate in switches) {
    if (candidate === word.slice(0, candidate.length)) {
      return switches[candidate] + grimm(word.slice(candidate.length))
    }
  }
  return word.slice(0,1) + grimm(word.slice(1))
}

module.exports.grimm = grimm
module.exports.reverseGrimm = reverseGrimm
