Feature('GitHub');

Before((Smth) => {
  Smth.openGitHub();
});

Scenario('search', {timeout: 0}, (I) => {
  I.amOnPage('https://github.com/search');
  I.fillField('Search GitHub', 'fif0o');
  I.pressKey('Enter');
  within('h3', () => {
    I.see('FiF0o/fif0o.github.io', 'a');
  });
});
