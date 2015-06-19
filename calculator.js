/**
 * Declare a function named `calculatorModule`
 * this function will have two private variables declared inside of it.
 * @variable PRIVATE { Number } `memory`
 * @variable PRIVATE { Number } `total`
 * @return {object} `calculator` object that can be used
 */
var calculatorModule = function(number) {
  var memory = 0;
  var total = 0;
  return {
    load : _load,
    getTotal : _getTotal,
    add : _adds,
    subtract : _subtract,
    multiply : _multiply,
    divide : _divide,
    recallMemory : _recallMemory,
    saveMemory : _saveMemory,
    clearMemory : _clearMemory
  };

  /**
  * sets the `total` to the number passed in
  * @param  { Number } x
  * @return { Number }    current total
  */
  function _load(number) {
    if (typeof number !== 'number') {
      return 'Need a number';
    } else {
      total = number;
      return total;
    }
  }


  /**
   * Return the value of `total`
   * @return { Number }
   */
  function _getTotal() {
    return total;
  }


  /**
   * Sums the value passed in with `total`
   * @param { Number } x
   */
  function _adds(number) {
    if (typeof number !== 'number') {
      return 'Need a number';
    } else {
      total += number;
    }
  }


  /**
   * Subtracts the value passed in from `total`
   * @param  { Number } x
   */
  function _subtract(number) {
    if (typeof number !== 'number') {
      return 'Need a number';
    } else {
      total -= number;
    }
  }

  /**
   * Multiplies the value by `total`
   * @param  { Number } x
   */
  function _multiply(number) {
    if (typeof number !== 'number') {
      return 'Need a number';
    } else {
      total *= number;
    }
  }

  /**
   * Divides the value passing in by `total`
   * @param  { Number } x
   */
  function _divide(number) {
    if (typeof number !== 'number') {
      return 'Need a number';
    } else {
      total /= number;
    }
  }

  /**
   * Return the value stored at `memory`
   * @return { Number }
   */
  function _recallMemory() {
    return memory;
  }


  /**
   * Stores the value of `total` to `memory`
   */
  function _saveMemory() {
    memory = total;
  }

  /**
   * Clear the value stored at `memory`
   */
  function _clearMemory() {
    memory = 0;
  }

  /**
   * Validation
   */

};
