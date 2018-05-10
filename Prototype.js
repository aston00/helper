function Person(first, last , age, hobby, interests){
  this.name = {
    first, 
    last
  };
  this.age = age;
  this.hobby = hobby;
  this.interests = interests;
};

Person.prototype.persInfo = function(){
   console.log('My name is ' + this.name.first +' ' +  this.name.last + ". I am " + this.age + ' years old. My hobby is ' + this.hobby + '. I am interested in ' + this.interests + '.');  
};

  //var tr = new Person('Anatolii', 'Yatsenko', 25, 'reading', 'development');

function Developer(first, last , age, hobby, interests, domain){
  Person.call(this, first, last , age, hobby, interests);
  this.domain = domain;
};


Developer.prototype = Object.create(Person.prototype);
Developer.constructor = Developer;

Developer.prototype.hello = function() {
  console.log( 'I am ' + this.name.first + ". I'm " + this.domain + ' developer. ');
};


function Level (first, last , age, hobby, interests, domain, level) {
    Developer.call(this, first, last , age, hobby, interests, domain);
  this.level = level;
};



Level.prototype = Object.create(Developer.prototype);
Level.prototype.constructor = Level;
Level.prototype.getLevel = function() {
  console.log(this.name.first + ' interests in ' + this.interests + ' and is ' +  this.level + ' ' + this.domain + ' Developer.');
};

var io = new Level('Anatolii', 'Yatsenko', 25, 'reading', 'development', 'Javascript', 'Junior');
io.getLevel();
io.persInfo();
io.hello();

console.log(io.__proto__.__proto__.__proto__.__proto__);