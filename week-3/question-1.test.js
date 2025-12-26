const countVowels = require('./question-1');
test('count vowels in "SkyTeams Internship" and return 5', () => {
    expect(countVowels('SkyTeams Internship')).toBe(5);
})