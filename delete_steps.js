var seleniumWebdriver = require('selenium-Webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, And, Then}) {
Given('I am logged into the DevOps Backbone Initiative-Website', function (){
this.driver.get("https://devopscoc.w3ibm.mybluemix.net/");
this.driver.findElement({name: "username"}).sendKeys("mmustermann@de.ibm.com");
this.driver.findElement({name: "password"}).sendKeys("password");
this.driver.findElement({id: "btn_signin"}).click();
var condition = seleniumWebdriver.until.titleContains("DevOps Backbone Initiative");
return this.driver.wait(condition.fn, 10000);
});

When('I click the "Delete"-Button', function (){
return this.driver.findElement({id:"delete"}).then(function(element){
return element.click();
});
});
Then('I should see the Confirmation', function(){
var condition = this.driver.until.titleContains("Delete Confirmation Page");
return this.driver.wait(condition.fn, 10000);
});
});
