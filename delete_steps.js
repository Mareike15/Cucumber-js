var seleniumWebdriver = require('selenium-Webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, And, Then}) {
  Given('As a IBM Employee visit “DevOps Backbone Initiative”-Website', function (){
    return this.driver.get("https://devopscoc.w3ibm.mybluemix.net/")
    });
  Given('I insert my UserID', function(){
    return this.driver.findElement({name:"username"}).then(function(element){
      return element.sendKeys("mmuus@de.ibm.com");
      });
    });
  Given('I insert my password', function(){
    return this.driver.findElement({name:"password"}).then(function(element){
      return element.sendKeys("password");
      });
    });
  Given('I click on "Sign In"-Button', function(){
    return this.driver.findElement({id: "btn_signin"}).then(function(element) {
      return element.click();
      var condition = seleniumWebdriver.until.titleContains("DevOps Backbone Initiative");
      return this.driver.wait(condition.fn, 10000);
      });
    });
  When('I click the "Delete"-Button', function (){
    return this.driver.findElement({name:"delete"}).then(function(element){
      return element.click();
      });
    });
  When('I click the "OK"-Button',function(){
    return this.driver.findElement({name:"ok"}).then(function(element){
      return element.click();
      });
    });
  Then('I should see {arg2:stringInDoubleQuotes}-Message', function (arg2) {
    var xpath = "//*[contains(text(),'" + arg2 + "')]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition.fn, 10000);

  });
    });
