const assertEquals = require('./assert-equals')

describe('assertEquals', () => {
  describe('throws a specific error when', () => {
    it('given insufficient arguments', () => {
      expect(() => assertEquals()).toThrow('missing');
      expect(() => assertEquals(1)).toThrow('missing');
    })
    it('given unsupported arguments (functions, nested arrays and objects)', () => {
      expect(() => assertEquals(4, () => undefined)).toThrow('unsupported');
    })
  })

  describe('returns without an error when expected and actual are the same:', () => {
    it('number', () => {
      expect(() => assertEquals(3, 3)).not.toThrow()
    })
    it('string', () => {
      expect(() => assertEquals('abc', 'abc')).not.toThrow()
    })
    it('boolean', () => {
      expect(() => assertEquals(false, false)).not.toThrow()
    })
    it('undefined or null', () => {
      expect(() => assertEquals(null, null)).not.toThrow()
      expect(() => assertEquals(undefined, undefined)).not.toThrow()
    })
    it('simple array', () => {
      expect(() => assertEquals([1, 2, 3], [1, 2, 3])).not.toThrow()
    })
    it('simple object', () => {
      expect(() => assertEquals({ a: 1, b: 2 }, { a: 1, b: 2 })).not.toThrow();
    })
    it('nested object (or array)', () => {
      expect(() => assertEquals(
        {
          a: 1,
          b: {
            c: 3
          }
        },
        {
          a: 1,
          b: {
            c: 3
          }
        })).not.toThrow();
    })
    expect(() => assertEquals({ a: 1, b: [2] }, { a: 1, b: [2] })).not.toThrow();
  })

  describe('throws an error when expected and actual are different:', () => {
    it('types where one is primitive type (with a type message)', () => {
      expect(() => assertEquals(1, 'hello')).toThrow('Expected type');
      expect(() => assertEquals(1, [1])).toThrow('Expected type');
    })
    it('types (for objects, arrays and nulls)', () => {
      expect(() => assertEquals([1, 2, 3], null)).toThrow('Expected type');
      expect(() => assertEquals([1, 2, 3], { a: 1 })).toThrow('Expected type');
      expect(() => assertEquals(null, { a: 1 })).toThrow('Expected type');
    })
    it('numbers', () => {
      expect(() => assertEquals(3, 11)).toThrow()
    })
    it('strings', () => {
      expect(() => assertEquals('abc', 'xyz')).toThrow()
    })
    it('booleans', () => {
      expect(() => assertEquals(true, false)).toThrow()
    })
    it('simple arrays', () => {
      expect(() => assertEquals([1, 2, 3], [1, 2, 3, 4])).toThrow()
      expect(() => assertEquals([1, 2, 3], ['a', 'b', 'c'])).toThrow()
    })
    it('simple object', () => {
      expect(() => assertEquals({ a: 1, b: 2 }, { a: 1, b: 3 })).toThrow();
      expect(() => assertEquals({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 })).toThrow();
    })
    it('nested object (or array)', () => {
      expect(() => assertEquals(
        {
          a: 1,
          b: {
            c: 3
          }
        },
        {
          a: 1,
          b: {
            c: 4
          }
        })).toThrow();
    })
    expect(() => assertEquals({ a: 1, b: [2] }, { a: 1, b: [3] })).toThrow();
    expect(() => assertEquals({ a: 1, b: { c: [3] } }, { a: 1, b: {c : [4] }})).toThrow();
  })

  describe('if arrays or objects are compared', () => {
    it('throws a specific error re length of arrays', () => {
      expect(() => assertEquals([1, 2, 3], ['a', 'b', 'c', 'd'])).toThrow('length')
    })
    it('throws a specific error re number of properties of objects', () => {
      expect(() => assertEquals({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 })).toThrow('properties');
    })
  })

  describe('if null and undefined are compared', () => {
    it('throws a specific error', () => {
      expect(() => assertEquals(null, undefined)).toThrow('null')
      expect(() => assertEquals(null, undefined)).toThrow('undefined')
      expect(() => assertEquals(undefined, null)).toThrow('null')
      expect(() => assertEquals(undefined, null)).toThrow('undefined')
    })
  })
})
