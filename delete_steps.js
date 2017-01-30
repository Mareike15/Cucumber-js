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
      return this.driver.wait(condition, 10000);
      });
    });
  When('I click on the “Delete”-button', function (){
    return this.driver.findElement({id:"delete"}).then(function(element){
      return element.click();
      });
    });
  When('I click the button "OK"',function(){
    return this.driver.findElement({id:"ok"}).then(function(element){
      return element.click();
      });
    });
  Then('Then I should see {arg1:stringInDoubleQuotes}-Message', function (arg1) {
    var condition = seleniumWebdriver.until.findElement(arg1); //--> nicht titleContains sondern TEXT soll gesucht werden(das Wort "Bye")
    return this.driver.wait(condition, 10000);
    });
});
