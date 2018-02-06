'use strict'

const assert = require('assert')
const partition = require('.')

describe('partitionIterable()', function () {
  it('should partition values by the result of a function', function () {
    assert.strictEqual(JSON.stringify(partition([1, 2, 3, 4, 5], n => n % 2 === 0)), JSON.stringify([[2, 4], [1, 3, 5]]))
  })

  it('should partition values by inclusion in an array', function () {
    assert.strictEqual(JSON.stringify(partition([1, 2, 3, 4, 5], [4, 5])), JSON.stringify([[4, 5], [1, 2, 3]]))
  })

  it('should partition values by equality with another value', function () {
    assert.strictEqual(JSON.stringify(partition([1, 2, 3, 4, 5], 3)), JSON.stringify([[3], [1, 2, 4, 5]]))
  })

  it('should partition values by truthiness if no filter is given', function () {
    assert.strictEqual(JSON.stringify(partition([0, 1, 2])), JSON.stringify([[1, 2], [0]]))
  })
})
