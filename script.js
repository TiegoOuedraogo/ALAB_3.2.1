//radius of 5 meters.
/**
 * The formula for calculating the area of a circle is PI multiplied by the radius, squared: const 
 * const PI = 3.1415; 
 * const area = PI * radius * radius; 
 * 
 * Each plant requires a minimum space of 0.8 square meters.
 * The area is starting with 20 plants.
 * The plants double in number every week.
 */
const radius = 5;
const PI = 3.1415;
const area = PI * radius * radius;
let spaceRequire =0.8;//this is in square meter
let initialPlants =20;
let maxCapacity = area/spaceRequire; 

let numWeek=1;
//20 times number of week to the power of 2
const numPlantAfterNumWeek = initialPlants * Math.pow(2 , numWeek);
if (numPlantAfterNumWeek > maxCapacity) {
    numPlantAfterNumWeek = maxCapacity;
}
console.console.log(numPlantAfterNumWeek);