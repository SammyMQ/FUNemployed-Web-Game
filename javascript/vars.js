/**Used to store cards & scores/players & Basic Functions**/

var jobs = ['Bartender', 'Psychic', 'Celebrity Impersonator ', 'Model ', 'Magician ', 'Author', 'Queen ', 'Executioner', 'Drill Sergeant', 'Game Show Host', 'School Nurse', 'Motivational Speaker', 'Professional Athlete', 'Intern', 'Mad Scientist', 'Taxi Driver', 'Private Detective', 'B-Movie Actor', 'Fortune Cookie Writer', 'Plumber', 'Singer', 'Mime', 'Super Hero', 'Reality Show Contestant', 'Cheerleader', 'News Anchor', 'Therapist', 'Butler', 'Nanny', 'Tea Party Candidate', 'Archaeologist', 'Proctologist', 'Gym Teacher', 'Bounty Hunter', 'Masseuse', 'Televangelist', 'Child Actor', 'Competetive Eater', 'Used Car Salesman', 'LARPer', 'Stunt Double', 'Politician', 'Venture Capitalist', 'Personal Trainer', 'Pirate', 'Priest', 'Lawyer', 'Dictator', 'Flight Attendant', 'Wet Nurse', 'World Record Holder', 'Ice Cream Maker', 'Housewife', 'Auctioneer', 'TSA Agent', 'Butcher', 'Barista', 'Bachelor', 'Astronaut', 'Super Villain', 'UN Weapons Inspector', 'Secret Agent', 'Person who fixes this bad version of the game', 'Psychic Impersonator', 'Shark Bodyguard', 'Cream of the Crop Quality Tester', 'Mountain Dew Spokesperson', 'Pokemon', 'Personal Meghan Trainer', 'Speedrunner', 'Price Setter for Sims DLC', 'Seto Kaiba', 'Taste Tester', 'Training Dummy', 'Bill Murray', 'Wielder of the Millennium Puzzle', 'Inquisitor', 'Funemployed fixer', 'Twitter user', 'Weird Auncle at family gatherings', 'Your new cat', 'Vocal Director on Glee', 'Digimon Evangelist', 'Celloist', 'Professional Vegetarian', 'Twitter Support', 'Cowboy', 'Masterchef', 'Cigarette Spokesperson', 'Vape Shill', 'Long Haul Space Trucker', 'Deep Sea Fisherman', 'Treasure Hunter', 'Corrupt Lawyer', 'Corrupt Government Official', 'Ice Cream Taster', 'Presenter of a How Its Made television series'];
var jobs_used = [];
var quals = ['Spaceship', 'Merit Badge', 'Confession', 'Black Hole', 'Brownies', 'Ambidextrous', 'Peg Leg', 'Dragon', 'Six Months Left to Live', 'Jacked Forearms', 'Box Wine', 'Slimy', 'Social Media Profile', 'Utility Belt', 'Born on the Streets', 'Fear', 'Expert', 'Emotionally Hollow', 'Student Loans', 'Box', 'Utterly Alone', 'Grunt', 'Open', 'Chainsaw', 'Sob Story', 'Secret Identity', 'Deep', 'Decoder Ring', 'Shady', 'Cape', 'Cavity', 'Chocolate', 'Monocle', 'Brass Knuckles', 'Clammy', 'Night Terrors', 'Filter', 'Room to Grow', 'Extra Credit', 'Rock', 'Crabs', 'The Perfect Alibi', 'Bitches', 'Boomerang', 'Recess', 'Sneaky', 'Diplomatic Immunity', 'Australian Accent', 'Conviction', 'No Sense of Humor', 'Self-Respect', 'Grass', 'Minivan', 'Film', 'British Accent', 'False Teeth', 'Soundproof Room', 'Spirit', 'Survival Skills', 'Katana', 'Holy Grail', 'A Dollar', 'Cane', 'Piercing', 'Drive', 'Evil Laugh', 'Daddy Issues', 'Sloth', 'Jackhammer', 'Handlebar Moustache', 'Liberal', 'Gold Cross', 'Fancy Hat', 'Self-Loathing', 'Swear', 'Million Dollar Smile', 'Bone', 'Nunchucks', 'Grit', 'Dirty', 'Mind Reader', 'Sawed-Off Shotgun', 'Utterly Adorable', 'Cannibal', 'License', "Can't Lie", 'Scissors', 'Field Experience', 'Wings', 'Camera', 'Medicine', 'Sees Dead People', 'Viral', 'Black Belt', 'Calendar Model', 'Soft Voice', 'Treats', 'Night Vision', 'Shame', 'Genetically Engineered', 'Soft Hands', 'Jet Packs', 'Hook', 'Clinically Depressed', 'Spray', 'Can Defuse Bombs', 'Cavernous', "Can't Feel", 'Screw', 'Scalpel', 'Nothing Left to Lose', 'Pride', 'Envy', 'Communes with Fish', 'Tip', 'Stool', 'Poker Face', 'Soulless', 'Sidekick', 'Cougars', 'Candy', 'Mace', 'Short Attention Span', 'Scented Candle', 'Moist', 'Flaming Sword', 'Indecisive', 'Pyromaniac', 'Apples', 'Scientology', 'Sack', 'Firebreathing', 'Online Dating Profile', 'Three-Piece Suit', 'Day Job', 'Crystal Ball', 'Consolation Prize', 'Passive Agressive', 'A.I.', 'Rain', 'Terrible Things', 'Fifty Tattoos', 'Rum', 'Wrath', 'Work Ethic', 'Experiments', 'Sad Childhood', 'Conservative', 'Sports Car', 'Walker', 'Trust Fund', "Devil's Advocate", '1%', 'Numb Face', 'Time Machine', 'Hot Dog', 'Jazz Hands', 'Hash', 'Every Problem Ever', 'Ripped', "Bachelor's Degree", 'Cold Black Heart', 'Claw', 'No Sense of Smell', 'Shed', 'Really Bad Aim', 'Heights', 'Poor Judgement', 'Magic Wand', 'Greed', 'Olive Oil', 'Braces', 'High', 'Patient', 'Beefcake', 'Hoverboard', 'God Complex', 'Invisible Ink', 'Combover', 'Chain', 'Treasure', 'Uncontrollable Gas', 'Dingo Repellent', 'Gag Reflex', 'Shaved', 'Excuses', 'Decency', 'The Antidote', 'Beard', 'Hot Mess', 'Original Sin', 'Nice Things', 'Hocus Pocus', 'Privilege', 'Camouflage', 'X-ray Vision', 'Nutcracker', 'Fifty Cats', 'Foam Sword', 'Shallow', 'Self-Entitled', 'Trench Coat', 'Sweat', 'Boats', 'Fairy Dust', 'Red Panda', 'Private Jet', 'Tight Quarters', 'Italian Accent', 'Sheltered', 'Yoga Pants', 'Club', 'Brick', 'Telenovela', 'Rapid', 'Buddhism', 'Crack', 'Piece of Cake', 'Package', 'Six-Pack', 'Critical Mass', 'Gluttony', 'Tentacles', 'Wasp', 'Apocalypse', 'Minions TM', 'Emotionally Unstable', 'Online Degree', 'Bad Luck', 'French Accent', 'Level', 'Hungover', 'Disability', 'Illiterate', 'Hallucinates', 'Game Tester', 'Organic', 'Files', 'Captain', 'Burning Bush', 'Wheelchair',  'Handlebars', 'Pound', 'Biotic Implants', 'Dungeon', 'Antique Garfield Telephone', 'rude cat', 'Brand New Garfield Telephone', 'cat tv', 'lasagne tiddies', 'driftwood sculpting classes', 'github', 'bear', 'DLC', 'uncontrollable crab', 'Golden Globe Award', 'snake', 'lasagne', 'Lin Manuel Miranda', 'Wikipedia The Free Online Encyclopedia that Anyone can Edit', 'vantablack paint', 'Licensed Exorcist', 'Cloud Gate', 'Grub', 'Bacon Cheeseburger Pizza the one with the mayonnaise on top please', 'starred as the titular character in Indiana Jones and the Crystal Skull', 'a margarita in each hand', 'Cardassian Demilitarized Zone', 'Deku Scrub', 
'a pack of angry dalmatians', 'Tragic Backstory', 'Redemption Arc', 'Non-canon gay character', 'platinum library card', 'CRAB LEGS', 'mint condition pokemon card', 'own the rude version of Funemployed', 'Chose Bulbasaur', 'Exodia The Forbidden One', 'authored Crabs Adjust Humidity', 'new yorker accent', 'history of killing previous employers', 'Joey The Circle', 'REDACTED'];
var quals_used = [];

