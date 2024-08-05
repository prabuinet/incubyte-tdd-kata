const add = require('./calculator')

test('should return 0 for empty string', () => {
   expect(add('')).toBe(0); 
});

test('should return 0 for anything other than a string', () => {
    expect(add(null)).toBe(0); 
    expect(add(undefined)).toBe(0); 
    expect(add({})).toBe(0); 
});

