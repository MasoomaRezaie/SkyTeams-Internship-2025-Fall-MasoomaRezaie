const reverse = require('./question-2');
test('reverses "Masooma Rezaie" to "eiazeR amoosaM"', () => {
    expect(reverse('Masooma Rezaie')).toBe('eiazeR amoosaM');
});

test('Must not reverses 1234 to 4321', () => {
    expect(reverse(1234)).not.toBe(4321);
});