import romanToArabicNumberConvert from '../index';

test('expect Roman number correctly converted to arabic', () => {
    expect(romanToArabicNumberConvert('XVII')).toBe(17);
    expect(romanToArabicNumberConvert('XXXV')).toBe(35);
    expect(romanToArabicNumberConvert('CL')).toBe(150);
    expect(romanToArabicNumberConvert('IX')).toBe(9);
    expect(romanToArabicNumberConvert('XI')).toBe(11);
})

test('expect Roman number is valid', () => {
    expect(romanToArabicNumberConvert('A')).toBe('Not valid number');
    expect(romanToArabicNumberConvert('XIAIX')).toBe('Not valid number');
    expect(romanToArabicNumberConvert('VIIIII')).toBe('Not valid number');
    expect(romanToArabicNumberConvert('XXXVV')).toBe('Not valid number');
    expect(romanToArabicNumberConvert('IIX')).toBe('Not valid number');
})

test('expect Roman number is correctly converted from lower case', () => {
    expect(romanToArabicNumberConvert('xii')).toBe(12);
    expect(romanToArabicNumberConvert('clv')).toBe(155);
    expect(romanToArabicNumberConvert('iX')).toBe(9);
})
