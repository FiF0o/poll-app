let I;

module.exports = {

  _init() {
    I = actor();
  },
  
  openHomepage() {
    I.amOnPage("http://localhost:3000");
  }

  // insert your locators and methods here
};
