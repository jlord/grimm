var switches = require('./switches.json')
var sampleWord = "father"

function grimm (word) {
  var sortedSwitches = switches.sort(function(a, b) {
    return  b[0].length - a[0].length
  })

  if (word.length === 0) return ""

  for (var i in sortedSwitches) {
    candidate = sortedSwitches[i]
    if (candidate[0] === word.slice(0, candidate[0].length)) {
      return candidate[1] + grimm(word.slice(candidate[0].length))
    }
  }
  return word.slice(0,1) + grimm(word.slice(1))
}

function reverseGrimm (word) {
  var sortedSwitches = switches.sort(function(a, b) {
    return b[1].length - [1].length
  })

  if (word.length === 0) return ""

  for (var i in sortedSwitches) {
    candidate = sortedSwitches[i]
    if (candidate[1] === word.slice(0, candidate[1].length)) {
      return candidate[0] + reverseGrimm(word.slice(candidate[1].length))
    }
  }
  return word.slice(0,1) + reverseGrimm(word.slice(1))
}

module.exports.grimm = grimm
module.exports.reverseGrimm = reverseGrimm
