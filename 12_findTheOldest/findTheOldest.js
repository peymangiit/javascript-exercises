const findTheOldest = function(people) {
 const getAge = ({yearOfBirth , yearOfDeath}) => {

    //condition if the person still alive
    if (yearOfDeath === ''){ 
        yearOfDeath=new Date().getFullYear()
    }
    return yearOfDeath-yearOfBirth;
 }
 let oldestAge = getAge(people[0])

 //going through every object in array and compare  
 let oldestPerson = people.reduce((oldest,current) => {
   let currentAge = getAge(current)
    if (currentAge > oldestAge) {
        oldestAge = currentAge;
        return current;
    }
    return oldest;
 });
 return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
