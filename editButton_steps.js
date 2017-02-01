var seleniumWebdriver = require('selenium-Webdriver');
var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
  Given('I am logged into the DevOps Backbone Initiative-Website', function (){
    this.driver.get("https://devopscoc.w3ibm.mybluemix.net/");
    this.driver.findElement({name: "username"}).sendKeys("mmustermann@de.ibm.com");
    this.driver.findElement({name: "password"}).sendKeys("password");
    this.driver.findElement({id: "btn_signin"}).click();
    var condition = seleniumWebdriver.until.titleContains("DevOps Backbone Initiative");
     return this.driver.wait(condition.fn, 10000);
    });

    When('I click on "Edit"-Button', function(){
        return this.driver.findElement({id:"edittop"}).then(function(element){
        return element.click();
        });
      });


    Then('I should edit my Skills', function (){
      return this.driver.findElement({id:"savetop"});

      });
  });