//counters
var scores = {}; //example, will populate with function later
var numPlayers = 0;
var currentBoss = 0;
var currentPlayer = 1; //tracks which player/employee is going up for quals
var qualCounter = 1;

//Helper Functions
function getJob(){
	if(jobs.length === 0){
		jobs = jobs.concat(jobs_used);
		jobs_used = [];
	}
	var index = Math.floor(Math.random() * jobs.length); //random var
	var result = jobs[index]; //returns result later
	jobs_used = jobs_used.concat(jobs.splice(index, 1)); //puts the jobs into used arr
	return result; //returns result
}
function getQual(){
	if(quals.length === 0){
		quals = quals.concat(quals_used);
		quals_used = [];
	}
	var index = Math.floor(Math.random() * quals.length); //random var
	var result = quals[index]; //returns result later
	quals_used = quals_used.concat(quals.splice(index, 1)); //puts the quals into used arr
	return result; //returns result
}
function nextBoss(){
	return (currentBoss+1 == numPlayers)?0:currentBoss+1; // basically cycles through the players properly
}
function pName(x){
	return Object.keys(scores)[x]; //return dictionary entry using index
}


/***********Animations*************/
//Animate Functions
function animateTitle(){
	$("#MainPage .select").hide();
	$('#MainPage .boxes').hide();
	$('#MainPage .startgame').hide();
	$('#MainPage .howPlay').hide();
	for(i=0;i<3;i++){
		var nSelector = "input[name='pName" + i + "']";
		$(nSelector).hide();
	}
	quickAnim("#MainPage .title", "zoomIn");
	setTimeout(quickAnim, 400, '#MainPage .select', 'zoomIn',);
	setTimeout(quickAnim, 800, '#MainPage .boxes', 'zoomIn',);
	for(i=0;i<3;i++){
		var nSelector = "input[name='pName" + i + "']";
		setTimeout(quickAnim, 750+(75*i), nSelector, 'zoomIn',);
	}
	setTimeout(quickAnim, 1200, '#MainPage .startgame', 'zoomIn');
	setTimeout(quickAnim, 1250, '#MainPage .howPlay', 'zoomIn');
}
function roundStartAnim(){
	setTimeout(quickAnim, 1100, "#GamePage", "slideInDown");
	
	$("#GamePage").children().hide();
	$("#GamePage h1").show();
	var timeoutCounter = 2100;
	var timeoutInterval = 500;
	$("#GamePage").children().each(function () {
	  	if(!$(this).is("h1") && !$(this).is("div#pickWinner")){
	  		setTimeout(quickAnimObj, timeoutCounter, $(this), "slideInRight");
	  		timeoutCounter+=timeoutInterval;
	  	}
	});
	
}

//Animate Helper Functions
function quickAnim(selector, animName){
  $(selector).addClass(animName + ' animated').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    $(this).removeClass(animName + ' animated');
    $(this).show();
  });
};
function quickAnimObj(Obj, animName){
  Obj.addClass(animName + ' animated').show().one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    Obj.removeClass(animName + ' animated');
    Obj.show();
  });
};

function quickAnimHide(selector, animName){
  $(selector).addClass(animName + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
  	$(this).hide();
    $(this).removeClass(animName + ' animated');
  });
};

animateTitle();

