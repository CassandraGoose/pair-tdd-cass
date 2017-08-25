class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }
}

class Deck {
  constructor() {
    this.cards = [];
  }
  add(card) {
    this.cards.push(card);
  }
  filter(suit) {
    // O(1)
    // y = 1
    return this.cards.filter((card) => {
      return card.suit == suit;
    });
    // // define a new array to push the cards to
    // const matchedSuit = [];
    // // in a loop
    // // go through each card in the cards array
    // for (let i = 0; i < this.cards.length; i++) {
    //   // compare the card suit to the suit passed in
    //   if(this.cards[i].suit == suit) {
    //     // push it into a new array
    //     matchedSuit.push(this.cards[i]);
    //   }
    // }
    //
    // // return everything that matches
    // return matchedSuit;
  }
  populate(newCards) {
    // O(n)
    // y = x
    // loop over the new cards
    newCards.forEach((cardArray) => {
      // access the rank
      const rank = cardArray[0];
      // access the suit
      const suit = cardArray[1];
      // call the Card constructor
      const card = new Card(rank, suit);
      // call add card
      this.add(card);
    });
  }
}

module.exports = {
  Card,
  Deck
};
