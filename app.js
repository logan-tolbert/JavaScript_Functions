console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    if(count < 0){
        console.log('Please enter a positive number.');
    }
    for(let i = 1; i <= count; i++){
        if (i % 2 === 0) {
        }else{
            console.log(i);
        };
    };
};

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName='user', age=0) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16`;
    if (age < 16)
    {
        return belowSixteen
    }else {
        return aboveSixteen
    };
};

// Exercise 3
console.log("EXERCISE 3:\n==========\n");
function whichQuadrant(x,y){
    switch(true){
        case (x > 0 && y > 0):
            return `(${x},${y}) is in Quadrant 1`;
           
        case (x < 0 && y > 0):
            return `(${x},${y}) is in Quadrant 2`;
           
        case (x < 0 && y < 0):
            return `(${x},${y}) is in Quadrant 3`;
       
        case (x > 0 && y < 0):
            return `(${x},${y}) is in Quadrant 4`;
          
        case (x == 0 && y != 0):
            return `(${x},${y}) is on the X Axis`;
      
        case (x != 0 && y == 0):
            return `(${x},${y}) is on the Y Axis`
        default:
            return 'Origin';
    }
}

console.log(whichQuadrant(0,2));
console.log(whichQuadrant(1,2));
console.log(whichQuadrant(-6,18));

// Exercise 3
console.log("EXERCISE 4:\n==========\n");
function  triangleType(x, y, z) {
    if (x + y > z && x + z > y && y + z > x) {
        if (x == y && y == z){
            return `The given lengths (${x}, ${y}, ${z}) make an equilateral triangle`;
        }else if(x == y || y == z || x ==z){
            return `The given lengths (${x}, ${y}, ${z}) make an isosceles triangle`;
        }else{
            return `The given lengths (${x}, ${y}, ${z}) make a scalene triangle`;
        };
    } else {
        return `The given lengths (${x}, ${y}, ${z}) do not make a valid triangle.`;
    };
};

console.log(triangleType(1,2,2));
console.log(triangleType(1,1,2));


// Exercise 3
console.log("EXERCISE 5:\n==========\n");
function dataPlanStatus(planLimit, day, usage){
    let billingPeriodLength = 30;
    let currentAverage = usage / day;
    let projectedAverage = planLimit / billingPeriodLength;
    let daysRemaining = billingPeriodLength - day;
    let remainingData = planLimit - usage;
    let projectedUsage = daysRemaining * currentAverage.toFixed(2);
    let status;
    
    if (currentAverage > projectedAverage){
        status = 'EXCEEDING';
    }else if (currentAverage < projectedAverage){
        status = 'UNDER';
    } else {
        status = 'AT'
    }

return `${day} days used, ${daysRemaining} days remaining
Average daily use: ${projectedAverage.toFixed(2)} GB/day
You are ${status} your average daily use (${currentAverage.toFixed(2)} GB/day),
continuing this high usage, you'll exceed your data plan by
${((usage + projectedUsage) - planLimit).toFixed(2) } GB.
To stay below your data plan, use no more than ${(remainingData / daysRemaining).toFixed(2)} GB/day.`
};

console.log(dataPlanStatus(100,15,56));