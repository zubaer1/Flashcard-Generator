var flashcard = require('./question.js');
var inquirer = require('inquirer');

var clozeCard = function(){

inquirer.prompt([
{	
	
	//var str = flashcard.allQuestion.Q1.question;
	type: 'input',
	name: 'size',
	message: (flashcard.allQuestion.Q1.question).replace("Which", "--------"),
	name: 'oneQ'
},
{
	type: 'input',
	message: flashcard.allQuestion.Q1.answer,
	name: 'oneA'
},
{
	type: 'input',
	name: 'size',
	message: (flashcard.allQuestion.Q2.question).replace("What", "--------"),
	name: 'oneQ'

},
{
	type: 'input',
	message: flashcard.allQuestion.Q2.answer,
	name: 'oneA'
},
{
	type: 'input',
	name: 'size',
	message: (flashcard.allQuestion.Q3.question).replace("How-much", "--------"),
	name: 'oneQ'
},
{
	type: 'input',
	message: flashcard.allQuestion.Q3.answer,
	name: 'oneA'
},
{
	type: 'input',
	name: 'size',
	message: (flashcard.allQuestion.Q5.question).replace("What", "--------"),
	name: 'oneQ'
},
{
	type: 'input',
	message: flashcard.allQuestion.Q4.answer,
	name: 'oneA'
},
{
	type: 'input',
	name: 'size',
	message: (flashcard.allQuestion.Q5.question).replace("What", "--------"),
	name: 'oneQ'
},
{
	type: 'input',
	message: flashcard.allQuestion.Q5.answer,
	name: 'oneA'
}
	]).then(function(response){
//console.log(JSON.stringify(user, null, 2));
//console.log(response.name);
console.log('You entered '+response.size);
	});

};
//};
module.exports = clozeCard;
//------------------------------------
/*
	
var one = new basicCard((flashcard.allQuestion.Q1.question), (flashcard.allQuestion.Q1.answer));
one.display();
console.log('');
var two = new basicCard((flashcard.allQuestion.Q2.question), (flashcard.allQuestion.Q2.answer));
two.display();

var three = new basicCard((flashcard.allQuestion.Q3.question), (flashcard.allQuestion.Q3.answer));
three.display();
var four = new basicCard((flashcard.allQuestion.Q4.question), (flashcard.allQuestion.Q4.answer));
four.display();
var five = new basicCard((flashcard.allQuestion.Q5.question), (flashcard.allQuestion.Q5.answer));
five.display();

*/