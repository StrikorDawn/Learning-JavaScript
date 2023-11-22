/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = 
{
    name: "Taden Marston",
    photo: "images/IMG_0067.JPG",
    favoriteFoods: ["CheeseBurger","Sushi","Pork Ribs", "Pizza"],
    hoobies: ["Playing Video Games","Playing D&D","Stage Fighting","Playing PickleBall"],
    placesLived: []
};
 
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Kaysville, Utah',
        length: '8 years'
    },
    {
        place: 'Farmington, Utah',
        length: '4 years'
    },
    {
        place: 'Middleton, Idaho',
        length: '8 years'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);    
});

/* Hobbies List */
myProfile.hoobies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);    
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placesLived => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = placesLived.place;
    dd.textContent = placesLived.length;
    document.querySelector('#places-lived').appendChild(dt);    
    document.querySelector('#places-lived').appendChild(dd);    
});

