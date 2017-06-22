
var inquirer = require('inquirer');
var clozeCard = require('./ClozeCard');
var basicCard = require('./BasicCard');

var login = function(){
var createBasic = {
		type: 'input',
		name: 'size',
		message: 'Which game you like to play?',
		default: 'Basic OR Cloze '
	}; 
	
inquirer.prompt(createBasic).then(function(response){
 	console.log(response.size);
  	if(response.size === 'Basic'){
  		console.log('You select Basic Card game');
  		var one = new basicCard();
  	}
  	else{
  		console.log('You select Cloze Card game');
  		var two = new clozeCard();
  	}
 });   

};  
login(); 
module.exports = login;