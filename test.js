/*!
 * prepend-http-extra <https://github.com/tunnckoCore/prepend-http-extra>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var prepend = require('./index')

test('default', function (done) {
  test.strictEqual(prepend('https://foo.com'), 'https://foo.com')
  test.strictEqual(prepend('http://bar.com'), 'http://bar.com')
  test.strictEqual(prepend('baz.com'), 'http://baz.com')
  test.strictEqual(prepend('//qux.com'), 'http://qux.com')
  done()
})

test('save relative and absolute paths', function (done) {
  test.strictEqual(prepend('/abs.com'), '/abs.com')
  test.strictEqual(prepend('./rel.com'), './rel.com')
  test.strictEqual(prepend('../par.com'), '../par.com')
  done()
})
