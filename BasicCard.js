var flashcard = require('./question.js');
var inquirer = require('inquirer');

var basicCard = function(){

inquirer.prompt([
{
	type: 'input',
	name: 'size',
	message: flashcard.allQuestion.Q1.question,
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
	message: flashcard.allQuestion.Q2.question,
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
	message: flashcard.allQuestion.Q3.question,
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
	message: flashcard.allQuestion.Q4.question,
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
	message: flashcard.allQuestion.Q5.question,
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
module.exports = basicCard;
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