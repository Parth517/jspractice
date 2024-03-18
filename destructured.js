/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export function getFirstCard(deck) {
    const [a]=deck;
    return a;
    throw new Error('Implement the getFirstCard function');
  }
  
  /**
   * Get the second card in the given deck
   *
   * @param {Card[]} deck
   *
   * @returns {Card} the second card in the deck
   */
  export function getSecondCard(deck) {
    const [a,b]=deck;
    return b;
    throw new Error('Implement the getSecondCard function');
  }
  
  /**
   * Switch the position of the first two cards in the given deck
   *
   * @param {Card[]} deck
   *
   * @returns {Card[]} new deck with reordered cards
   */
  export function swapTopTwoCards(deck) {
    let [a,b,...rest]=deck;
    let temp=0;
    for(let i=0;i<1;i++){
      temp=a;
      a=b;
      b=temp;
    }
    const ans=[a,b,...rest]
    return ans;
    throw new Error('Implement the swapTopTwoCards function');
  }
  
  /**
   * Put the top card of the given deck into a separate discard pile
   *
   * @param {Card[]} deck
   *
   * @returns {[Card, Card[]]} the top card of the given
   * deck and a new deck containing all the other cards
   */
  export function discardTopCard(deck) {
    let a=deck.shift();
    let ans=[a,[...deck]]
    console.log(ans)
    return ans
    throw new Error('Implement the discardTopCard function');
  }
  
  /** @type {Card[]} **/
  const FACE_CARDS = ['jack', 'queen', 'king'];
  
  /**
   * Insert face cards into the given deck
   *
   * @param {Card[]} deck
   *
   * @returns {Card[]} new deck where the second,
   * third, and fourth cards are the face cards
   */
  export function insertFaceCards(deck) {
    let [a]=deck
    deck.shift();
    let new1=[a,...FACE_CARDS,...deck]
    return new1
    throw new Error('Implement the insertFaceCards function');
  }
  