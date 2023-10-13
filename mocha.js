const { add, invertResult } = require('./app');
const assert = require('assert');

describe('Addition', () => {
    it('should add two numbers correctly', () => {
        assert.strictEqual(add(2, 3), 5);
    });
});

describe('Inversion', () => {
    it('should invert the result correctly', () => {
        assert.strictEqual(invertResult(5), -5);
    });
});
