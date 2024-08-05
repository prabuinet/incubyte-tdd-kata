const add = require('./calculator')

test('should return 0 for empty string', () => {
   expect(add('')).toBe(0); 
});

test('should return 0 for anything other than a string', () => {
    expect(add(null)).toBe(0); 
    expect(add(undefined)).toBe(0); 
    expect(add({})).toBe(0); 
});

test('comma separated should return sum', () => {
    expect(add("1")).toBe(1); 
    expect(add("1,2")).toBe(3); 
    expect(add("1,2,3,5")).toBe(11);
    expect(add("1 , 2 , 3 , , , ,   5 ")).toBe(11);
    expect(add(",,,")).toBe(0);
});


test('comma or newline separated should return sum', () => {
    expect(add("1")).toBe(1); 
    expect(add("1,2")).toBe(3); 
    expect(add("1\n2")).toBe(3); 
    expect(add("1,2\n3\n5")).toBe(11);
    expect(add("1 , 2 \n 3 , , , ,   5 ")).toBe(11);
    expect(add("\n\n\n\n,,")).toBe(0);
});

test('comma or newline separated should return sum', () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//,\n1;2")).toBe(3);
    expect(add("//\n\n1\n2\n3")).toBe(6);
    expect(add("//;\n1")).toBe(1);
    expect(add("//,\n\n\n\n,,")).toBe(0);
});

test('throw error if no delimiter given', () => {
    expect(() => add('//1,,2,2,3')).toThrow('delimiter not found');
});

