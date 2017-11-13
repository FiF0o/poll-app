
Feature('Hello');

Before((Homepage) => {
    Homepage.openHomepage();
  });

Scenario('test something', (I) => {
    // I.amOnPage('/');
    I.see('Welcome to React');
});
