const namesElement = document.querySelector("#nameGrid");
const buttonElement = document.querySelector('#pickButton');
let nameList = [];

const displayNames = (names) => {
  names.forEach(name => {
    let nameCard = document.createElement("div");
    nameCard.classList.add('nameCard');
    nameCard.textContent = name;
    namesElement.appendChild(nameCard);

  });
  
}

const getNames = async () => {
  const response = await fetch("https://run.mocky.io/v3/70814ee1-200b-460d-acf8-4cbd82e8e916");
      if (response.ok) {
          nameList = await response.json();
          displayNames(nameList);
          console.log(nameList);
  }
}

buttonElement.addEventListener('click', ()=> {
  if (!animationInProgress) {
    animationInProgress = true;
    const nameCards = document.querySelectorAll('.nameCard');
    const animationDuration = 7000;

    nameCards.forEach(card => {
      card.classList.remove('highlight');
    });

    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * nameCards.length);
      const randomCard = nameCards[randomIndex];

      randomCard.classList.add('highlight');

      setTimeout(() => {
        randomCard.classList.remove('highlight');
      }, 1000);
    }, 1000);

    setTimeout(() => {
      clearInterval(intervalId);
      const selectedCard = nameCards[Math.floor(Math.random() * nameCards.length)];
      alert(`Selected Prayer: ${selectedCard.textContent}`);
      animationInProgress = false;
    }, animationDuration);
  }
});
  

getNames();