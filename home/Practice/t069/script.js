'use strict';

class User {
  constructor(name, age) {
    this.name =name;
    this._age = age;
  }

  #surname = "Posohov";   // # - свойство становится приватным

  }

  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof age === 'number' && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log('Недопустимое значение!');
    }
  }
}

console.log(ivan.surname);

ivan.say();