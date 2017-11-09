Feature('Dummy test');

Scenario('test something', (I) => {
    I.amOnPage('http://simple-form-bootstrap.plataformatec.com.br/documentation');
    I.fillField('Email', 'hello@world.com');
    I.fillField('Password', '123456');
    I.checkOption('Active');
    I.checkOption('Male');
    I.click('Create User');
    I.see('User is valid');
    I.dontSeeInCurrentUrl('/documentation');
});
