const assertEquals = require('./assert-equals')

describe('assertEquals', () => {
  describe('throws a specific error when', () => {
    it('given insufficient arguments', () => {
      expect(() => assertEquals()).toThrow('missing');
      expect(() => assertEquals(1)).toThrow('missing');
    })
    it('given unsupported arguments (non-primitives excl. simple arrays)', () => {
      expect(() => assertEquals({ a: 1 }, 1)).toThrow('unsupported');
      expect(() => assertEquals({ a: 1 }, { b: 2 })).toThrow('unsupported');
      expect(() => assertEquals([1, { a: 1 }], 3)).toThrow('unsupported');
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
  })

  describe('throws an error when expected and actual are different:', () => {
    it('types (with a type message)', () => {
      expect(() => assertEquals(1, 'hello')).toThrow('Expected type');
    })
    it('types (for arrays and nulls)', () => {
      expect(() => assertEquals([1, 2, 3], null)).toThrow('Expected type');
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
  })

  describe('if arrays are compared', () => {
    it('throws a specific error re length', () => {
      expect(() => assertEquals([1, 2, 3], ['a', 'b', 'c', 'd'])).toThrow('length')
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