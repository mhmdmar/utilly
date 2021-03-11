export as namespace utilly
export = utilly

declare namespace utilly {
  /**
   * @param value {any} the value to check
   * @return {boolean} Returns true if value is nullish, else false.
   */
  function isNil(value: unknown): boolean

  /**
   * @param value {any} the value to check
   * @return {boolean} Returns true if the value passed is a function, false otherwise.
   */
  function isFunction(value: unknown): boolean

  /**
   * @param value {any} the value to check
   * @return {boolean} Returns true if the value passed is a string, false otherwise.
   */
  function isString(value: unknown): boolean

  /**
   * @param value {any} the value to check
   * @return {boolean} Returns true if the value passed is a boolean, false otherwise.
   */
  function isBoolean(value: unknown): boolean

  /**
   * @param value {any} the value to check
   * @return {boolean} Returns true if the value passed is a boolean, false otherwise.
   */
  function isUndefined(value: unknown): boolean

  /**
   * @param value {any} the value to check
   * @return {boolean} Returns true if the value passed is an integer, false otherwise.
   */
  function isInteger(value: unknown): boolean

  /**
   * @param value {any} the value to check
   * @return {boolean} Returns true if the value passed is a number, false otherwise.
   */
  function isNumber(value: unknown): boolean

  /**
   * @param value {any} the value to check
   * @return {boolean} Returns true if the value passed is empty (empty array,set,map...), false otherwise.
   */
  function isEmpty(value: unknown): boolean

  /**
   * @param value {any} the value to check
   * @return {boolean} Returns true if the value passed is an object, false otherwise.
   */
  function isObject(value: unknown): boolean

  /**
   * @param value {any} the value to check
   * @return {boolean} Returns true if the value passed is a regular expression, false otherwise.
   */
  function isRegExp(value: unknown): boolean

  /**
   * Returns a copy (by value) of the value passed
   * @param value {Object} value to copy
   * @return {Object} Returns object
   */
  function cloneObject(value: object): object

  /**
   * Assigns own and inherited enumerable string keyed properties of source objects to
   * the destination object for all destination properties that resolve to undefined.
   * Source objects are applied from left to right. Once a property is set, additional values of the same property are ignored.
   * @param target {Object}
   * @param sources (...Object): The source objects.
   * @return {Object} Returns object
   */
  function mergeObjects(target: object,sources: object[] ): object



}
