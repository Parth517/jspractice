// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) { 
    let time=0
    switch(name){
      case "Pure Strawberry Joy":
        time=0.5
        break;
      case "Energizer": case "Green Garden":
        time=1.5
        break;
      case "Tropical Island":
        time=3;
        break;
      case "All or Nothing":
        time=5;
        break
      default:
        time=2.5;
        break;
    }
    return time;
    throw new Error('Please implement the timeToMixJuice function');
  }
  
  /**
   * Calculates the number of limes that need to be cut
   * to reach a certain supply.
   *
   * @param {number} wedgesNeeded
   * @param {string[]} limes
   * @returns {number} number of limes cut
   */
  export function limesToCut(wedgesNeeded, limes) {
    let size=0;
    let i=0;
    let count=0;
    let totalSize=0;
    let sum=0;
    while(i<limes.length && wedgesNeeded>totalSize){
      switch(limes[i]){
        case "small":
          size=6;
          break;
        case "medium":
          size=8;
          break;
        case "large":
          size=10;
          break;
        default:
          size=0;
          break;
      }
      totalSize+=size
      i++;
      count++;
    }
    console.log(count,totalSize,wedgesNeeded)
    return count;
    throw new Error('Please implement the limesToCut function');
  }
  
  /**
   * Determines which juices still need to be prepared after the end of the shift.
   *
   * @param {number} timeLeft
   * @param {string[]} orders
   * @returns {string[]} remaining orders after the time is up
   */
  export function remainingOrders(timeLeft, orders) {
    let ta=timeLeft;
    while(ta>0){
      ta-=timeToMixJuice(orders.shift());
    }
    return orders;
    throw new Error('Please implement the remainingOrders function');
  }
  