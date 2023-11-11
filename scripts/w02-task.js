/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */
// Done!
/* Step 2 - Variables */
let fullName = "Taden Marston";
let currentYear = "2023";
let profilePicture = "images/IMG_0067.JPG";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContext = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute("alt", fullName)

/* Step 5 - Array */
const favoriteFoods = ['Sushi', 'Cheeseburger', 'Pizza','Taco Soup'];
foodElement.innerHTML = `<ul>${favoriteFoods.map(food => `<li>${food}</li>`).join('')}</ul>`;
const newFavoriteFood = 'Orange Chicken';
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;

