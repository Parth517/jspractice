// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
    let a=array1.join()
    let b=array2.join()
    let c=parseInt(a.replaceAll(",",""));
    let d=parseInt(b.replaceAll(",",""));
    return c+d
    throw new Error('Implement the twoSum function');
  }
  
  /**
   * Checks whether a number is a palindrome.
   *
   * @param {number} value
   * @returns {boolean} whether the number is a palindrome or not
   */
  export function luckyNumber(value) {
    let num=String(value);
    let start=0;
    let end=num.length-1;
    while(end>start){
      if(num[start]!==num[end]){
        return false;
        break;
      }
      start++;
      end--;
    }
    console.log(typeof(num),num[0],num[5])
    return true;
    
    throw new Error('Implement the luckyNumber function');
  }
  
  /**
   * Determines the error message that should be shown to the user
   * for the given input value.
   *
   * @param {string|null|undefined} input
   * @returns {string} error message
   */
  export function errorMessage(input) {
    let message=''
    if(input=='' || input==null || input==undefined){
      message= "Required field";
    }else if(!Number(input)){
      message="Must be a number besides 0";
    }
      return message;
    throw new Error('Implement the errorMessage function');
  }
  