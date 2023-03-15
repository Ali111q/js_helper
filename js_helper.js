/**
 * Removes an element from an array at the specified index.
 *
 * @function
 * @memberOf Array
 *
 * @param {number} index - The index of the element to remove.
 * @param {Array} [array=this] - The array to remove the element from. If not provided, the function will use the current array instance.
 *
 * @returns {Array} A new array with the element removed.
 *
 * @throws {Error} If the index is less than 0 or greater than or equal to the length of the array.
 * @throws {Error} If the input array is undefined or null.
 *
 * @example
 * const myArray = [1, 2, 3, 4, 5];
 * const newArray = myArray.remove(2);
 * console.log(newArray); // [1, 2, 4, 5]
 *
 * @example
 * const myArray = [1, 2, 3, 4, 5];
 * const newArray = remove.call(myArray, 2);
 * console.log(newArray); // [1, 2, 4, 5]
 */
 function remove(index, array) {
    let arr = array ?? this;
    let final;
    if (index < arr.length && index >= 0) {
      final = arr.filter((element, i) => i !== index);
    } else {
      throw new Error("Index must be greater or equal 0 and less than the length of the array.");
    }
    if (!final) {
      throw new Error("The input array is undefined or null.");
    }
    return final;
  }  
  Array.prototype.remove = remove;