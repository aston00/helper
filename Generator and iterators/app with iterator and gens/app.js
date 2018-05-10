let data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor : 'female',
        location: 'Boston',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jane Smith',
        age: 32,
        gender: 'female',
        lookingfor : 'male',
        location: 'Boston',
        image: 'https://randomuser.me/api/portraits/women/22.jpg'
    },
    {
        name: 'John Chris',
        age: 36,
        gender: 'male',
        lookingfor : 'female',
        location: 'New York',
        image: 'https://randomuser.me/api/portraits/men/12.jpg'
    }
];

//create 
let profiles = profileIterator(data);

//call first profile
nextProfile();

//Next event
document.getElementById('next').addEventListener('click', nextProfile);

//Next profile function to dispaly next profile
function nextProfile(){
    let currentProfile = profiles.next().value;
    if(currentProfile != undefined){
    document.getElementById('profileDisplay').innerHTML = 
    `<ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Location: ${currentProfile.location}</li>
    <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
    `

    document.getElementById('imageDisplay').innerHTML = 
    `<img src="${currentProfile.image}">`;
    } else {
        //no more profiles
        window.location.reload();
    }
}

//Creating iterator function
function profileIterator(profiles){
    //counter
    let nextIndex =0;
    return {
        next: function(){
            return nextIndex < profiles.length ? {value: profiles[nextIndex++], done: false} : {done: true};
        }
    };
}