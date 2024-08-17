// Holiday VI - Shark Pontoon
// Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.

// As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

// You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

// You are given 5 variables;

// sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

// sharkSpeed = how fast it can move in metres/second.

// pontoonDistance = how far you need to swim to safety in metres.

// youSpeed = how fast you can swim in metres/second.

// dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

// The pontoon, you, and the shark are all aligned in one dimension.

// If you make it, return "Alive!", if not, return "Shark Bait!".

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    sharkSpeed = (dolphin) && sharkSpeed / 2 
    let attackDistance = sharkDistance - pontoonDistance
    let closingDistance = sharkSpeed - youSpeed
    let safetyTime = pontoonDistance / youSpeed
    let sharkTime = attackDistance / closingDistance
    return safetyTime < sharkTime ? "Alive!" : "Shark Bait!"
}

//In the shark function first checks if dolphin(which is truthy) is present then the sharkSpeed is halved
//the attackDistance checks for how long it'll take the shark to get to you relative to the pontoon distance(your distance to the pontoon)
//closingDistance checks the rate at which the shark is closing in on you(difference in sharkSpeed and youSpeed)
//safetyTime checks how long it'll take you to get to the pontoon
//sharkTime checks how long it'll take the shark to get to you
//The return statement checks with a tunary operator if your safetyTime is less than sharkTime 
//if safetyTime is less than sharkTime it returns "Alive!" else it returns "Shark Bait!"