//construnctot for user
let User = function(name){
    this.name = name;
    this.chatroom = null;
}

//Idea is be able to have users that can send messages to another singl user or to broadcast to chatroom
User.prototype = {
    send: function(msg, to){
        //this.to  - to the user
        this.chatroom.send(msg, this , to);
    },
    receive: function(msg, from){
        console.log(`${from.name} to ${this.name} : ${msg}`);
    }
}

//constructor for chatroom. Chatroom is mediator(посередник) and users are callings of the chatroom
let Chatroom = function(){
    let users = {}; // list of users

    return {
        //callings have to register with the mediator
        register: function(user){
            users[user.name] = user;
            //chatroom is null by default as we made it but now we making it this
            user.chatroom = this;
        },
        send: function(msg, from, to){
            //Here we check whether it will be broadcasted to the chatroom or cetain user
            if(to ){
                //Single user msg
                to.receive(msg, from);
            } else {
                //Mass msg
                for(key in users){
                    //check if it's not the user who is sending it
                    if(users[key] !== from){
                        users[key].receive(msg, from);
                    }
                }
            }
        }
    }
}

//creating users
let brad = new User('Brad');
let jeff = new User('Jeff');
let sarah = new User('Sarah');

//creating mediator
let chatroom = new Chatroom();

//register the users
chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(sarah);

//sending messages Who sends - to who
brad.send('Hello Jeff', jeff);

sarah.send('Hello brad yo uare ugly' , brad);

jeff.send('Hello everyone!!!');


