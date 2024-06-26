// @ts-nocheck

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
    const newd=deck.map((value)=>value*2)
    return newd
    throw new Error('Implement the seeingDouble function');
  }
  
  /**
   *  Creates triplicates of every 3 found in the deck.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} deck with triplicate 3s
   */
  export function threeOfEachThree(deck) {
    return deck.reduce((acc, current) => {
      if (current === 3) {
        acc.push(3, 3, 3); // Triplicate 3
      } else {
        acc.push(current); // Add current element as is
      }
      return acc;
    }, []);
  }
  
  /**
   * Extracts the middle two cards from a deck.
   * Assumes a deck is always 10 cards.
   *
   * @param {number[]} deck of 10 cards
   *
   * @returns {number[]} deck with only two middle cards
   */
  export function middleTwo(deck) {
   return deck.slice((deck.length/2)-1,(deck.length/2)+1);
    throw new Error('Implement the middleTwo function');
  }
  
  /**
   * Moves the outside two cards to the middle.
   *
   * @param {number[]} deck with even number of cards
   *
   * @returns {number[]} transformed deck
   */
  
  export function sandwichTrick(deck) {
    const a=deck.pop()
    const b=deck.shift();
    deck.splice((deck.length/2),0,a,b)
    console.log(deck)
    return deck
    throw new Error('Implement the sandwichTrick function');
  }
  
  /**
   * Removes every card from the deck except 2s.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} deck with only 2s
   */
  export function twoIsSpecial(deck) {
    return deck.filter((value)=> value===2);
    
  }
  
  /**
   * Returns a perfectly order deck from lowest to highest.
   *
   * @param {number[]} deck shuffled deck
   *
   * @returns {number[]} ordered deck
   */
  export function perfectlyOrdered(deck) {
    return deck.sort((a,b)=>a-b);
    //
    throw new Error('Implement the perfectlyOrdered function');
  }
  
  /**
   * Reorders the deck so that the top card ends up at the bottom.
   *
   * @param {number[]} deck
   *
   * @returns {number[]} reordered deck
   */
  export function reorder(deck) {
    return deck.reverse()
    throw new Error('Implement the reorder function');
  }
  