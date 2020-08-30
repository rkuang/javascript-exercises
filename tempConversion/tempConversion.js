const ftoc = function(f) {
  let c = 5/9 * (f - 32)
  return Math.round(c*10)/10;
}

const ctof = function(c) {
  let f = 9/5 * c + 32
  return Math.round(f*10)/10;
}

module.exports = {
  ftoc,
  ctof
}
