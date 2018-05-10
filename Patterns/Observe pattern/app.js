//constructor
function EventObserver(){
    //respresents the functions that will be passed into it
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function(fn){
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    },
    unsubscribe: function(fn){
        //Filter out from the list whatever matches the callback function.If there is no match, the callback gets to stay on the list.The filter returns a new list and reassigns the list of observers

        this.observers = this.observers.filter(function(item){
            //item represents the function passed in
            if(item !== fn){
                return item;
            }
        });
        console.log(`You are now unsubbed from ${fn.name}`);
    },
    fire: function(){
        this.observers.forEach(item => {
            item.call();
        });
    }
}

let click = new EventObserver();

//Event listeners
document.querySelector('.sub-ms').addEventListener('click', function(e){
    click.subscribe(getCurrentMilisec);
});

document.querySelector('.unsub-ms').addEventListener('click', function(e){
    click.unsubscribe(getCurrentMilisec);
});

document.querySelector('.fire').addEventListener('click', function(e){
    click.fire();
});


//Clic khandler
let getCurrentMilisec = function(){
    console.log(`Current Miliseconds : ${new Date().getMilliseconds()}`)
}