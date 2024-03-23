// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 */
export function createVisitor(name, age, ticketId) {
    const visitor={name:name,age:age,ticketId:ticketId}
    return visitor;
    throw new Error('Please implement the createVisitor function.');
  }
  
  /**
   * Revokes a ticket for a visitor.
   *
  
   */
  export function revokeTicket(visitor) {
      visitor.ticketId=null;
    return visitor
    throw new Error('Please implement the revokeTicket function.');
  }
  
  /**
   * Determines the status a ticket has in the ticket tracking object.
   *
   * @param {Record<string, string|null>} tickets
   * @param {string} ticketId
   * @returns {string} ticket status
   */
  export function ticketStatus(tickets, ticketId) {
    const name = tickets[ticketId];
    switch (name) {
      case undefined:
        return 'unknown ticket id';
      case null:
        return 'not sold';
      default:
        return `sold to ${name}`
    }
  }
  
  /**
   * Determines the status a ticket has in the ticket tracking object
   * and returns a simplified status message.
   *
   * @param {Record<string, string|null>} tickets
   * @param {string} ticketId
   * @returns {string} ticket status
   */
  export function simpleTicketStatus(tickets, ticketId) {
    const name = tickets[ticketId];
    switch (name) {
      case undefined:
      case null:
        return 'invalid ticket !!!';
      default:
        return name;
      }
  }
  /**
   * Determines the version of the GTC that was signed by the visitor.
   *

   * @returns {string | undefined} version
   */
  export function gtcVersion(visitor) {
    return visitor?.gtc?.version;
  }
  