const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (arr) {
  let result = arr.map((person) => {
    if (typeof person.yearOfDeath != "number") {
      person.age = new Date().getFullYear() - person.yearOfBirth;
    } else {
      person.age = person.yearOfDeath - person.yearOfBirth;
    }
    return person;
  });

  return result.reduce((max, objeto) => (objeto.age > max.age ? objeto : max));
};

// Do not edit below this line
module.exports = findTheOldest;
