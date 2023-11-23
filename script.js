const radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;
let spaceRequire = 0.8; // This is in square meters
let initialPlants = 20;
let maxCapacity = area / spaceRequire; // Maximum capacity of the garden based on plant space requirements

let numWeek = 1; // Change this to simulate different weeks
let numPlantAfterNumWeek = initialPlants * Math.pow(2, numWeek);
console.log(numPlantAfterNumWeek);

// Decision logic for 1 week
    // Check if the space required by the current number of plants is greater than 80% of the garden's area
if (numPlantAfterNumWeek * spaceRequire > area * 0.8) {
    // If so, the garden is at risk of being overpopulated and the plants need to be pruned
    console.log('Prune the plants to avoid exceeding garden capacity.');
    // If the space required is between 50% and 80%, monitor the plants as they are nearing capacity
} else if (numPlantAfterNumWeek * spaceRequire > area * 0.5) {
    console.log('Monitor the plants closely as they are reaching capacity.');
} else {
    // If the space required is less than 50%, there is room to plant more
    console.log('Plant more as there is ample space available.');
}
// for the week 2
numWeek = 2;
numPlantAfterNumWeek = initialPlants * Math.pow(2, numWeek);
console.log(numPlantAfterNumWeek);

if (numPlantAfterNumWeek * spaceRequire > area * 0.8) {
    console.log('Prune the plants to avoid exceeding garden capacity.');
} else if (numPlantAfterNumWeek * spaceRequire > area * 0.5) {
    console.log('Monitor the plants closely as they are reaching capacity.');
} else {
    console.log('Plant more as there is ample space available.');
}

//for the week 3
numWeek = 3;
numPlantAfterNumWeek = initialPlants * Math.pow(2, numWeek);
console.log(numPlantAfterNumWeek);

if (numPlantAfterNumWeek * spaceRequire > area * 0.8) {
    console.log('Prune the plants to avoid exceeding garden capacity.');
} else if (numPlantAfterNumWeek * spaceRequire > area * 0.5) {
    console.log('Monitor the plants closely as they are reaching capacity.');
} else {
    console.log('Plant more as there is ample space available.');
}

//Part2
const plantsForPart2 = 100;
const numWeekForPart2 = 10;
const numPlantAfterNum10Weeks = plantsForPart2 * Math.pow(2, numWeekForPart2);
const requiredSpace = numPlantAfterNum10Weeks* spaceRequire;
// Calculating the radius for the expanded garden
const expandedRadius = Math.sqrt(requiredSpace / PI);
console.log("Additional space require ", requiredSpace, " square meter");
//this round up after 2 decimal
console.log("Additional space require ", Math.round(expandedRadius , 2), " meter");
console.log("Additional space require ", expandedRadius, " meter");