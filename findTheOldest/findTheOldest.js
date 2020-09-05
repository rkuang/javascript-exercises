let findTheOldest = function(people) {
    let oldestPerson = people[0];
    people.slice(1).forEach(person => {
        if (ageOf(person) > ageOf(oldestPerson))
            oldestPerson = person;
    });
    return oldestPerson;
}

function ageOf(person) {
    if (person.yearOfDeath)
        return person.yearOfDeath-person.yearOfBirth;
    else
        return new Date().getFullYear()-person.yearOfBirth;
}

module.exports = findTheOldest
