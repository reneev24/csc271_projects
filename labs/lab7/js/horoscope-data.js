var sign="libra";
var birth_month="September";
var birthday= 24;
var lucky_number= 0.24;
var description="funny, kind people";
var belief_astrology= false;

var element = document.getElementById('sign');
element.innerHTML = sign;

var element = document.getElementsByClassName('birthday')[0];
element.innerHTML += birth_month + " " + birthday;

var element = document.getElementsByClassName('luckyNum')[0];
element.innerHTML += lucky_number;

var element = document.getElementsByTagName('p');
element[0].innerHTML = description;

element[1].innerHTML+="<strong>" + belief_astrology + "</strong>";

var mood = 4.0;
var moodRating1 = 3.4;
var moodRating2 = 1.0
var final_mood = (mood + moodRating1 + moodRating2) / 3;

var element = document.getElementById('mood');
element.innerHTML += mood + "the average mood of libra, sagittarius, and asparagus is:" + final_mood;

var signs= ["libra", "sagittarius", "asparagus"];
var libraSign=signs[0];
var sign1=signs[1];
var sign2=signs[2];

var element = document.getElementById('me')
element.innerHTMl += libraSign;
var element = document.getElementById('p1')
element.innerHTMl += sign1;
var element = document.getElementById('p2')
element.innerHTMl += sign2;

var description = [
	"Today is a day for new beginnings. Embrace change and seize opportunities.",
	"Your determination will lead to success today. Stay focused on your goals.",
	"Communication is key today. Express yourself clearly and listen to others.",
	"Trust your intuition. It will guide you in making the right decisions.",
	"Your creativity shines today. Use it to inspire and lead others.",
	"Pay attention to the details. Your meticulous work will pay off.",
	"Balance is essential. Find harmony in all aspects of your life.",
	"Embrace transformation. Let go of what no longer serves you.",
	"Adventure awaits. Explore new horizons and expand your horizons.",
	"Hard work leads to success. Keep pushing toward your goals.",
	"Your unique perspective is an asset. Share your ideas with others.",
	"Trust your emotions. They will guide you in making the right choices.",
	];

var myD= description[1];
var p1_D= description[4];
var p2_D= description[2];
description[5]="today is good"

var element = document.getElementById('me')
element.innerHTMl += myD;
var element = document.getElementById('p1')
element.innerHTMl += p1_D;
var element = document.getElementById('p2')
element.innerHTMl += p2_D;


