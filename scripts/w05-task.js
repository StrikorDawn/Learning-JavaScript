/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temple");
let templeList = 
{

}

/* async displayTemples Function */
const displayTemples = (temples) => {
    templeList.array.forEach(element => {
        let article = document.createElement("article");
        let h3 = document.createElement('h3');
        h3.textContent(templesElement)
        let img = document.createElement('img');
        img.setAttribute('src', templeList.imageUrl)
        img.setAttribute('alt', templeList.location)
    });
}



/* async getTemples Function using fetch()*/


/* reset Function */


/* sortBy Function */



getTemples();

/* Event Listener */
