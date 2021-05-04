//imports
const fs = require('fs');

//helper functions
const getRandomItem = (arr)=>{
  if(arr.length > 1){
    return  arr[Math.floor(Math.random() * arr.length)];
  }else{
    return arr[0];
  }
}

const getRandomValueInRange = (min, max)=>{
  return Math.round(Math.random() * (+max - +min) + +min);
}
//data for random generator
const genders = ['M', 'F'];
const firstNames = {
  M: ['John', 'Luke', 'Ryan', 'Tomasz', 'Piotr', 'Jacek', 'Jake'],
  F: ['Anna', 'Lucy', 'Kamila', 'Dorota', 'Mischa', 'Tanja'],
};
const lastNames = ['Trevino', 'Hamilton', 'Newman', 'Henderson', 'Erickson', 'Nielsen'];
const ages = {
  min: 18,
  max: 78
};
const domains = ['gmail.com', 'onet.poczta.pl', 'wp.pl', 'home.pl'];
//random generator
const randomPerson = (genders, firstNames, lastNames, ages, domains, howMany) => {
  if(howMany){
    const persons = [];
    for(let i = 0; i < howMany; i++){
        //generate random values
        const gender = getRandomItem(genders);        
        const firstName =  getRandomItem(firstNames[gender]);        
        const lastName = getRandomItem(lastNames);        
        const age = getRandomValueInRange(ages.min, ages.max);
        const email = firstName.toLowerCase() + "." +lastName.toLowerCase() + "@" + getRandomItem(domains);
        //combine object
        const person = {
          gender: gender,          
          firstName: firstName,          
          lastName: lastName,
          age: age,
          email: email,          
        }
        //append do main array
        persons[i] = person;        
    }
    return persons;
  }else{
    return null;
  }
};
//convert data to json string
const data = JSON.stringify(randomPerson(genders, firstNames, lastNames, ages, domains, 50000));

//write file
fs.writeFile('people.json', data, (err) => {
  if (err) throw err;
  console.log('File has been successfully generated! Check people.json');
});


