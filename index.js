'use strict'

const ffn = require('ffn')
const reduce = require('reduce-iterable')
const sbo = require('sbo')

module.exports = sbo((iter, test) => { test = ffn(test); return reduce(iter, (r, x) => { r[+!test(x)].push(x); return r }, [[], []]) })
