var seleniumWebdriver = require('selenium-Webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
Given('I am as a IBM Employee login on “DevOps Backbone Initiative”-Website', function (){
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
    });
  });
Given('I wait for {text:stringInDoubleQuotes}', function(text){ //Text: Your DevOps Experience
    var xpath = "//*[contains(text(),'" + text + "')]";
    var condition = seleniumWebdriver.until.elementLocated({xpath: xpath});
    return this.driver.wait(condition.fn, 10000); //Error --> Invalid Locator
    });
  When('I click on “Logout”-Button', function(){
    return this.driver.findElement({id:"logout"}).then(function(element){
      return element.click();
      });
    });
  Then('I should see the Confirmation {arg1:stringInDoubleQuotes}', function(arg1){
    var condition = seleniumWebdriver.until.titleContains("IBM W3 ID");
    return this.driver.wait(condition.fn, 100000);
    return this.driver.findElement({arg1});
    });
  });
