function MemberFactory(){
    this.createMember = function(name , type){
        let member;
        //check what type the membership is of the acc
        if(type === 'simple'){
            member = new SimpleMembership(name);
        } else if(type === 'standard'){
            member = new StandardMembership(name)
        } else if(type === 'super'){
            member = new SuperMembership(name);
        }

        member.type = type;

        //Spit name ,membership type and cost
        member.define = function(){
            console.log(`${this.name} (${this.type}) : ${this.cost}`);
        }

        return member;
    }
}

let SimpleMembership = function(name){
    this.name  = name;
    this.cost = '$5'
}


let StandardMembership = function(name){
    this.name  = name;
    this.cost = '$15'
}


let SuperMembership = function(name){
    this.name  = name;
    this.cost = '$25'
}

let members = [];
let factory = new MemberFactory();

//add member
members.push(factory.createMember('John Doe ', 'simple'));
members.push(factory.createMember('Chris Jackson ', 'super'));
members.push(factory.createMember('John Williams ', 'standard'));

console.log(members);

members.forEach((member =>{
    member.define();
}))