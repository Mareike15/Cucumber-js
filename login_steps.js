var seleniumWebdriver = require('selenium-Webdriver');
var {defineSupportCode} = require('cucumber');


    defineSupportCode(function({Given, When, Then}) {
      Given('As a IBM Employee I am on the Website "DevOps Backbone Initiative"', function(){
        return this.driver.get("https://devopscoc.w3ibm.mybluemix.net/");
        });
          When('I fill in my User ID', function () {
          return this.driver.findElement({name: "username"}).then(function(element) {
            return element.sendKeys("mmuus@de.ibm.com");
          });
        });

          When('I fill in my password', function () {
          return this.driver.findElement({name: "password"}).then(function(element) {
            return element.sendKeys("password");
          });
        });

        When('I click on “Sign In”', function () {
              return this.driver.findElement({id: "btn_signin"}).then(function(element) {
            return element.click();
          });
        });

        Then('I should see my Profile on {arg1:stringInDoubleQuotes}', function (arg1) {
          var condition = seleniumWebdriver.until.titleContains(arg1);
          return this.driver.wait(condition, 10000);
        });
     When('I fill in a wrong password', function () {
        return this.driver.findElement({name: "password"}).then(function(element) {
          return element.sendKeys("XXXXXXXX");
          });
        });
        Then('I should see an Error Message', function () {
          var condition = seleniumWebdriver.until.titleContains("IBM w3ID");
          return this.driver.wait(condition, 10000);
        });
          });
