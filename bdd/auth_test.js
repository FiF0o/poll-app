Feature('Auth');

Before((Homepage) => {
  Homepage.openHomepage();
});

//body.id=yDmH0d
Scenario('login', (I) => {
  console.log(I)
  I.click('#sign-in');
  I.see('...Loading...');
  // I.switchToNextTab()
  // I.seeInPopup('Sign in')
  I.changeTab();
  I.wait(10)
  I.see('Sign in');
  I.fillField('#identifierId', 'User');

  // I.waitUntilExists('#initialView');
  // I.switchTo().alert();
  // I.openNewTab('https://accounts.google.com/signin/oauth/identifier?client_id=1068919900000-hrelo6phto746ao0eo6ddhasufa4l22a.apps.googleusercontent.com&as=1b110e37e443927&destination=https%3A%2F%2Fpoll-app-edc28.firebaseapp.com&approval_state=!ChRkejlVa25kTXlWbng3cERhUjNPehIfZy1fSGpoNDhtdmNSWUFOYVJfLXV5LTNIVGs5c19SVQ%E2%88%99AHw7d_cAAAAAWhNvcAvS1QiYWQVYL8Q77DVDn2WAQ1Q1&passive=1209600&oauth=1&sarp=1&scc=1&xsrfsig=AHgIfE8y6mrfXtzG6Zsvtt4DjxcsUg7ZCA&flowName=GeneralOAuthFlow')
  // I.changeTab(2);
  // I.wait(10000);
  // I.acceptPopup();
  // I.waitForVisible('#yDmH0d', 5);
  // I.seeElement('#initialView');
  // within('#initialView', () => {
  //   I.fillField('#identifierId', 'User');
    
  // })
  // within('h1', () => {
    // I.see('Sign in');
  // })
  // waits for pop-up to be visible - #initialView
  // I.seeInPopup('Sign in');   // h1 Sign in
  // I.wait(12);
  // fill out form
  //input #identifierId
  // input[type=password]
  // input=[#idvPin]
  // click next #identifierNext
  // I.acceptPopup();
  I.see('Sign out');
});

Scenario('logout', (I) => {
  I.see('Sign in');
  I.dontSee('jonathan Lazarini');  
  I.click('#sign-in');
  I.dontSee('Sign out');
});
