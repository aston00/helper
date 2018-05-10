class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting(){
        return `Hello ${ this.firstName} ${this.lastName}`;
    }

}

let me = new Person('Anatolii', 'Yatsenko');
// console.log(me.greeting());

class player extends Person{
    constructor(firstName , lastName, age, game){
        super(firstName , lastName);
        this.age = age;
        this.game = game;
    }
    static getAgeName(){
        return `I am ${this.age} years old and I play ${this.game}`;
    }


    info() {
        return `Hello ! My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old and my main game I play is ${this.game}`;
    }
}

let CS = new player('Jack', 'Richards', 30, 'Counter Strike');
// console.log(CS.info());

class teammates extends player {
    constructor(firstName , lastName, age, game, friends){
        super(firstName , lastName, age, game);
        this.friends = friends;
    }
    friendListInfo(){
        return `Hello ! My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old and my main game I play is ${this.game} and my teammates are ${this.friends}`;
    }
}


let richard = new teammates('Richard', 'Thompson', 30, 'Counter Strike', ' Emily , Jack , Richard and Anatolii.');


console.log(richard.greeting());
console.log(richard.info());
console.log(richard.friendListInfo());


