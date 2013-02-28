var test = require('tape')
  , conv = require('./index')
  , Buffer = require('buffer').Buffer

test('from buffer to typedarray and back', function(assert) {
  var stream = conv(Uint8Array)
  
  buf = new Buffer(1024)
  for(var i = 0, len = 1024; i < len; ++i) { 
    buf[i] = (0xFF * Math.random())|0
  }
  
  stream.on('data', function(ta) {
    assert.equal(ta.length, buf.length)
    for(var i = 0, len = 1024; i < len; ++i) {
      assert.equal(ta[i], buf[i])
    }
    assert.end() 
  })

  stream.write(buf) 
})

