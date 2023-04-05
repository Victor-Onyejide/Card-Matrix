function setup() {
  const cards = document.querySelectorAll('.card');

  // Initialize the first card as face up
  // cards[0].textContent = 'up';

  cards.forEach((card) => {
    if( card.textContent ==='up')
    card.setAttribute('data-state', 'up')
  })

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      // Check if the clicked card is already face up
      if (card.textContent === 'up') {
        return; // Do nothing if the card is already face up
      }

      // Otherwise, turn over the previously face up card
      const prevCard = document.querySelector('.card[data-state="up"]');
      if (prevCard) {
        prevCard.textContent = 'down';
        prevCard.setAttribute('data-state', 'down');
      }

      // Turn over the clicked card
      card.textContent = 'up';
      card.setAttribute('data-state', 'up');
    });
  });
}

// Example case.
document.body.innerHTML = `
  <table id="card-containen">
  <tbody>
  <tr>
  <td class="card" id="card1">down</td>
  <td class=" card" id="card2">up</td>
  </tr>
  <tr>
  <td class="card" id="card3">down</td>
  <td class=" card" id="card4">down</td> 
  </tr>
  </tbody>
  </tables>`;
setup();
// document.getElementsByClassName("card")[0].click();
console.log(document.body.innerHTML);
