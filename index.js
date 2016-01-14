/*!
 * prepend-http-extra <https://github.com/tunnckoCore/prepend-http-extra>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var prepend = require('prepend-http')

module.exports = function prependHttpExtra (url) {
  url = prepend(url)
  if (/^\/\//.test(url)) {
    return 'http:' + url
  }
  return url
}
