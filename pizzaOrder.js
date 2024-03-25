/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the prize of the pizza given the pizza and the optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
    console.log(extras.length,pizza)
    if(extras.length>0){
      return pizzaPrice(pizza,...extras)
    }
    throw new Error('Please implement the pizzaPrice function');
  }
  
  /**
   * Calculate the price of the total order, given individual orders
   *
   * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
   * @returns {number} the price of the total order
   */
  export function orderPrice(pizzaOrders) {
    throw new Error('Please implement the orderPrice function');
  }
  