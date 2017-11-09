Feature('GitHub');

Before((Smth) => {
    // pages/Smth.js - https://github.com
  Smth.openGitHub();
});

Scenario('search', (I) => {
  I.amOnPage('https://github.com/search');
  I.fillField('Search GitHub', 'fif0o');
  I.pressKey('Enter');
  I.see('FiF0o/fif0o.github.io', 'a');
});