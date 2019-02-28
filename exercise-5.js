
//==========================  1. FORM A SENTENCE  ============================

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log('1. FORM A SENTENCE');
console.log(word+' '+second+' '+third+' '+fourth+' '+fifth+' '+sixth+' '+seventh);
console.log('\n');

//========================  2. INDEX ACCESSING - 1 BY 1  =====================

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[4]+word[5]+word[6]+word[7]+word[8]+word[9]+word[10]+word[11]+word[12]+word[13]; // do your own!
var thirdWord = word[15]+word[16]// do your own!
var fourthWord = word[18]+word[19]; // do your own!
var fifthWord = word[21]+word[22]+word[23]+word[24]; // do your own!

console.log('2. INDEX ACCESSING - 1 BY 1');
console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
console.log('\n');

//================  3. BREAKING SENTENCE (AGAIN) USING SUBSTRING  ============

var word3 = 'wow JavaScript is so cool';
var firstWord3 = word.substring(0, 3);
var secondWord3 = word.substring(14, 4); // do your own!
var thirdWord3 = word.substring(15, 17); // do your own!
var fourthWord3 = word.substring(18, 20); // do your own!
var fifthWord3 = word.substring(21, 25); // do your own!

console.log('3. BREAKING SENTENCE (AGAIN) USING SUBSTRING');
console.log('First Word: ' + firstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);
console.log('\n');

//=========  4. BREAKING SENTENCE (YET AGAIN) AND COUNT EACH LENGTH  =========

var word3 = 'wow JavaScript is so cool';
var firstWord3 = word.substring(0, 3);
var secondWord3 = word.substring(4, 14); // do your own!
var thirdWord3 = word.substring(15, 17); // do your own!
var fourthWord3 = word.substring(18, 20); // do your own!
var fifthWord3 = word.substring(21, 25); // do your own!

var firstWordLength = firstWord3.length;
var secondWordLength = secondWord3.length;
var thirdWordLength = thirdWord3.length;
var fourthWordLength = fourthWord3.length;
var fifthWordLength = fifthWord3.length;

console.log('4. BREAKING SENTENCE (YET AGAIN) AND COUNT EACH LENGTH');
console.log('First Word: ' + firstWord3 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifthWordLength);