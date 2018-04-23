// Code your solution in this file.

function lowerCaseDrivers(drivers){
  return drivers.map(function (name){
    return name.toLowerCase();
  });

}

function nameToAttributes(array){
  return array.map(function (name){
    let splitArr = name.split(" ");
    let first = splitArr[0];
    let last = splitArr[1];
    return Object.assign({}, {firstName: first, lastName: last});
  });
}

const drivers = ['Bobby Smith', 'Sammy Watkins', 'Sally Jenkins', 'Annette Sawyer', 'Sarah Hucklebee', 'bobby ridge'];
console.log(nameToAttributes(drivers));

function attributesToPhrase(array){
  return array.map(function(element){
    return `${element['name']} is from ${element['hometown']}`
  });

}

// const drivers = [
//   { name: 'Bobby',   hometown: 'Pittsburgh'  },
//   { name: 'Sammy',   hometown: 'New York'    },
//   { name: 'Sally',   hometown: 'Cleveland'   },
//   { name: 'Annette', hometown: 'Los Angeles' },
//   { name: 'Bobby',   hometown: 'Tampa Bay'   }
// ];
//
// expect(attributesToPhrase(drivers)).to.eql([
//   'Bobby is from Pittsburgh', 'Sammy is from New York', 'Sally is from Cleveland', 'Annette is from Los Angeles', 'Bobby is from Tampa Bay'
// ]);

//
// return Object.assign({}, account, { accessLevel: 'admin' });
//
// const drivers = ['Bobby Smith', 'Sammy Watkins', 'Sally Jenkins', 'Annette Sawyer', 'Sarah Hucklebee', 'bobby ridge'];
//
// expect(nameToAttributes(drivers)).to.eql([
//   { firstName: 'Bobby',   lastName: 'Smith'     },
//   { firstName: 'Sammy',   lastName: 'Watkins'   },
//   { firstName: 'Sally',   lastName: 'Jenkins'   },
