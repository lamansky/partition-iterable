# partition-iterable

Divides iterated values into those that match a filter and those that don’t.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i partition-iterable
```

## API

The module exports a single function.

### Parameters

1. Bindable: `iter` (iterable): The iterable whose values should be partitioned.
2. Optional: `test` (any): A Function, an Array, or another value. Each iterated value from `iter` is tested in a manner that depends on `test`’s type:
    * If a Function: Does `test` return true when the value is passed to it?
    * If an Array: Is the value included in `test`?
    * If omitted or `undefined`: Is the value truthy?
    * Otherwise: Does the value equal `test`?

### Return Value

A two-element Array:

1. An Array of iterated values that passed the test.
2. An Array of those that did not.

## Example

```javascript
const partition = require('partition-iterable')

const isEven = n => n % 2 === 0

const [even, odd] = partition([1, 2, 3, 4, 5], isEven)

even // [2, 4]
odd // [1, 3, 5]

// Supports the bind operator
[1, 2, 3, 4, 5]::partition(isEven) // [[2, 4], [1, 3, 5]]
```

## Related

* [filter-iter](https://github.com/lamansky/filter-iter): Filters an iterable object so that it only yields values which pass a test function.
* [reduce-iterable](https://github.com/lamansky/reduce-iterable): Applies a function to iterated values to reduce them to a single value.
* [unique-iterable](https://github.com/lamansky/unique-iterable): Filters an iterable object so it doesn’t yield the same value more than once.
* [unique-iterable-by](https://github.com/lamansky/unique-iterable-by): Filters yielded values by testing uniqueness with an index, key, or callback.
