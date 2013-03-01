module.exports = convert

var through = require('through')

function convert(target_type, how, add) {
  how = how || function(input, idx) { return input[idx] }
  add = add || function(input) { return input }

  return through(conv)

  function conv(chunk) {
    var out = new target_type(chunk.length)
    for(var i = 0, len = chunk.length; i < len; ++i) {
      out[i] = how(chunk, i)
    }
    out = add(out)
    this.queue(out)
  }
}
