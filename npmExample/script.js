//In this we can learn the installation and implementation of any node package using npm
//head to npmjs.com and search for package you would like to install
//usage guide is give on the site
//In this case we are installing figlet


// npm i figlet
var figlet = require("figlet");

figlet("HAHAHA", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});