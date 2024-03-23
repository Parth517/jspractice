// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
    let number=0;
    stack.forEach((nums)=>{
      if(nums===card){
        number++
      }
    })
    return number;
  }
  
  /**
   * Determine how many cards are odd or even
   *
   * @param {number[]} stack
   * @param {boolean} type the type of value to check for - odd or even
   * @returns {number} number of cards that are either odd or even (depending on `type`)
   */
  export function determineOddEvenCards(stack, type) {
    let evenorodd=0;
   
    for(let nums of stack){
      console.log(nums,stack)
      let a=nums%2
      console.log(a)
      if(nums%2===0 && type==true){
        evenorodd++;
      }else if(nums%2!==0 && type==false){
        evenorodd++
      }
    }
    
    return evenorodd;
    throw new Error('Implement the determineOddEvenCards function');
  }
  